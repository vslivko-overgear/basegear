"use client"

import type { Story } from "@/showcase/types"

import { Slider } from "@/styles/radix-baseui/ui/slider"

export const slider: Story = {
  args: {
    range: true,
    max: 100,
    step: 1,
    orientation: "horizontal",
    disabled: false,
  },
  argTypes: {
    range: { control: "boolean" },
    max: { control: "range", min: 10, max: 100, step: 10 },
    step: { control: "range", min: 1, max: 10 },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    disabled: { control: "boolean" },
  },
  render: ({ range, max, step, orientation, disabled }) => (
    <Slider
      key={`${range}-${max}`}
      defaultValue={
        range
          ? [Math.round(max * 0.2), Math.round(max * 0.7)]
          : [Math.round(max / 2)]
      }
      max={max}
      step={step}
      orientation={orientation}
      disabled={disabled}
      className={orientation === "vertical" ? "h-40" : "w-full max-w-sm"}
      aria-label="Level range"
    />
  ),
  code: ({ range, max, step, orientation }) =>
    `<Slider defaultValue={${range ? `[${Math.round(max * 0.2)}, ${Math.round(max * 0.7)}]` : `[${Math.round(max / 2)}]`}} max={${max}} step={${step}}${orientation === "vertical" ? ' orientation="vertical"' : ""} />`,
}
