"use client"

import type { Story } from "@/showcase/types"

import { NumberInput } from "@/styles/radix-baseui/ui/number-input"

export const numberInput: Story = {
  args: { min: 1, max: 90, step: 1, disabled: false },
  argTypes: {
    min: { control: "range", min: 0, max: 10 },
    max: { control: "range", min: 10, max: 100, step: 10 },
    step: { control: "range", min: 1, max: 10 },
    disabled: { control: "boolean" },
  },
  render: ({ min, max, step, disabled }) => (
    <NumberInput
      key={`${min}-${max}-${step}`}
      className="w-40"
      defaultValue={Math.min(max, Math.max(min, 10))}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      aria-label="Level"
    />
  ),
  code: ({ min, max, step, disabled }) =>
    `<NumberInput defaultValue={10} min={${min}} max={${max}} step={${step}}${disabled ? " disabled" : ""} aria-label="Level" />`,
}
