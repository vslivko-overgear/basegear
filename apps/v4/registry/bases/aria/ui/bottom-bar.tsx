"use client"

import * as React from "react"
import { cn } from "cn"

const BottomBarContext = React.createContext<{
  value?: string
  onSelect: (value: string) => void
}>({ onSelect: () => {} })

function BottomBar({
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  "aria-label": ariaLabel = "Main navigation",
  ...props
}: Omit<React.ComponentProps<"nav">, "defaultValue"> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const value = valueProp ?? uncontrolled

  const onSelect = React.useCallback(
    (next: string) => {
      if (valueProp === undefined) {
        setUncontrolled(next)
      }
      onValueChange?.(next)
    },
    [valueProp, onValueChange]
  )

  return (
    <BottomBarContext.Provider value={{ value, onSelect }}>
      <nav
        data-slot="bottom-bar"
        aria-label={ariaLabel}
        className={cn("cn-bottom-bar flex w-full items-stretch", className)}
        {...props}
      />
    </BottomBarContext.Provider>
  )
}

function BottomBarItem({
  className,
  value,
  onClick,
  ...props
}: React.ComponentProps<"button"> & {
  value: string
}) {
  const context = React.useContext(BottomBarContext)
  const active = context.value === value

  return (
    <button
      type="button"
      data-slot="bottom-bar-item"
      data-active={active || undefined}
      aria-current={active ? "page" : undefined}
      className={cn(
        "cn-bottom-bar-item group/bottom-bar-item flex min-w-0 flex-1 flex-col items-center justify-center outline-none select-none disabled:pointer-events-none",
        className
      )}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) {
          context.onSelect(value)
        }
      }}
      {...props}
    />
  )
}

function BottomBarIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="bottom-bar-icon"
      aria-hidden="true"
      className={cn(
        "cn-bottom-bar-icon relative grid place-items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function BottomBarLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="bottom-bar-label"
      className={cn("cn-bottom-bar-label max-w-full truncate", className)}
      {...props}
    />
  )
}

function BottomBarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="bottom-bar-badge"
      className={cn(
        "cn-bottom-bar-badge absolute inline-flex items-center justify-center tabular-nums",
        className
      )}
      {...props}
    />
  )
}

export {
  BottomBar,
  BottomBarItem,
  BottomBarIcon,
  BottomBarLabel,
  BottomBarBadge,
}
