"use client"

import * as React from "react"
import { Block } from "@/showcase/foundations/kit"
import { REGISTRY_ICONS } from "@/showcase/foundations/registry-icons"
import * as Lucide from "lucide-react"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/radix-baseui/ui/input-group"

type IconComponent = React.ComponentType<{ className?: string }>
const ALL = Lucide.icons as Record<string, IconComponent>
const ALL_NAMES = Object.keys(ALL).sort()

function IconCell({ name }: { name: string }) {
  const [copied, setCopied] = React.useState(false)
  const Icon = ALL[name]
  if (!Icon) return null
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `import { ${name}Icon } from "lucide-react"`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // Clipboard unavailable: nothing to copy into.
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      title="Copy import"
      className="flex min-h-24 flex-col items-center justify-center gap-2.5 rounded-2xl bg-muted/50 p-3 transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Icon className="size-6" />
      <span
        className={`text-center text-[11px] break-all ${copied ? "text-primary" : "text-muted-foreground"}`}
      >
        {copied ? "Import copied" : name}
      </span>
    </button>
  )
}

export function IconsPage() {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  // Without a query: the icons the components use. With one: the whole Lucide set.
  const names = q
    ? ALL_NAMES.filter((n) => n.toLowerCase().includes(q)).slice(0, 240)
    : [...REGISTRY_ICONS]
  return (
    <>
      <div className="mt-8 max-w-sm">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder={`Search ${ALL_NAMES.length} Lucide icons`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search icons"
          />
        </InputGroup>
      </div>
      <Block
        title={q ? "Results" : "Used by the components"}
        text={
          q
            ? `${names.length}${names.length === 240 ? "+" : ""} matches. Click an icon to copy its import.`
            : "The icons the registry components and their demos use. Click an icon to copy its import."
        }
      >
        {names.length ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
            {names.map((name) => (
              <IconCell key={name} name={name} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Nothing found.</p>
        )}
      </Block>
    </>
  )
}
