"use client"

import type { Story } from "@/showcase/types"

import { Skeleton } from "@/styles/radix-baseui/ui/skeleton"

export const skeleton: Story = {
  args: { shape: "card", lines: 2 },
  argTypes: {
    shape: { control: "radio", options: ["card", "list item", "text"] },
    lines: { control: "range", min: 1, max: 5 },
  },
  render: ({ shape, lines }) => {
    const text = Array.from({ length: lines }, (_, i) => (
      <Skeleton key={i} className="h-4" style={{ width: `${100 - i * 15}%` }} />
    ))
    if (shape === "text")
      return <div className="flex w-full max-w-sm flex-col gap-2">{text}</div>
    if (shape === "list item")
      return (
        <div className="flex w-full max-w-sm items-center gap-4">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">{text}</div>
        </div>
      )
    return (
      <div className="flex w-full max-w-xs flex-col gap-3">
        <Skeleton className="h-40 rounded-2xl" />
        {text}
      </div>
    )
  },
  code: ({ shape }) =>
    shape === "list item"
      ? `<div className="flex items-center gap-4">\n  <Skeleton className="size-12 rounded-full" />\n  <div className="flex flex-1 flex-col gap-2">\n    <Skeleton className="h-4 w-full" />\n    <Skeleton className="h-4 w-4/5" />\n  </div>\n</div>`
      : `<Skeleton className="h-40 rounded-2xl" />\n<Skeleton className="h-4 w-full" />`,
}
