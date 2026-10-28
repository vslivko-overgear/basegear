"use client"

import * as React from "react"
import { Block } from "@/showcase/foundations/kit"

import { Button } from "@/styles/radix-baseui/ui/button"

const DURATIONS: [number, string][] = [
  [100, "Overlays in and out: dialogs, popovers, menus"],
  [150, "Small state changes"],
  [200, "Toggles, accordion, tabs"],
  [300, "Sheets and drawers"],
]
const EASINGS: [string, string][] = [
  ["ease-out", "Things that appear"],
  ["ease-in-out", "Things that move across"],
  ["ease-linear", "Spinners, progress"],
]

export function MotionPage() {
  const [on, setOn] = React.useState(false)
  return (
    <>
      <Block
        title="Durations"
        text="Short and functional. Every animation turns off under prefers-reduced-motion (motion-reduce:transition-none)."
      >
        <div className="mb-4">
          <Button variant="secondary" onClick={() => setOn(!on)}>
            Play
          </Button>
        </div>
        <div className="flex max-w-xl flex-col gap-3">
          {DURATIONS.map(([ms, note]) => (
            <div
              key={ms}
              className="grid grid-cols-1 items-center gap-2 md:grid-cols-[200px_1fr]"
            >
              <div className="flex flex-col text-xs">
                <code className="font-mono text-[13px] font-semibold">
                  duration-{ms}
                </code>
                <span className="text-muted-foreground">{note}</span>
              </div>
              <div className="relative h-10 rounded-xl bg-muted">
                <div
                  className="absolute inset-y-1 w-8 rounded-lg bg-primary transition-[left] ease-out motion-reduce:transition-none"
                  style={{
                    transitionDuration: `${ms}ms`,
                    left: on ? "calc(100% - 2.25rem)" : "0.25rem",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Block>
      <Block title="Easing" text="Tailwind easings used by the style.">
        <div className="flex flex-col gap-2">
          {EASINGS.map(([cls, note]) => (
            <div key={cls} className="text-sm">
              <code className="font-mono text-[13px] font-semibold">{cls}</code>
              <span className="text-muted-foreground"> — {note}</span>
            </div>
          ))}
        </div>
      </Block>
    </>
  )
}
