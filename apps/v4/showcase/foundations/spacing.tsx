"use client"

import { Block } from "@/showcase/foundations/kit"

// Spacing steps the baseui style uses for gap, padding and margin (Tailwind's 4px grid).
const STEPS = [
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "8",
  "12",
]

export function SpacingPage() {
  return (
    <Block
      title="Scale"
      text="Tailwind spacing on a 4px grid: gap-2, px-3, py-1.5. The style keeps to these steps; 2, 3 and 4 do most of the work."
    >
      <div className="flex flex-col gap-2">
        {STEPS.map((step) => {
          const px = Number(step) * 4
          return (
            <div
              key={step}
              className="grid grid-cols-[100px_1fr_60px] items-center gap-4 text-sm"
            >
              <code className="font-mono text-[13px]">gap-{step}</code>
              <div
                className="h-3 rounded-sm bg-primary"
                style={{ width: px }}
              />
              <span className="font-mono text-xs text-muted-foreground">
                {px}px
              </span>
            </div>
          )
        })}
      </div>
    </Block>
  )
}
