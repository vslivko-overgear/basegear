"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import {
  ToggleButtonGroup as ToggleGroupPrimitive,
  ToggleButton as TogglePrimitive,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components"

const chipVariants = cva(
  "cn-chip cn-chip-aria group/chip inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
}: Omit<ToggleButtonGroupProps, "className" | "children"> &
  VariantProps<typeof chipVariants> & {
    className?: string
    children?: React.ReactNode
  }) {
  return (
    <ToggleGroupPrimitive
      data-slot="chip-group"
      selectionMode="multiple"
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
}: Omit<ToggleButtonProps, "className"> &
  VariantProps<typeof chipVariants> & {
    className?: string
  }) {
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
