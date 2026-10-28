"use client"

import type { Story } from "@/showcase/types"

import { Checkbox } from "@/styles/radix-baseui/ui/checkbox"
import { Label } from "@/styles/radix-baseui/ui/label"

export const checkbox: Story = {
  args: { label: "Express start", checked: "true", disabled: false },
  argTypes: {
    label: { control: "text" },
    checked: { control: "radio", options: ["false", "true", "indeterminate"] },
    disabled: { control: "boolean" },
  },
  render: ({ label, checked, disabled }) => (
    <div className="flex items-center gap-3">
      <Checkbox
        id="playground-checkbox"
        checked={
          checked === "indeterminate" ? "indeterminate" : checked === "true"
        }
        disabled={disabled}
      />
      <Label htmlFor="playground-checkbox">{label}</Label>
    </div>
  ),
  code: ({ label, checked, disabled }) =>
    `<div className="flex items-center gap-3">\n  <Checkbox id="express"${checked === "true" ? " defaultChecked" : checked === "indeterminate" ? ' checked="indeterminate"' : ""}${disabled ? " disabled" : ""} />\n  <Label htmlFor="express">${label}</Label>\n</div>`,
}
