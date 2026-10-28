"use client"

import type { Story } from "@/showcase/types"

import { Rating, RatingDisplay } from "@/styles/radix-baseui/ui/rating"

export const rating: Story = {
  args: { mode: "input", size: "default", max: 5, value: 4.6, disabled: false },
  argTypes: {
    mode: {
      control: "radio",
      options: ["input", "display"],
      label: "component",
    },
    size: { control: "radio", options: ["sm", "default", "lg"] },
    max: { control: "range", min: 3, max: 10 },
    value: {
      control: "range",
      min: 0,
      max: 10,
      step: 0.1,
      label: "value (display)",
    },
    disabled: { control: "boolean", label: "disabled (input)" },
  },
  render: ({ mode, size, max, value, disabled }) =>
    mode === "display" ? (
      <RatingDisplay value={Math.min(value, max)} max={max} size={size} />
    ) : (
      <Rating
        key={max}
        defaultValue={4}
        max={max}
        size={size}
        disabled={disabled}
        aria-label="Your rating"
      />
    ),
  code: ({ mode, size, max, value }) =>
    mode === "display"
      ? `<RatingDisplay value={${value}} max={${max}} size="${size}" />`
      : `<Rating defaultValue={4} max={${max}} size="${size}" aria-label="Your rating" />`,
}
