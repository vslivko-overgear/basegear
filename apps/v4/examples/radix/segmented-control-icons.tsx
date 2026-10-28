import { LayoutGridIcon, ListIcon, MapIcon, TableIcon } from "lucide-react"

import { Badge } from "@/styles/radix-baseui/ui/badge"
import {
  SegmentedControl,
  SegmentedControlCounter,
  SegmentedControlItem,
} from "@/styles/radix-baseui/ui/segmented-control"

export function SegmentedControlIcons() {
  return (
    <div className="flex flex-col items-start gap-4">
      <SegmentedControl defaultValue="list" aria-label="View">
        <SegmentedControlItem value="list">
          <ListIcon />
          List
          <SegmentedControlCounter>12</SegmentedControlCounter>
        </SegmentedControlItem>
        <SegmentedControlItem value="grid">
          <LayoutGridIcon />
          Grid
          <SegmentedControlCounter>8</SegmentedControlCounter>
        </SegmentedControlItem>
        <SegmentedControlItem value="map">
          <MapIcon />
          Map
          <Badge variant="destructive">New</Badge>
        </SegmentedControlItem>
        <SegmentedControlItem value="table" disabled>
          <TableIcon />
          Table
        </SegmentedControlItem>
      </SegmentedControl>
      <SegmentedControl size="sm" defaultValue="grid" aria-label="View">
        <SegmentedControlItem value="list" aria-label="List">
          <ListIcon />
        </SegmentedControlItem>
        <SegmentedControlItem value="grid" aria-label="Grid">
          <LayoutGridIcon />
        </SegmentedControlItem>
        <SegmentedControlItem value="map" aria-label="Map">
          <MapIcon />
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  )
}
