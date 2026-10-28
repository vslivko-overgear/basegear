"use client"

import { SegmentedControl, SegmentedControlCounter, SegmentedControlItem } from "@/styles/radix-baseui/ui/segmented-control"
import type { Story } from "@/showcase/types"

const ITEMS = [
  { value: "list", label: "List", count: 12 },
  { value: "grid", label: "Grid", count: 8 },
  { value: "map", label: "Map", count: 3 },
]

export const segmentedControl: Story = {
  args: { size: "default", counters: false, disabled: false },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    counters: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ size, counters, disabled }) => (
    <SegmentedControl defaultValue="list" size={size} disabled={disabled} aria-label="View">
      {ITEMS.map((item) => (
        <SegmentedControlItem key={item.value} value={item.value}>
          {item.label}
          {counters && <SegmentedControlCounter>{item.count}</SegmentedControlCounter>}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  ),
  code: ({ size, counters }) =>
    `<SegmentedControl defaultValue="list" size="${size}">\n${ITEMS.map((i) => `  <SegmentedControlItem value="${i.value}">${i.label}${counters ? `<SegmentedControlCounter>${i.count}</SegmentedControlCounter>` : ""}</SegmentedControlItem>`).join("\n")}\n</SegmentedControl>`,
}
