import { Badge } from "@/styles/radix-baseui/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/styles/radix-baseui/ui/table"

type Prop = {
  name: string
  type: string
  required: boolean
  defaultValue: string | null
  description: string
}

// Props come from showcase/props.json: TypeScript types and JSDoc of the registry source.
function PartTable({
  name,
  props,
  main,
}: {
  name: string
  props: Prop[]
  main: boolean
}) {
  const described = props.some((prop) => prop.description)
  return (
    <div className={main ? "mt-4" : "mt-8"}>
      {!main && <h3 className="text-lg font-semibold">{name}</h3>}
      <div className="mt-3 overflow-x-auto rounded-2xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              {described && (
                <TableHead className="w-2/5">Description</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.name} className="align-top">
                <TableCell className="font-mono text-[13px] whitespace-nowrap">
                  {prop.name}
                  {prop.required && <span className="text-destructive">*</span>}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="h-auto max-w-72 font-mono text-[12px] font-normal break-words whitespace-normal"
                  >
                    {prop.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-[13px]">
                  {prop.defaultValue ?? "—"}
                </TableCell>
                {described && (
                  <TableCell className="text-sm whitespace-normal text-muted-foreground">
                    {prop.description.split("\n")[0] || "—"}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/** The Props section: the main part first, the other parts of the component under their own headings. */
export function PropsSection({ parts }: { parts: [string, Prop[]][] }) {
  const shown = parts.filter(([, props]) => props.length)
  if (!shown.length) return null
  return (
    <section id="props" data-anchor="Props" className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">Props</h2>
      {shown.map(([name, props], i) => (
        <PartTable key={name} name={name} props={props} main={i === 0} />
      ))}
    </section>
  )
}
