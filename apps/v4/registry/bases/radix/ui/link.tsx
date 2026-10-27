import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const linkVariants = cva(
  "cn-link outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      underline: {
        hover: "cn-link-underline-hover",
        always: "cn-link-underline-always",
        none: "cn-link-underline-none",
      },
    },
    defaultVariants: {
      underline: "hover",
    },
  }
)

function Link({
  className,
  underline = "hover",
  external = false,
  asChild = false,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    external?: boolean
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="link"
      data-underline={underline}
      className={cn(linkVariants({ underline }), className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  )
}

export { Link, linkVariants }
