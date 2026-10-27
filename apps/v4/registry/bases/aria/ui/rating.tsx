"use client"

import * as React from "react"
import { cn } from "cn"

import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

function RatingStar({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <IconPlaceholder
      lucide="StarIcon"
      tabler="IconStarFilled"
      hugeicons="StarIcon"
      phosphor="StarIcon"
      remixicon="RiStarFill"
      aria-hidden="true"
      className={cn("cn-rating-star", className)}
      {...props}
    />
  )
}

function Rating({
  className,
  value: valueProp,
  defaultValue = 0,
  onValueChange,
  max = 5,
  size = "default",
  disabled = false,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  max?: number
  size?: "default" | "sm" | "lg"
  disabled?: boolean
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const [hovered, setHovered] = React.useState<number | null>(null)
  const value = valueProp ?? uncontrolled
  const shown = hovered ?? value

  const select = (next: number) => {
    if (valueProp === undefined) {
      setUncontrolled(next)
    }
    onValueChange?.(next)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowUp"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowDown"
          ? -1
          : 0
    if (!step) {
      return
    }
    event.preventDefault()
    const next = Math.min(max, Math.max(1, value + step))
    select(next)
    const group = event.currentTarget.parentElement
    group?.querySelector<HTMLButtonElement>(`[data-value="${next}"]`)?.focus()
  }

  return (
    <div
      role="radiogroup"
      data-slot="rating"
      data-size={size}
      data-disabled={disabled || undefined}
      className={cn(
        "cn-rating group/rating inline-flex w-fit items-center",
        className
      )}
      onPointerLeave={() => setHovered(null)}
      {...props}
    >
      {Array.from({ length: max }, (_, index) => {
        const star = index + 1
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star === value}
            aria-label={`${star} out of ${max}`}
            tabIndex={star === (value || 1) ? 0 : -1}
            disabled={disabled}
            data-slot="rating-item"
            data-value={star}
            data-active={star <= shown || undefined}
            className="cn-rating-item inline-flex items-center justify-center outline-none disabled:pointer-events-none"
            onPointerEnter={() => setHovered(star)}
            onClick={() => select(star)}
            onKeyDown={onKeyDown}
          >
            <RatingStar />
          </button>
        )
      })}
    </div>
  )
}

function RatingDisplay({
  className,
  value = 0,
  max = 5,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  value?: number
  max?: number
  size?: "default" | "sm" | "lg"
}) {
  return (
    <div
      role="img"
      aria-label={`${value} out of ${max}`}
      data-slot="rating-display"
      data-size={size}
      className={cn(
        "cn-rating group/rating inline-flex w-fit items-center",
        className
      )}
      {...props}
    >
      {Array.from({ length: max }, (_, index) => {
        const fill = Math.min(1, Math.max(0, value - index))
        return (
          <span
            key={index}
            data-slot="rating-item"
            className="cn-rating-item relative inline-flex items-center justify-center"
          >
            <RatingStar />
            <span
              data-slot="rating-item-fill"
              className="cn-rating-item-fill absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <RatingStar />
            </span>
          </span>
        )
      })}
    </div>
  )
}

export { Rating, RatingDisplay }
