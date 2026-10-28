"use client"

import * as React from "react"
import { Block, useToken } from "@/showcase/foundations/kit"

const RADII: [string, string][] = [
  ["sm", "Small details"],
  ["md", "Kbd, small chips"],
  ["lg", "Buttons, inputs"],
  ["xl", "Menu items, toggles"],
  ["2xl", "Cards, popovers"],
  ["3xl", "Dialogs"],
  ["4xl", "Large surfaces"],
]

function Tile({
  name,
  note,
  base,
}: {
  name: string
  note: string
  base: string
}) {
  // The token is a calc() of --radius; the rendered corner gives the resolved px.
  const box = React.useRef<HTMLDivElement>(null)
  const [value, setValue] = React.useState("")
  React.useEffect(() => {
    if (box.current) setValue(getComputedStyle(box.current).borderTopLeftRadius)
  }, [base])
  return (
    <figure className="flex flex-col gap-2">
      <div
        ref={box}
        className="h-24 bg-muted"
        style={{ borderRadius: `var(--radius-${name})` }}
      />
      <figcaption className="flex flex-col text-xs">
        <code className="font-mono text-[13px] font-semibold">
          rounded-{name}
        </code>
        <span className="text-muted-foreground">{note}</span>
        <span className="font-mono text-muted-foreground">{value}</span>
      </figcaption>
    </figure>
  )
}

export function RadiusPage() {
  const base = useToken("--radius")
  return (
    <Block
      title="Scale"
      text={`Every radius is derived from --radius (${base || "…"}), so Theme Settings scales them all at once. rounded-full stays full.`}
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
        {RADII.map(([name, note]) => (
          <Tile key={name} name={name} note={note} base={base} />
        ))}
      </div>
    </Block>
  )
}
