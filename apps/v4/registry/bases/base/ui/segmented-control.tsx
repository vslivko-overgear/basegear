"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "cn"

function SegmentedControl({
  className,
  size = "default",
  ...props
}: RadioGroupPrimitive.Props & {
  size?: "default" | "sm"
}) {
  return (
    <RadioGroupPrimitive
      data-slot="segmented-control"
      data-size={size}
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
}: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="segmented-control-item"
      className={cn(
        "cn-segmented-control-item inline-flex shrink-0 items-center justify-center whitespace-nowrap outline-none select-none disabled:pointer-events-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
