import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/radix/components/example"
import { Badge } from "@/registry/bases/radix/ui/badge"
import {
  SegmentedControl,
  SegmentedControlCounter,
  SegmentedControlItem,
} from "@/registry/bases/radix/ui/segmented-control"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function SegmentedControlExample() {
  return (
    <ExampleWrapper>
      <SegmentedControlExampleBasic />
      <SegmentedControlExampleIconsCountersAndSizes />
    </ExampleWrapper>
  )
}

function SegmentedControlExampleBasic() {
  return (
    <Example title="Basic">
      <SegmentedControl defaultValue="week" aria-label="Period">
        <SegmentedControlItem value="day">Day</SegmentedControlItem>
        <SegmentedControlItem value="week">Week</SegmentedControlItem>
        <SegmentedControlItem value="month">Month</SegmentedControlItem>
        <SegmentedControlItem value="year">Year</SegmentedControlItem>
      </SegmentedControl>
    </Example>
  )
}

function SegmentedControlExampleIconsCountersAndSizes() {
  return (
    <Example title="Icons, Counters and Sizes">
      <div className="flex flex-col items-start gap-4">
        <SegmentedControl defaultValue="list" aria-label="View">
          <SegmentedControlItem value="list">
            <IconPlaceholder
              lucide="ListIcon"
              tabler="IconList"
              hugeicons="Menu01Icon"
              phosphor="ListIcon"
              remixicon="RiListUnordered"
            />
            List
            <SegmentedControlCounter>12</SegmentedControlCounter>
          </SegmentedControlItem>
          <SegmentedControlItem value="grid">
            <IconPlaceholder
              lucide="LayoutGridIcon"
              tabler="IconLayoutGrid"
              hugeicons="GridViewIcon"
              phosphor="SquaresFourIcon"
              remixicon="RiLayoutGridLine"
            />
            Grid
            <SegmentedControlCounter>8</SegmentedControlCounter>
          </SegmentedControlItem>
          <SegmentedControlItem value="map">
            <IconPlaceholder
              lucide="MapIcon"
              tabler="IconMap"
              hugeicons="MapsIcon"
              phosphor="MapTrifoldIcon"
              remixicon="RiMap2Line"
            />
            Map
            <Badge variant="destructive">New</Badge>
          </SegmentedControlItem>
          <SegmentedControlItem value="table" disabled>
            <IconPlaceholder
              lucide="TableIcon"
              tabler="IconTable"
              hugeicons="Table01Icon"
              phosphor="TableIcon"
              remixicon="RiTableLine"
            />
            Table
          </SegmentedControlItem>
        </SegmentedControl>
        <SegmentedControl size="sm" defaultValue="grid" aria-label="View">
          <SegmentedControlItem value="list" aria-label="List">
            <IconPlaceholder
              lucide="ListIcon"
              tabler="IconList"
              hugeicons="Menu01Icon"
              phosphor="ListIcon"
              remixicon="RiListUnordered"
            />
          </SegmentedControlItem>
          <SegmentedControlItem value="grid" aria-label="Grid">
            <IconPlaceholder
              lucide="LayoutGridIcon"
              tabler="IconLayoutGrid"
              hugeicons="GridViewIcon"
              phosphor="SquaresFourIcon"
              remixicon="RiLayoutGridLine"
            />
          </SegmentedControlItem>
          <SegmentedControlItem value="map" aria-label="Map">
            <IconPlaceholder
              lucide="MapIcon"
              tabler="IconMap"
              hugeicons="MapsIcon"
              phosphor="MapTrifoldIcon"
              remixicon="RiMap2Line"
            />
          </SegmentedControlItem>
        </SegmentedControl>
      </div>
    </Example>
  )
}
