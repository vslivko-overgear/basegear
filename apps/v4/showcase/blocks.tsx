"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"
import { useSettingsPanel } from "@/showcase/shell"
import { STORIES } from "@/showcase/stories"
import type { Args } from "@/showcase/types"

/* ------------------------------------------------------------------- code */

function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard unavailable: nothing to copy into.
    }
  }
  return (
    <Button variant="secondary" size="sm" onClick={copy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied" : "Copy"}
    </Button>
  )
}

/** "Show code" under an example: the highlighted HTML from the server, or plain text for the Playground. */
function Code({ code, html }: { code: string; html?: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Hide code" : "Show code"}
        </Button>
        {open && <CopyCode code={code} />}
      </div>
      {open &&
        (html ? (
          <div
            className="max-h-[480px] overflow-auto rounded-2xl bg-muted text-[13px] leading-relaxed [&_pre]:bg-transparent!"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="max-h-[480px] overflow-auto rounded-2xl bg-muted px-4 py-3.5 text-[13px] leading-relaxed">
            <code>{code}</code>
          </pre>
        ))}
    </div>
  )
}

/* ----------------------------------------------------------------- canvas */

export function Canvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex min-h-32 min-w-0 flex-wrap items-center justify-center gap-4 overflow-auto rounded-3xl border bg-background p-6 md:p-10">
      {children}
    </div>
  )
}

export function ExampleBlock({
  id,
  title,
  source,
  html,
  children,
}: {
  id: string
  title: string
  source: string
  html?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} data-anchor={title} className="scroll-mt-24 border-t pt-8 first:border-t-0 first:pt-0">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Canvas>{children}</Canvas>
      <Code code={source} html={html} />
    </section>
  )
}

/* ------------------------------------------------------------- playground */

const jsxValue = (value: unknown) =>
  typeof value === "string" ? `"${value}"` : `{${JSON.stringify(value)}}`

/** The component tag with the args that differ from the defaults. */
function defaultCode(name: string, args: Args, defaults: Args) {
  const { children, ...rest } = args
  const props = Object.entries(rest)
    .filter(([key, value]) => value !== defaults[key] || key === "variant")
    .map(([key, value]) => (value === true ? key : `${key}=${jsxValue(value)}`))
    .join(" ")
  const open = props ? `<${name} ${props}` : `<${name}`
  return typeof children === "string" ? `${open}>${children}</${name}>` : `${open} />`
}

export function Playground({ slug, component }: { slug: string; component: string }) {
  const story = STORIES[slug]
  const [args, setArgs] = React.useState<Args>(() => ({ ...story?.args }))
  const setSettings = useSettingsPanel()

  React.useEffect(() => {
    if (!story) return
    setSettings({
      argTypes: story.argTypes,
      args,
      onChange: (name, value) => setArgs((current) => ({ ...current, [name]: value })),
      onReset: () => setArgs({ ...story.args }),
    })
  }, [story, args, setSettings])
  React.useEffect(() => () => setSettings(null), [setSettings])

  if (!story) return null
  const code = story.code ? story.code(args) : defaultCode(component, args, story.args)
  return (
    <section id="playground" data-anchor="Playground" className="mt-10 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">Playground</h2>
      <Canvas>{story.render(args)}</Canvas>
      <Code code={code} />
    </section>
  )
}
