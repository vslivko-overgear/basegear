"use client"

import { Block, useToken } from "@/showcase/foundations/kit"

const SCALE: { cls: string; px: string; use: string }[] = [
  { cls: "text-4xl", px: "36px", use: "Page titles" },
  { cls: "text-2xl", px: "24px", use: "Section titles" },
  { cls: "text-xl", px: "20px", use: "Card and dialog titles" },
  { cls: "text-lg", px: "18px", use: "Leads" },
  { cls: "text-base", px: "16px", use: "Controls, body text" },
  { cls: "text-sm", px: "14px", use: "Most component text" },
  { cls: "text-xs", px: "12px", use: "Badges, captions, counters" },
]
const WEIGHTS = [
  { cls: "font-normal", value: 400 },
  { cls: "font-medium", value: 500 },
  { cls: "font-semibold", value: 600 },
  { cls: "font-bold", value: 700 },
]

export function TypographyPage() {
  const font = useToken("--font-sans")
  return (
    <>
      <Block
        title="Font"
        text="The preset uses Inter through --font-sans; Theme Settings can switch it. Overgear's own TT Interphases Pro is a commercial font: load it with next/font/local in an app."
      >
        <div className="rounded-3xl border p-6">
          <div className="text-4xl font-bold tracking-tight">
            Aa Bb 0123456789
          </div>
          <div className="mt-2 font-mono text-xs text-muted-foreground">
            --font-sans: {font}
          </div>
        </div>
      </Block>
      <Block
        title="Scale"
        text="The Tailwind text sizes the baseui style uses, largest first."
      >
        <div className="flex flex-col">
          {SCALE.map((s) => (
            <div
              key={s.cls}
              className="grid grid-cols-1 items-baseline gap-2 border-t py-4 first:border-t-0 md:grid-cols-[180px_1fr]"
            >
              <div className="flex flex-col text-xs text-muted-foreground">
                <code className="font-mono text-[13px] text-foreground">
                  {s.cls}
                </code>
                <span>
                  {s.px} · {s.use}
                </span>
              </div>
              <div className={`${s.cls} truncate`}>Boost your rank today</div>
            </div>
          ))}
        </div>
      </Block>
      <Block
        title="Weights"
        text="Semibold for labels and buttons, bold for titles, medium for small UI text."
      >
        <div className="flex flex-wrap gap-8">
          {WEIGHTS.map((w) => (
            <div key={w.cls} className="flex flex-col gap-1">
              <span className={`${w.cls} text-3xl`}>Ag</span>
              <code className="font-mono text-xs text-muted-foreground">
                {w.cls} · {w.value}
              </code>
            </div>
          ))}
        </div>
      </Block>
    </>
  )
}
