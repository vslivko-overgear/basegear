"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import { Spinner } from "@/styles/radix-baseui/ui/spinner"

const SIZES: Record<string, string> = {
  "size-4": "size-4",
  "size-6": "size-6",
  "size-8": "size-8",
}

export const spinner: Story = {
  args: { size: "size-6", inButton: false },
  argTypes: {
    size: {
      control: "radio",
      options: Object.keys(SIZES),
      label: "size (className)",
    },
    inButton: { control: "boolean", label: "in a button" },
  },
  render: ({ size, inButton }) =>
    inButton ? (
      <Button disabled>
        <Spinner />
        Processing
      </Button>
    ) : (
      <Spinner className={SIZES[size]} />
    ),
  code: ({ size, inButton }) =>
    inButton
      ? `<Button disabled>\n  <Spinner />\n  Processing\n</Button>`
      : `<Spinner className="${size}" />`,
}
