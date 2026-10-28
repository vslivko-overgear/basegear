"use client"

import type { Story } from "@/showcase/types"
import { BadgeCheckIcon } from "lucide-react"

import { Badge } from "@/styles/radix-baseui/ui/badge"

export const badge: Story = {
  args: { children: "Badge", variant: "default", icon: false },
  argTypes: {
    children: { control: "text", label: "label" },
    variant: {
      control: "radio",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    icon: { control: "boolean" },
  },
  render: ({ children, icon, variant }) => (
    <Badge variant={variant}>
      {icon && <BadgeCheckIcon />}
      {children}
    </Badge>
  ),
  code: ({ children, icon, variant }) =>
    `<Badge variant="${variant}">${icon ? "\n  <BadgeCheckIcon />\n  " : ""}${children}${icon ? "\n" : ""}</Badge>`,
}
