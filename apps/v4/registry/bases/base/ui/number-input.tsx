"use client"

import * as React from "react"
import { cn } from "cn"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

function NumberInput({
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled,
  decrementLabel = "Decrease",
  incrementLabel = "Increase",
  ...props
}: Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange" | "min" | "max" | "step" | "type"
> & {
  value?: number | null
  defaultValue?: number | null
  onValueChange?: (value: number | null) => void
  min?: number
  max?: number
  step?: number
  decrementLabel?: string
  incrementLabel?: string
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? null)
  const value = valueProp !== undefined ? valueProp : uncontrolled
  const [draft, setDraft] = React.useState<string | null>(null)

  const commit = (next: number | null) => {
    if (valueProp === undefined) {
      setUncontrolled(next)
    }
    onValueChange?.(next)
  }

  const bump = (direction: 1 | -1) => {
    setDraft(null)
    commit(clamp((value ?? 0) + direction * step, min, max))
  }

  return (
    <InputGroup
      data-disabled={disabled || undefined}
      className={cn("cn-number-input", className)}
    >
      <InputGroupInput
        inputMode="decimal"
        disabled={disabled}
        value={draft ?? (value === null ? "" : String(value))}
        onChange={(event) => {
          const raw = event.target.value
          if (raw === "" || raw === "-") {
            setDraft(raw)
            commit(null)
            return
          }
          const parsed = Number(raw)
          if (Number.isNaN(parsed)) {
            return
          }
          setDraft(null)
          commit(clamp(parsed, min, max))
        }}
        onBlur={() => setDraft(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp") {
            event.preventDefault()
            bump(1)
          }
          if (event.key === "ArrowDown") {
            event.preventDefault()
            bump(-1)
          }
        }}
        {...props}
      />
      <InputGroupAddon align="inline-end" className="cn-number-input-buttons">
        <InputGroupButton
          size="icon-xs"
          aria-label={decrementLabel}
          tabIndex={-1}
          disabled={disabled || (value ?? 0) <= min}
          onClick={() => bump(-1)}
        >
          <IconPlaceholder
            lucide="MinusIcon"
            tabler="IconMinus"
            hugeicons="MinusSignIcon"
            phosphor="MinusIcon"
            remixicon="RiSubtractLine"
          />
        </InputGroupButton>
        <InputGroupButton
          size="icon-xs"
          aria-label={incrementLabel}
          tabIndex={-1}
          disabled={disabled || (value ?? 0) >= max}
          onClick={() => bump(1)}
        >
          <IconPlaceholder
            lucide="PlusIcon"
            tabler="IconPlus"
            hugeicons="PlusSignIcon"
            phosphor="PlusIcon"
            remixicon="RiAddLine"
          />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export { NumberInput }
