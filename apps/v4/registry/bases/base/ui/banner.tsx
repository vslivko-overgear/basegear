import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

const bannerVariants = cva(
  "cn-banner group/banner relative grid w-full items-start has-data-[slot=banner-close]:pr-12 has-[>svg]:grid-cols-[auto_1fr] [&>svg]:pointer-events-none [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        info: "cn-banner-variant-info",
        success: "cn-banner-variant-success",
        warning: "cn-banner-variant-warning",
        destructive: "cn-banner-variant-destructive",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

function Banner({
  className,
  variant = "info",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bannerVariants>) {
  return (
    <div
      data-slot="banner"
      data-variant={variant}
      role={
        variant === "destructive" || variant === "warning" ? "alert" : "status"
      }
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    />
  )
}

function BannerTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="banner-title"
      className={cn(
        "cn-banner-title col-start-2 group-not-has-[>svg]/banner:col-start-1",
        className
      )}
      {...props}
    />
  )
}

function BannerDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="banner-description"
      className={cn(
        "cn-banner-description col-start-2 group-not-has-[>svg]/banner:col-start-1",
        className
      )}
      {...props}
    />
  )
}

function BannerClose({
  className,
  children,
  "aria-label": ariaLabel = "Close",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      data-slot="banner-close"
      aria-label={ariaLabel}
      className={cn(
        "cn-banner-close absolute inline-flex items-center justify-center outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children ?? (
        <IconPlaceholder
          lucide="XIcon"
          tabler="IconX"
          hugeicons="Cancel01Icon"
          phosphor="XIcon"
          remixicon="RiCloseLine"
        />
      )}
    </button>
  )
}

export { Banner, BannerTitle, BannerDescription, BannerClose, bannerVariants }
