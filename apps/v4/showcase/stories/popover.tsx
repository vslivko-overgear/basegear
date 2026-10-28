"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/radix-baseui/ui/popover"

export const popover: Story = {
  args: {
    side: "bottom",
    align: "center",
    title: "Boost methods",
    description:
      "Piloted: a booster plays on your account. Self-play: you join the group.",
  },
  argTypes: {
    side: { control: "radio", options: ["top", "right", "bottom", "left"] },
    align: { control: "radio", options: ["start", "center", "end"] },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ side, align, title, description }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">What are the methods?</Button>
      </PopoverTrigger>
      <PopoverContent side={side} align={align}>
        <PopoverHeader>
          <PopoverTitle>{title}</PopoverTitle>
          <PopoverDescription>{description}</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
  code: ({ side, align, title, description }) =>
    `<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="secondary">What are the methods?</Button>\n  </PopoverTrigger>\n  <PopoverContent side="${side}" align="${align}">\n    <PopoverHeader>\n      <PopoverTitle>${title}</PopoverTitle>\n      <PopoverDescription>${description}</PopoverDescription>\n    </PopoverHeader>\n  </PopoverContent>\n</Popover>`,
}
