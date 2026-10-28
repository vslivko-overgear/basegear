import "server-only"

import { existsSync, promises as fs } from "fs"
import path from "path"
import {
  COMPONENT_GROUPS,
  FOUNDATIONS,
  THEMING,
  type CatalogPage,
} from "@/showcase/catalog"

const DOCS_DIR = path.join(process.cwd(), "content/docs/components/radix")

export type ShowcaseExample = { name: string; title: string; source: string }
export type ShowcaseDoc = {
  slug: string
  title: string
  description: string
  examples: ShowcaseExample[]
}

const frontmatter = (src: string, key: string) =>
  src.match(new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, "m"))?.[1] ?? ""

/** All catalog pages; component titles come from their docs frontmatter. */
export async function getCatalog(): Promise<CatalogPage[]> {
  const meta = JSON.parse(
    await fs.readFile(path.join(DOCS_DIR, "meta.json"), "utf8")
  ) as { pages: string[] }
  const available = meta.pages.filter((slug) =>
    existsSync(path.join(DOCS_DIR, `${slug}.mdx`))
  )
  const grouped = new Set(COMPONENT_GROUPS.flatMap((g) => g.pages))
  const components: CatalogPage[] = []
  for (const { group, pages } of [
    ...COMPONENT_GROUPS,
    { group: "More", pages: available.filter((s) => !grouped.has(s)) },
  ]) {
    for (const slug of pages) {
      if (!available.includes(slug)) continue
      const src = await fs.readFile(path.join(DOCS_DIR, `${slug}.mdx`), "utf8")
      components.push({
        section: "components",
        slug,
        title: frontmatter(src, "title") || slug,
        group,
      })
    }
  }
  return [...THEMING, ...FOUNDATIONS, ...components]
}

/** A component page: its docs title and description, and every ComponentPreview as an example under its heading. */
export async function getComponentDoc(
  slug: string
): Promise<ShowcaseDoc | null> {
  const file = path.join(DOCS_DIR, `${slug}.mdx`)
  if (!existsSync(file)) return null
  const src = await fs.readFile(file, "utf8")
  const examples: ShowcaseExample[] = []
  let heading = "Overview"
  const seen = new Set<string>()
  for (const line of src.split("\n")) {
    const h = line.match(/^#{2,3}\s+(.+)$/)
    if (h) heading = h[1].trim()
    const m = line.match(/name="([\w-]+)"/)
    const isPreview =
      m && (line.includes("<ComponentPreview") || /^\s+name=/.test(line))
    if (!m || !isPreview || seen.has(m[1])) continue
    const exampleFile = path.join(
      process.cwd(),
      "examples/radix",
      `${m[1]}.tsx`
    )
    if (!existsSync(exampleFile)) continue
    seen.add(m[1])
    const title = examples.some((e) => e.title === heading)
      ? `${heading}: ${m[1]}`
      : heading
    examples.push({
      name: m[1],
      title,
      source: await readExampleSource(exampleFile),
    })
  }
  return {
    slug,
    title: frontmatter(src, "title") || slug,
    description: frontmatter(src, "description"),
    examples,
  }
}

// Demos import the compiled style; show the import path a project uses.
async function readExampleSource(file: string) {
  const src = await fs.readFile(file, "utf8")
  return src
    .replace(/@\/styles\/radix-baseui\/ui\//g, "@/components/ui/")
    .trim()
}

export async function getComponentProps(slug: string) {
  const props = (await import("@/showcase/props.json")).default as Record<
    string,
    Record<
      string,
      {
        name: string
        type: string
        required: boolean
        defaultValue: string | null
        description: string
      }[]
    >
  >
  return props[slug] ?? {}
}
