"use client"

import * as React from "react"
import { FOUNDATION_PAGES } from "@/showcase/foundations"
import { Toc } from "@/showcase/toc"

import { Skeleton } from "@/styles/radix-baseui/ui/skeleton"

/** A Foundations page: its title and lead, the anchors, then the page itself. */
export function FoundationPage({
  slug,
  title,
  eyebrow = "Foundations",
}: {
  slug: string
  title: string
  eyebrow?: string
}) {
  const entry = FOUNDATION_PAGES[slug]
  const Page = entry?.page
  return (
    <>
      <header>
        <div className="text-xs tracking-[0.08em] text-muted-foreground uppercase">
          {eyebrow}
        </div>
        <h1 className="mt-1 text-4xl font-bold tracking-tight md:text-[40px]">
          {title}
        </h1>
        {entry?.lead && (
          <p className="mt-3 max-w-[760px] text-lg text-foreground/80">
            {entry.lead}
          </p>
        )}
        <Toc />
      </header>
      {Page ? (
        <React.Suspense
          fallback={<Skeleton className="mt-10 h-64 w-full rounded-3xl" />}
        >
          <Page />
        </React.Suspense>
      ) : (
        <p className="mt-10 text-muted-foreground">Coming soon.</p>
      )}
    </>
  )
}
