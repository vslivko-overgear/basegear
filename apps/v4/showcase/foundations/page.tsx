"use client"

import { FOUNDATION_PAGES } from "@/showcase/foundations"
import { Toc } from "@/showcase/toc"

/** A Foundations page: its title and lead, the anchors, then the page itself. */
export function FoundationPage({ slug, title }: { slug: string; title: string }) {
  const entry = FOUNDATION_PAGES[slug]
  const Page = entry?.page
  return (
    <>
      <header>
        <div className="text-xs tracking-[0.08em] text-muted-foreground uppercase">Foundations</div>
        <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-[40px]">{title}</h1>
        {entry?.lead && <p className="mt-3 max-w-[760px] text-lg text-foreground/80">{entry.lead}</p>}
        <Toc />
      </header>
      {Page ? <Page /> : <p className="mt-10 text-muted-foreground">Coming soon.</p>}
    </>
  )
}
