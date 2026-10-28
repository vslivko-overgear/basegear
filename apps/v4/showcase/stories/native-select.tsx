"use client"

import type { Story } from "@/showcase/types"

import {
  NativeSelect,
  NativeSelectOption,
} from "@/styles/radix-baseui/ui/native-select"

const OPTIONS = ["1 character", "2 characters", "3 characters", "4 characters"]

export const nativeSelect: Story = {
  args: { size: "default", disabled: false },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
  },
  render: ({ size, disabled }) => (
    <NativeSelect size={size} disabled={disabled} aria-label="Characters">
      {OPTIONS.map((option) => (
        <NativeSelectOption key={option} value={option}>
          {option}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  ),
  code: ({ size }) =>
    `<NativeSelect size="${size}">\n${OPTIONS.map((o) => `  <NativeSelectOption value="${o}">${o}</NativeSelectOption>`).join("\n")}\n</NativeSelect>`,
}
