import { HeartIcon } from "lucide-react"

import { Chip, ChipCounter } from "@/styles/aria-nova/ui/chip"

export function ChipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>Enabled</Chip>
      <Chip defaultSelected>Selected</Chip>
      <Chip isDisabled>Disabled</Chip>
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
