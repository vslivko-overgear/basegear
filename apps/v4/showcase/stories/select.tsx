"use client"

import type { Story } from "@/showcase/types"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/styles/radix-baseui/ui/select"

const REGIONS = ["Europe", "North America", "Asia", "Oceania"]

export const select: Story = {
  args: { size: "default", placeholder: "Choose a region", disabled: false },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  render: ({ size, placeholder, disabled }) => (
    <Select disabled={disabled}>
      <SelectTrigger size={size} className="w-56">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Region</SelectLabel>
          {REGIONS.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  code: ({ size, placeholder }) =>
    `<Select>\n  <SelectTrigger size="${size}" className="w-56">\n    <SelectValue placeholder="${placeholder}" />\n  </SelectTrigger>\n  <SelectContent>\n${REGIONS.map((r) => `    <SelectItem value="${r}">${r}</SelectItem>`).join("\n")}\n  </SelectContent>\n</Select>`,
}
