import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { getBlockPages } from "@/showcase/docs"
import { BlockFrame } from "@/showcase/block-frame"
import { PageHeader } from "@/showcase/page-header"

export const dynamicParams = false

export function generateStaticParams() {
  return getBlockPages().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getBlockPages().find((p) => p.slug === slug)
  return page ? { title: page.title, description: page.description } : {}
}

export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getBlockPages().find((p) => p.slug === slug)
  if (!page) notFound()
  return (
    <article>
      <PageHeader eyebrow={`Blocks · ${page.group}`} title={page.title} lead={page.description} />
      <BlockFrame name={slug} />
    </article>
  )
}
