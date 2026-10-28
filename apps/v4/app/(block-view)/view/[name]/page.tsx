import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { getRegistryComponent } from "@/lib/registry"
import { getBlockPages } from "@/showcase/docs"

export const dynamicParams = false

export function generateStaticParams() {
  return getBlockPages().map((p) => ({ name: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params
  return { title: name, robots: { index: false } }
}

export default async function BlockView({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const Block = getRegistryComponent(name, "radix-baseui")
  if (!Block) notFound()
  return (
    <React.Suspense fallback={null}>
      <Block />
    </React.Suspense>
  )
}
