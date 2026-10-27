"use client"

import { cn } from "cn"
import {
  RadioGroup as RadioGroupPrimitive,
  Radio as RadioPrimitive,
  type RadioGroupProps,
  type RadioProps,
} from "react-aria-components"

function SegmentedControl({
  className,
  size = "default",
  ...props
}: Omit<RadioGroupProps, "className"> & {
  className?: string
  size?: "default" | "sm"
}) {
  return (
    <RadioGroupPrimitive
      data-slot="segmented-control"
      data-size={size}
      orientation="horizontal"
      className={cn(
        "cn-segmented-control group/segmented-control inline-flex w-fit items-center",
        className
      )}
      {...props}
    />
  )
}

function SegmentedControlItem({
  className,
  ...props
}: Omit<RadioProps, "className"> & {
  className?: string
}) {
  return (
    <RadioPrimitive
      data-slot="segmented-control-item"
      className={cn(
        "cn-segmented-control-item inline-flex shrink-0 cursor-default items-center justify-center whitespace-nowrap outline-none select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function SegmentedControlCounter({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="segmented-control-counter"
      className={cn("cn-segmented-control-counter tabular-nums", className)}
      {...props}
    />
  )
}

export { SegmentedControl, SegmentedControlItem, SegmentedControlCounter }
