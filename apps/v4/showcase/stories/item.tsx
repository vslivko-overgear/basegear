"use client"

import type { Story } from "@/showcase/types"
import { ChevronRightIcon, PackageIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/radix-baseui/ui/item"

export const item: Story = {
  args: {
    variant: "outline",
    size: "default",
    title: "Order #20418",
    description: "Mythic+ Dungeon Boost · in progress",
    media: true,
    action: true,
  },
  argTypes: {
    variant: { control: "radio", options: ["default", "outline", "muted"] },
    size: { control: "radio", options: ["xs", "sm", "default"] },
    title: { control: "text" },
    description: { control: "text" },
    media: { control: "boolean" },
    action: { control: "boolean" },
  },
  render: ({ variant, size, title, description, media, action }) => (
    <Item variant={variant} size={size} className="w-full max-w-md">
      {media && (
        <ItemMedia variant="icon">
          <PackageIcon />
        </ItemMedia>
      )}
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      {action && (
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      )}
    </Item>
  ),
  code: ({ variant, size, title, description, media }) =>
    `<Item variant="${variant}" size="${size}">${media ? '\n  <ItemMedia variant="icon">\n    <PackageIcon />\n  </ItemMedia>' : ""}\n  <ItemContent>\n    <ItemTitle>${title}</ItemTitle>\n    <ItemDescription>${description}</ItemDescription>\n  </ItemContent>\n</Item>`,
}
