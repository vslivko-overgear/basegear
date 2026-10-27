"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import {
  Link as LinkPrimitive,
  type LinkProps as LinkPrimitiveProps,
} from "react-aria-components"

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
  ...props
}: Omit<LinkPrimitiveProps, "className"> &
  VariantProps<typeof linkVariants> & {
    className?: string
    external?: boolean
  }) {
  return (
    <LinkPrimitive
      data-slot="link"
      data-underline={underline}
      className={cn(linkVariants({ underline }), className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  )
}

export { Link, linkVariants }
