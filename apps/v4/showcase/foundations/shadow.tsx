"use client"

import { Block } from "@/showcase/foundations/kit"

const SHADOWS: [string, string][] = [
  ["shadow-xs", "Hairline lift"],
  ["shadow-sm", "Selected segment, switch thumb"],
  ["shadow-md", "Raised controls"],
  ["shadow-lg", "Popovers, menus"],
  ["shadow-xl", "Floating panels"],
  ["shadow-2xl", "Dialogs, sheets, drawers"],
]

export function ShadowPage() {
  return (
    <Block
      title="Elevation"
      text="baseui separates elements with fills and spacing, not outlines; shadows lift what floats above the page."
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6 p-2">
        {SHADOWS.map(([cls, note]) => (
          <figure key={cls} className="flex flex-col gap-2">
            <div className={`h-24 rounded-2xl bg-card ${cls}`} />
            <figcaption className="flex flex-col text-xs">
              <code className="font-mono text-[13px] font-semibold">{cls}</code>
              <span className="text-muted-foreground">{note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Block>
  )
}
