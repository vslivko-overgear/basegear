import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const stackVariants = cva("cn-stack flex gap-(--gap)", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "column",
    wrap: false,
  },
})

function Stack({
  className,
  direction = "column",
  align,
  justify,
  wrap = false,
  gap = 4,
  style,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof stackVariants> & {
    gap?: number
  }) {
  return (
    <div
      data-slot="stack"
      data-direction={direction}
      style={
        {
          "--gap": `calc(var(--spacing) * ${gap})`,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        stackVariants({ direction, align, justify, wrap }),
        className
      )}
      {...props}
    />
  )
}

function Center({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="center"
      className={cn("cn-center flex items-center justify-center", className)}
      {...props}
    />
  )
}

function Grid({
  className,
  columns = 2,
  gap = 4,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  columns?: number | string
  gap?: number
}) {
  return (
    <div
      data-slot="grid"
      style={
        {
          "--gap": `calc(var(--spacing) * ${gap})`,
          gridTemplateColumns:
            typeof columns === "number"
              ? `repeat(${columns}, minmax(0, 1fr))`
              : columns,
          ...style,
        } as React.CSSProperties
      }
      className={cn("cn-grid grid gap-(--gap)", className)}
      {...props}
    />
  )
}

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("cn-section mx-auto w-full", className)}
      {...props}
    />
  )
}

export { Stack, Center, Grid, Section, stackVariants }
