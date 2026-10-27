import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

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
  render,
  ...props
}: useRender.ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    external?: boolean
  }) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(linkVariants({ underline }), className),
        ...(external && { target: "_blank", rel: "noopener noreferrer" }),
      },
      props
    ),
    render,
    state: {
      slot: "link",
      underline,
    },
  })
}

export { Link, linkVariants }
