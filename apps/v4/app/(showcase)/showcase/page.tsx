import Link from "next/link"
import { getCatalog } from "@/showcase/docs"
import { PageHeader } from "@/showcase/page-header"

import { Card, CardHeader, CardTitle } from "@/styles/radix-baseui/ui/card"

const hrefOf = (p: { section: string; slug: string }) =>
  `/showcase/${p.section}/${p.slug}`

export default async function ShowcaseHome() {
  const pages = await getCatalog()
  const sections = [
    { key: "theming", title: "Theming" },
    { key: "foundations", title: "Foundations" },
    { key: "components", title: "Components" },
  ] as const
  return (
    <article>
      <PageHeader
        eyebrow="Design system"
        title="basegear"
        lead="baseui rebuilt as shadcn/ui on Radix, in Overgear colors. Every component here is the registry component you install with npx shadcn add, and this site is built from them."
      />
      {sections.map((section) => {
        const list = pages.filter((p) => p.section === section.key)
        const groups = [...new Set(list.map((p) => p.group))]
        return (
          <section key={section.key} className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight">
              {section.title}
            </h2>
            {groups.map((group) => (
              <div key={group ?? section.key}>
                {group && (
                  <h3 className="mt-6 mb-3 text-sm font-semibold text-muted-foreground">
                    {group}
                  </h3>
                )}
                <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
                  {list
                    .filter((p) => p.group === group)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={hrefOf(p)}
                        className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Card className="h-full transition-colors hover:bg-muted">
                          <CardHeader>
                            <CardTitle className="text-base">
                              {p.title}
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </section>
        )
      })}
    </article>
  )
}
