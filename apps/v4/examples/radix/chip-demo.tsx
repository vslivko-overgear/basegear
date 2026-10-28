import { HeartIcon } from "lucide-react"

import { Chip, ChipCounter } from "@/styles/radix-baseui/ui/chip"

export function ChipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>Enabled</Chip>
      <Chip defaultPressed>Selected</Chip>
      <Chip disabled>Disabled</Chip>
      <Chip>
        <HeartIcon />
        Favorites
        <ChipCounter>6</ChipCounter>
      </Chip>
      <Chip variant="success">Online</Chip>
      <Chip variant="destructive">Offline</Chip>
      <Chip size="sm">Small</Chip>
    </div>
  )
}
