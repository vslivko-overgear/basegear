"use client"

import type { Story } from "@/showcase/types"

import { Progress } from "@/styles/radix-baseui/ui/progress"

export const progress: Story = {
  args: { value: 64 },
  argTypes: { value: { control: "range", min: 0, max: 100 } },
  render: ({ value }) => (
    <Progress
      value={value}
      className="w-full max-w-sm"
      aria-label="Order progress"
    />
  ),
  code: ({ value }) =>
    `<Progress value={${value}} aria-label="Order progress" />`,
}
