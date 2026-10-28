"use client"

import { Block, useToken } from "@/showcase/foundations/kit"

const GROUPS: { title: string; text: string; tokens: [string, string][] }[] = [
  {
    title: "Surfaces",
    text: "Page, cards and popovers. Classes: bg-background, bg-card, bg-popover, bg-muted.",
    tokens: [
      ["background", "Page"],
      ["card", "Cards"],
      ["popover", "Popovers, menus"],
      ["muted", "Fills of inputs, chips, segments"],
      ["secondary", "Secondary buttons"],
      ["accent", "Hover of menu items"],
    ],
  },
  {
    title: "Text",
    text: "Classes: text-foreground, text-muted-foreground, text-primary-foreground.",
    tokens: [
      ["foreground", "Primary text"],
      ["muted-foreground", "Secondary text, placeholders"],
      ["primary-foreground", "Text on the brand color"],
    ],
  },
  {
    title: "Brand and states",
    text: "Overgear purple for actions and selection; destructive for errors.",
    tokens: [
      ["primary", "Actions, selected states"],
      ["ring", "Focus ring"],
      ["destructive", "Errors, destructive actions"],
    ],
  },
  {
    title: "Lines",
    text: "baseui separates elements with fills, so borders are rare.",
    tokens: [
      ["border", "Dividers, table borders"],
      ["input", "Input borders where an outline is used"],
    ],
  },
  {
    title: "Charts",
    text: "The chart palette: Overgear purple, green, orange, pink and cyan.",
    tokens: [
      ["chart-1", "Series 1"],
      ["chart-2", "Series 2"],
      ["chart-3", "Series 3"],
      ["chart-4", "Series 4"],
      ["chart-5", "Series 5"],
    ],
  },
]

function Swatch({ token, note }: { token: string; note: string }) {
  const value = useToken(`--${token}`)
  return (
    <figure className="flex flex-col gap-2">
      <div className="h-20 rounded-2xl ring-1 ring-foreground/10 ring-inset" style={{ background: `var(--${token})` }} />
      <figcaption className="flex flex-col gap-0.5 text-xs">
        <span className="font-mono text-[13px] font-semibold">{token}</span>
        <span className="text-muted-foreground">{note}</span>
        <span className="font-mono text-muted-foreground">{value}</span>
      </figcaption>
    </figure>
  )
}

export function ColorPage() {
  return (
    <>
      {GROUPS.map((group) => (
        <Block key={group.title} title={group.title} text={group.text}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
            {group.tokens.map(([token, note]) => (
              <Swatch key={token} token={token} note={note} />
            ))}
          </div>
        </Block>
      ))}
    </>
  )
}
