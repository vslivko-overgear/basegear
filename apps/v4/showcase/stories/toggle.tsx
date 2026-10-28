"use client"

import type { Story } from "@/showcase/types"
import { BoldIcon } from "lucide-react"

import { Toggle } from "@/styles/radix-baseui/ui/toggle"

export const toggle: Story = {
  args: { variant: "default", size: "default", label: true, disabled: false },
  argTypes: {
    variant: { control: "radio", options: ["default", "outline"] },
    size: { control: "radio", options: ["sm", "default", "lg"] },
    label: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ variant, size, label, disabled }) => (
    <Toggle
      variant={variant}
      size={size}
      disabled={disabled}
      aria-label="Toggle bold"
    >
      <BoldIcon />
      {label && "Bold"}
    </Toggle>
  ),
  code: ({ variant, size, label }) =>
    `<Toggle variant="${variant}" size="${size}" aria-label="Toggle bold">\n  <BoldIcon />${label ? "\n  Bold" : ""}\n</Toggle>`,
}
