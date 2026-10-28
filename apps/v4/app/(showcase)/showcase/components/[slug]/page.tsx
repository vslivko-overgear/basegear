import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { ExampleBlock, Playground } from "@/showcase/blocks"
import { getCatalog, getComponentDoc, getComponentProps } from "@/showcase/docs"
import { PageHeader } from "@/showcase/page-header"
import { PropsSection } from "@/showcase/props-table"

import { highlightCode } from "@/lib/highlight-code"
import { getRegistryComponent } from "@/lib/registry"
import { Skeleton } from "@/styles/radix-baseui/ui/skeleton"

export const dynamicParams = false

export async function generateStaticParams() {
  const pages = await getCatalog()
  return pages
    .filter((p) => p.section === "components")
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = await getComponentDoc(slug)
  return doc ? { title: doc.title, description: doc.description } : {}
}

const pascal = (slug: string) =>
  slug.replace(/(^|-)(\w)/g, (_, __, c: string) => c.toUpperCase())

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [doc, props, catalog] = await Promise.all([
    getComponentDoc(slug),
    getComponentProps(slug),
    getCatalog(),
  ])
  if (!doc) notFound()
  const page = catalog.find(
    (p) => p.section === "components" && p.slug === slug
  )
  const examples = await Promise.all(
    doc.examples.map(async (example) => ({
      ...example,
      html: await highlightCode(example.source),
    }))
  )
  const main = pascal(slug)
  const parts = Object.entries(props).sort(
    ([a], [b]) => Number(b === main) - Number(a === main)
  )

  return (
    <article>
      <PageHeader
        eyebrow={`Components${page?.group ? ` · ${page.group}` : ""}`}
        title={doc.title}
        lead={doc.description}
      />
      <Playground slug={slug} component={main} />
      <PropsSection parts={parts} />
      {examples.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>
          <div className="mt-6 flex flex-col gap-8">
            {examples.map((example) => {
              const Example = getRegistryComponent(example.name, "radix-baseui")
              return (
                <ExampleBlock
                  key={example.name}
                  id={example.name}
                  title={example.title}
                  source={example.source}
                  html={example.html}
                >
                  <React.Suspense
                    fallback={<Skeleton className="h-24 w-full rounded-2xl" />}
                  >
                    {Example ? <Example /> : null}
                  </React.Suspense>
                </ExampleBlock>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
