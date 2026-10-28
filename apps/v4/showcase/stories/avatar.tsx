"use client"

import type { Story } from "@/showcase/types"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/styles/radix-baseui/ui/avatar"

const PEOPLE = ["MC", "NH", "LF", "IP"]

export const avatar: Story = {
  args: { size: "default", initials: "MC", badge: true, group: false },
  argTypes: {
    size: { control: "radio", options: ["sm", "default", "lg"] },
    initials: { control: "text" },
    badge: { control: "boolean", label: "status badge" },
    group: { control: "boolean" },
  },
  render: ({ size, initials, badge, group }) =>
    group ? (
      <AvatarGroup>
        {PEOPLE.map((person) => (
          <Avatar key={person} size={size}>
            <AvatarFallback>{person}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+5</AvatarGroupCount>
      </AvatarGroup>
    ) : (
      <Avatar size={size}>
        <AvatarFallback>{initials}</AvatarFallback>
        {badge && <AvatarBadge />}
      </Avatar>
    ),
  code: ({ size, initials, badge, group }) =>
    group
      ? `<AvatarGroup>\n${PEOPLE.map((p) => `  <Avatar size="${size}"><AvatarFallback>${p}</AvatarFallback></Avatar>`).join("\n")}\n  <AvatarGroupCount>+5</AvatarGroupCount>\n</AvatarGroup>`
      : `<Avatar size="${size}">\n  <AvatarImage src="/avatar.png" alt="" />\n  <AvatarFallback>${initials}</AvatarFallback>${badge ? "\n  <AvatarBadge />" : ""}\n</Avatar>`,
}
