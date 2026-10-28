"use client"

import type { Story } from "@/showcase/types"
import { FolderSearchIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/radix-baseui/ui/empty"

export const empty: Story = {
  args: {
    media: "icon",
    title: "Nothing found",
    description: "Try another game or clear the filters.",
    action: true,
  },
  argTypes: {
    media: { control: "radio", options: ["default", "icon"] },
    title: { control: "text" },
    description: { control: "text" },
    action: { control: "boolean" },
  },
  render: ({ media, title, description, action }) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant={media}>
          <FolderSearchIcon />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {action && (
        <EmptyContent>
          <Button variant="secondary">Clear filters</Button>
        </EmptyContent>
      )}
    </Empty>
  ),
  code: ({ media, title, description, action }) =>
    `<Empty>\n  <EmptyHeader>\n    <EmptyMedia variant="${media}">\n      <FolderSearchIcon />\n    </EmptyMedia>\n    <EmptyTitle>${title}</EmptyTitle>\n    <EmptyDescription>${description}</EmptyDescription>\n  </EmptyHeader>${action ? '\n  <EmptyContent>\n    <Button variant="secondary">Clear filters</Button>\n  </EmptyContent>' : ""}\n</Empty>`,
}
