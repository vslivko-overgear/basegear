"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, ExternalLinkIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"

/** A block in its own page (/view/<name>), framed like an app window, with its install command. */
export function BlockFrame({ name }: { name: string }) {
  const command = `npx shadcn@latest add ${name}`
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard unavailable: nothing to copy into.
    }
  }
  return (
    <section id="preview" data-anchor="Preview" className="mt-8 scroll-mt-24">
      <div className="flex flex-wrap items-center gap-2">
        <code className="rounded-xl bg-muted px-3 py-2 font-mono text-[13px]">{command}</code>
        <Button variant="secondary" size="sm" onClick={copy}>
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied" : "Copy"}
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={`/view/${name}`} target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
            Open
          </a>
        </Button>
      </div>
      <iframe
        src={`/view/${name}`}
        title={name}
        loading="lazy"
        className="mt-4 h-[760px] w-full rounded-3xl border bg-background"
      />
    </section>
  )
}
