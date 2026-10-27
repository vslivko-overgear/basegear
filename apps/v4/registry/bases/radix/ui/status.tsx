import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const statusVariants = cva(
  "cn-status group/status flex w-full min-w-0 flex-col items-center justify-center text-center text-balance",
  {
    variants: {
      variant: {
        default: "cn-status-variant-default",
        info: "cn-status-variant-info",
        success: "cn-status-variant-success",
        warning: "cn-status-variant-warning",
        destructive: "cn-status-variant-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Status({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof statusVariants>) {
  return (
    <div
      data-slot="status"
      data-variant={variant}
      className={cn(statusVariants({ variant }), className)}
      {...props}
    />
  )
}

function StatusMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="status-media"
      aria-hidden="true"
      className={cn(
        "cn-status-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function StatusTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="status-title"
      className={cn("cn-status-title", className)}
      {...props}
    />
  )
}

function StatusDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="status-description"
      className={cn("cn-status-description", className)}
      {...props}
    />
  )
}

function StatusActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="status-actions"
      className={cn(
        "cn-status-actions flex flex-wrap items-center justify-center",
        className
      )}
      {...props}
    />
  )
}

export {
  Status,
  StatusMedia,
  StatusTitle,
  StatusDescription,
  StatusActions,
  statusVariants,
}
