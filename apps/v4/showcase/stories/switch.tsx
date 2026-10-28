"use client"

import type { Story } from "@/showcase/types"

import { Label } from "@/styles/radix-baseui/ui/label"
import { Switch } from "@/styles/radix-baseui/ui/switch"

export const switchStory: Story = {
  args: {
    label: "Stream the order",
    size: "default",
    checked: true,
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    size: { control: "radio", options: ["sm", "default"] },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, size, checked, disabled }) => (
    <div className="flex items-center gap-3">
      <Switch
        key={String(checked)}
        id="playground-switch"
        size={size}
        defaultChecked={checked}
        disabled={disabled}
      />
      <Label htmlFor="playground-switch">{label}</Label>
    </div>
  ),
  code: ({ label, size, checked, disabled }) =>
    `<div className="flex items-center gap-3">\n  <Switch id="stream" size="${size}"${checked ? " defaultChecked" : ""}${disabled ? " disabled" : ""} />\n  <Label htmlFor="stream">${label}</Label>\n</div>`,
}
