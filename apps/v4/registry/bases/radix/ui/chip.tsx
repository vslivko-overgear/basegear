"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import {
  ToggleGroup as ToggleGroupPrimitive,
  Toggle as TogglePrimitive,
} from "radix-ui"

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

const ChipGroupContext = React.createContext<
  VariantProps<typeof chipVariants> & { inGroup?: boolean }
>({})

function ChipGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof chipVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="chip-group"
      data-size={size}
      className={cn(
        "cn-chip-group group/chip-group flex flex-wrap items-center",
        className
      )}
      {...props}
    >
      <ChipGroupContext.Provider value={{ variant, size, inGroup: true }}>
        {children}
      </ChipGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function Chip({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof chipVariants> & {
    value?: string
  }) {
  const context = React.useContext(ChipGroupContext)
  const Comp = context.inGroup
    ? ToggleGroupPrimitive.Item
    : TogglePrimitive.Root
  const resolvedVariant = variant ?? context.variant ?? "default"
  const resolvedSize = size ?? context.size ?? "default"

  return (
    <Comp
      data-slot="chip"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn(
        chipVariants({ variant: resolvedVariant, size: resolvedSize }),
        className
      )}
      {...(props as React.ComponentProps<typeof ToggleGroupPrimitive.Item>)}
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
