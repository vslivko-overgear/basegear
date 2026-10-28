"use client"

import type { Story } from "@/showcase/types"
import { HeartIcon } from "lucide-react"

import { Chip, ChipCounter, ChipGroup } from "@/styles/radix-baseui/ui/chip"

const OPTIONS = ["Raids", "Dungeons", "PvP", "Leveling"]

export const chip: Story = {
  args: {
    variant: "default",
    size: "default",
    group: true,
    icon: false,
    counter: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "destructive"],
    },
    size: { control: "radio", options: ["sm", "default"] },
    group: { control: "boolean", label: "chip group" },
    icon: { control: "boolean" },
    counter: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ variant, size, group, icon, counter, disabled }) =>
    group ? (
      <ChipGroup
        type="multiple"
        defaultValue={["Raids"]}
        variant={variant}
        size={size}
        disabled={disabled}
      >
        {OPTIONS.map((option, i) => (
          <Chip key={option} value={option}>
            {icon && <HeartIcon />}
            {option}
            {counter && <ChipCounter>{12 - i * 3}</ChipCounter>}
          </Chip>
        ))}
      </ChipGroup>
    ) : (
      <Chip variant={variant} size={size} disabled={disabled}>
        {icon && <HeartIcon />}
        Favorites
        {counter && <ChipCounter>6</ChipCounter>}
      </Chip>
    ),
  code: ({ variant, size, group }) =>
    group
      ? `<ChipGroup type="multiple" variant="${variant}" size="${size}" defaultValue={["Raids"]}>\n${OPTIONS.map((o) => `  <Chip value="${o}">${o}</Chip>`).join("\n")}\n</ChipGroup>`
      : `<Chip variant="${variant}" size="${size}">Favorites</Chip>`,
}
