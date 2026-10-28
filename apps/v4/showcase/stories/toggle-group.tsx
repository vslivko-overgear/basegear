"use client"

import type { Story } from "@/showcase/types"
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/radix-baseui/ui/toggle-group"

export const toggleGroup: Story = {
  args: {
    type: "single",
    variant: "default",
    size: "default",
    spacing: 2,
    orientation: "horizontal",
  },
  argTypes: {
    type: { control: "radio", options: ["single", "multiple"] },
    variant: { control: "radio", options: ["default", "outline"] },
    size: { control: "radio", options: ["sm", "default", "lg"] },
    spacing: { control: "range", min: 0, max: 4 },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  render: ({ type, variant, size, spacing, orientation }) => {
    const items = (
      <>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon />
        </ToggleGroupItem>
      </>
    )
    const common = { variant, size, spacing, orientation }
    return type === "multiple" ? (
      <ToggleGroup
        key="multiple"
        type="multiple"
        defaultValue={["left"]}
        {...common}
      >
        {items}
      </ToggleGroup>
    ) : (
      <ToggleGroup key="single" type="single" defaultValue="left" {...common}>
        {items}
      </ToggleGroup>
    )
  },
  code: ({ type, variant, size, spacing, orientation }) =>
    `<ToggleGroup type="${type}" variant="${variant}" size="${size}" spacing={${spacing}} orientation="${orientation}">\n  <ToggleGroupItem value="left"><AlignLeftIcon /></ToggleGroupItem>\n  <ToggleGroupItem value="center"><AlignCenterIcon /></ToggleGroupItem>\n  <ToggleGroupItem value="right"><AlignRightIcon /></ToggleGroupItem>\n</ToggleGroup>`,
}
