import { cn } from "cn"

import {
  contactOf,
  initials,
} from "@/registry/bases/aria/blocks/messenger-01/components/data"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@/registry/bases/aria/ui/avatar"

/** Avatar of a person or a group with the presence dot. */
export function PersonAvatar({
  id,
  name,
  group = false,
  size = "default",
  showPresence = true,
  className,
}: {
  id?: string
  name?: string
  group?: boolean
  size?: "default" | "sm" | "lg"
  showPresence?: boolean
  className?: string
}) {
  const contact = id ? contactOf(id) : undefined
  const label = name ?? contact?.name ?? "?"
  const presence = !group && showPresence ? contact?.presence : undefined

  return (
    <Avatar size={size} className={cn(group && "rounded-xl", className)}>
      <AvatarFallback className={cn(group && "rounded-xl")}>
        {initials(label)}
      </AvatarFallback>
      {presence && presence !== "offline" && (
        <AvatarBadge
          aria-label={presence === "online" ? "Online" : "Busy"}
          className={cn(
            "ring-background",
            presence === "online" ? "bg-chart-2" : "bg-destructive"
          )}
        />
      )}
    </Avatar>
  )
}
