"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/radix-baseui/ui/tooltip"

export const tooltip: Story = {
  args: { content: "Starts within 15 minutes", side: "top" },
  argTypes: {
    content: { control: "text" },
    side: { control: "radio", options: ["top", "right", "bottom", "left"] },
  },
  render: ({ content, side }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Express start</Button>
      </TooltipTrigger>
      <TooltipContent side={side}>{content}</TooltipContent>
    </Tooltip>
  ),
  code: ({ content, side }) =>
    `<Tooltip>\n  <TooltipTrigger asChild>\n    <Button variant="secondary">Express start</Button>\n  </TooltipTrigger>\n  <TooltipContent side="${side}">${content}</TooltipContent>\n</Tooltip>`,
}
