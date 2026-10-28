"use client"

import type { Story } from "@/showcase/types"

import { Label } from "@/styles/radix-baseui/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/styles/radix-baseui/ui/radio-group"

const OPTIONS = [
  { value: "piloted", label: "Piloted" },
  { value: "self-play", label: "Self-play" },
  { value: "remote", label: "Remote control" },
]

export const radioGroup: Story = {
  args: { orientation: "vertical", disabled: false },
  argTypes: {
    orientation: { control: "radio", options: ["vertical", "horizontal"] },
    disabled: { control: "boolean" },
  },
  render: ({ orientation, disabled }) => (
    <RadioGroup
      defaultValue="piloted"
      orientation={orientation}
      disabled={disabled}
      className={
        orientation === "horizontal" ? "flex flex-wrap gap-6" : undefined
      }
      aria-label="Boost method"
    >
      {OPTIONS.map((option) => (
        <div key={option.value} className="flex items-center gap-3">
          <RadioGroupItem value={option.value} id={`method-${option.value}`} />
          <Label htmlFor={`method-${option.value}`}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
  code: ({ orientation }) =>
    `<RadioGroup defaultValue="piloted" orientation="${orientation}">\n${OPTIONS.map((o) => `  <div className="flex items-center gap-3">\n    <RadioGroupItem value="${o.value}" id="${o.value}" />\n    <Label htmlFor="${o.value}">${o.label}</Label>\n  </div>`).join("\n")}\n</RadioGroup>`,
}
