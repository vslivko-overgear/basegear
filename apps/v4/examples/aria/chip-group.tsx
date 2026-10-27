import { Chip, ChipGroup } from "@/styles/aria-nova/ui/chip"

export function ChipGroupDemo() {
  return (
    <ChipGroup defaultSelectedKeys={["raids"]} aria-label="Categories">
      <Chip id="raids">Raids</Chip>
      <Chip id="dungeons">Dungeons</Chip>
      <Chip id="pvp">PvP</Chip>
      <Chip id="leveling">Leveling</Chip>
      <Chip id="gold">Gold</Chip>
    </ChipGroup>
  )
}
