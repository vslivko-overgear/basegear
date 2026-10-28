// Extracts the props of every Radix ui component into showcase/props.json for the showcase props tables.
// Run: tsx --tsconfig ./tsconfig.scripts.json ./scripts/build-showcase-props.mts
import { promises as fs } from "fs"
import path from "path"
import { withCustomConfig } from "react-docgen-typescript"

const UI_DIR = path.join(process.cwd(), "registry/bases/radix/ui")
const OUT = path.join(process.cwd(), "showcase/props.json")

type Prop = {
  name: string
  type: string
  required: boolean
  defaultValue: string | null
  description: string
}

const parser = withCustomConfig(path.join(process.cwd(), "tsconfig.json"), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Own props and the props of the Radix/Base UI primitive; DOM attributes from @types/react are noise.
  propFilter: (prop) =>
    !prop.parent || !/node_modules\/(\.pnpm\/)?@types[+/]react/.test(prop.parent.fileName),
})

const typeOf = (t: { name: string; raw?: string; value?: { value: string }[] }) =>
  t.name === "enum" && Array.isArray(t.value)
    ? t.value.map((v) => v.value).join(" | ")
    : (t.raw ?? t.name)

const files = (await fs.readdir(UI_DIR)).filter((f) => f.endsWith(".tsx")).sort()
const out: Record<string, Record<string, Prop[]>> = {}

for (const file of files) {
  const docs = parser.parse(path.join(UI_DIR, file))
  const item = file.replace(/\.tsx$/, "")
  out[item] = {}
  for (const doc of docs) {
    out[item][doc.displayName] = Object.values(doc.props)
      .filter((p) => !["className", "children", "ref", "key", "style"].includes(p.name))
      .map((p) => ({
        name: p.name,
        type: typeOf(p.type),
        required: p.required,
        defaultValue: p.defaultValue?.value != null ? String(p.defaultValue.value) : null,
        description: p.description,
      }))
      .sort((a, b) => Number(b.required) - Number(a.required) || a.name.localeCompare(b.name))
  }
}

await fs.mkdir(path.dirname(OUT), { recursive: true })
await fs.writeFile(OUT, JSON.stringify(out, null, 2) + "\n")
console.log(`showcase/props.json: ${files.length} files, ${Object.values(out).reduce((n, c) => n + Object.keys(c).length, 0)} components`)
