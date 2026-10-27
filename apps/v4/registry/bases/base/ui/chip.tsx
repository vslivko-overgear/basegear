"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const chipVariants = cva(
  "cn-chip group/chip inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cn-chip-variant-default",
        success: "cn-chip-variant-success",
        destructive: "cn-chip-variant-destructive",
      },
      size: {
        default: "cn-chip-size-default",
        sm: "cn-chip-size-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const ChipGroupContext = React.createContext<VariantProps<typeof chipVariants>>(
  {}
)

function ChipGroup({
  className,
  variant,
  size,
  children,
  ...props
}: ToggleGroupPrimitive.Props & VariantProps<typeof chipVariants>) {
  return (
    <ToggleGroupPrimitive
      data-slot="chip-group"
      data-size={size}
      className={cn(
        "cn-chip-group group/chip-group flex flex-wrap items-center",
        className
      )}
      {...props}
    >
      <ChipGroupContext.Provider value={{ variant, size }}>
        {children}
      </ChipGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function Chip({
  className,
  variant,
  size,
  ...props
}: TogglePrimitive.Props & VariantProps<typeof chipVariants>) {
  const context = React.useContext(ChipGroupContext)
  const resolvedVariant = variant ?? context.variant ?? "default"
  const resolvedSize = size ?? context.size ?? "default"

  return (
    <TogglePrimitive
      data-slot="chip"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn(
        chipVariants({ variant: resolvedVariant, size: resolvedSize }),
        className
      )}
      {...props}
    />
  )
}

function ChipCounter({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="chip-counter"
      className={cn("cn-chip-counter tabular-nums", className)}
      {...props}
    />
  )
}

export { Chip, ChipGroup, ChipCounter, chipVariants }
