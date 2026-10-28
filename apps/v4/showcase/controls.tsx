"use client"

import type { Args, ArgType } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import { Chip, ChipGroup } from "@/styles/radix-baseui/ui/chip"
import { Input } from "@/styles/radix-baseui/ui/input"
import { Label } from "@/styles/radix-baseui/ui/label"
import { Slider } from "@/styles/radix-baseui/ui/slider"
import { Switch } from "@/styles/radix-baseui/ui/switch"

function Control({
  name,
  spec,
  value,
  onChange,
}: {
  name: string
  spec: ArgType
  value: unknown
  onChange: (value: unknown) => void
}) {
  const label = spec.label ?? name
  const id = `control-${name}`

  if (spec.control === "boolean") {
    return (
      <div className="flex items-center gap-3">
        <Switch id={id} checked={Boolean(value)} onCheckedChange={onChange} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    )
  }

  if (spec.control === "radio") {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">{label}</span>
        <ChipGroup
          type="single"
          size="sm"
          value={String(value ?? "")}
          onValueChange={(next) => next && onChange(next)}
          aria-label={label}
        >
          {spec.options.map((option) => (
            <Chip key={option} value={option}>
              {option}
            </Chip>
          ))}
        </ChipGroup>
      </div>
    )
  }

  if (spec.control === "range") {
    const current = Number(value ?? spec.min)
    return (
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold">
          {label}:{" "}
          <span className="text-muted-foreground tabular-nums">{current}</span>
        </span>
        <Slider
          aria-label={label}
          min={spec.min}
          max={spec.max}
          step={spec.step ?? 1}
          value={[current]}
          onValueChange={([next]) => onChange(next)}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={String(value ?? "")}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

/** The Settings panel of a Playground, built from the design system's own controls. */
export function Controls({
  argTypes,
  args,
  onChange,
  onReset,
}: {
  argTypes: Record<string, ArgType>
  args: Args
  onChange: (name: string, value: unknown) => void
  onReset: () => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="pt-2 text-xl font-semibold">Settings</div>
      {Object.entries(argTypes).map(([name, spec]) => (
        <Control
          key={name}
          name={name}
          spec={spec}
          value={args[name]}
          onChange={(value) => onChange(name, value)}
        />
      ))}
      <Button variant="secondary" className="mt-2 w-full" onClick={onReset}>
        Reset
      </Button>
    </div>
  )
}
