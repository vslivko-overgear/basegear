"use client"

import * as React from "react"

import { Chip } from "@/styles/radix-baseui/ui/chip"

/** Anchors of the page: every element marked with `data-anchor` (Playground, props, examples). */
export function Toc() {
  const [items, setItems] = React.useState<{ id: string; name: string }[]>([])
  React.useEffect(() => {
    setItems(
      [...document.querySelectorAll<HTMLElement>("#main [data-anchor]")].map((el) => ({
        id: el.id,
        name: el.dataset.anchor ?? "",
      }))
    )
  }, [])
  if (items.length < 2) return null
  const go = (id: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
  }
  return (
    <nav aria-label="On this page" className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <Chip key={item.id} size="sm" pressed={false} onClick={() => go(item.id)}>
          {item.name}
        </Chip>
      ))}
    </nav>
  )
}
