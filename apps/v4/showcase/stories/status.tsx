"use client"

import type { Story } from "@/showcase/types"
import { InboxIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Status,
  StatusActions,
  StatusDescription,
  StatusMedia,
  StatusTitle,
} from "@/styles/radix-baseui/ui/status"

export const status: Story = {
  args: {
    variant: "default",
    title: "No orders yet",
    description: "Pick a service and your orders will show up here.",
    action: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "info", "success", "warning", "destructive"],
    },
    title: { control: "text" },
    description: { control: "text" },
    action: { control: "boolean" },
  },
  render: ({ variant, title, description, action }) => (
    <Status variant={variant} className="max-w-md">
      <StatusMedia>
        <InboxIcon />
      </StatusMedia>
      <StatusTitle>{title}</StatusTitle>
      <StatusDescription>{description}</StatusDescription>
      {action && (
        <StatusActions>
          <Button>Browse services</Button>
        </StatusActions>
      )}
    </Status>
  ),
  code: ({ variant, title, description, action }) =>
    `<Status variant="${variant}">\n  <StatusMedia>\n    <InboxIcon />\n  </StatusMedia>\n  <StatusTitle>${title}</StatusTitle>\n  <StatusDescription>${description}</StatusDescription>${action ? "\n  <StatusActions>\n    <Button>Browse services</Button>\n  </StatusActions>" : ""}\n</Status>`,
}
