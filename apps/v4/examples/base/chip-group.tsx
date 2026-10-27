import { Chip, ChipGroup } from "@/styles/base-nova/ui/chip"

export function ChipGroupDemo() {
  return (
    <ChipGroup multiple defaultValue={["raids"]} aria-label="Categories">
      <Chip value="raids">Raids</Chip>
      <Chip value="dungeons">Dungeons</Chip>
      <Chip value="pvp">PvP</Chip>
      <Chip value="leveling">Leveling</Chip>
      <Chip value="gold">Gold</Chip>
    </ChipGroup>
  )
}
