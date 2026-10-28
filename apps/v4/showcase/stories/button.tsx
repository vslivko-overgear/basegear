"use client"

import type { Story } from "@/showcase/types"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"

export const button: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    icon: false,
  },
  argTypes: {
    children: { control: "text", label: "label" },
    variant: {
      control: "radio",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: { control: "radio", options: ["xs", "sm", "default", "lg"] },
    disabled: { control: "boolean" },
    icon: { control: "boolean", label: "end icon" },
  },
  render: ({ children, icon, ...args }) => (
    <Button {...args}>
      {children}
      {icon && <ArrowRightIcon />}
    </Button>
  ),
  code: ({ children, icon, variant, size, disabled }) =>
    `<Button variant="${variant}" size="${size}"${disabled ? " disabled" : ""}>\n  ${children}${icon ? "\n  <ArrowRightIcon />" : ""}\n</Button>`,
}
