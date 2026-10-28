import { notFound } from "next/navigation"
import { FOUNDATIONS } from "@/showcase/catalog"
import { FoundationPage } from "@/showcase/foundations/page"

export const dynamicParams = false

export function generateStaticParams() {
  return FOUNDATIONS.map((p) => ({ slug: p.slug }))
}

export default async function Foundation({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = FOUNDATIONS.find((p) => p.slug === slug)
  if (!page) notFound()
  return (
    <article>
      <FoundationPage slug={slug} title={page.title} />
    </article>
  )
}
