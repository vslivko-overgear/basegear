import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/styles/aria-nova/ui/segmented-control"

export function SegmentedControlDemo() {
  return (
    <SegmentedControl defaultValue="week" aria-label="Period">
      <SegmentedControlItem value="day">Day</SegmentedControlItem>
      <SegmentedControlItem value="week">Week</SegmentedControlItem>
      <SegmentedControlItem value="month">Month</SegmentedControlItem>
      <SegmentedControlItem value="year">Year</SegmentedControlItem>
    </SegmentedControl>
  )
}
