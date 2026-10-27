import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Chip, ChipCounter, ChipGroup } from "@/registry/bases/base/ui/chip"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function ChipExample() {
  return (
    <ExampleWrapper>
      <ChipExampleStates />
      <ChipExampleChipGroup />
    </ExampleWrapper>
  )
}

function ChipExampleStates() {
  return (
    <Example title="States">
      <div className="flex flex-wrap items-center gap-2">
        <Chip>Enabled</Chip>
        <Chip defaultPressed>Selected</Chip>
        <Chip disabled>Disabled</Chip>
        <Chip>
          <IconPlaceholder
            lucide="HeartIcon"
            tabler="IconHeart"
            hugeicons="FavouriteIcon"
            phosphor="HeartIcon"
            remixicon="RiHeartLine"
          />
          Favorites
          <ChipCounter>6</ChipCounter>
        </Chip>
        <Chip variant="success">Online</Chip>
        <Chip variant="destructive">Offline</Chip>
        <Chip size="sm">Small</Chip>
      </div>
    </Example>
  )
}

function ChipExampleChipGroup() {
  return (
    <Example title="Chip Group">
      <ChipGroup multiple defaultValue={["raids"]} aria-label="Categories">
        <Chip value="raids">Raids</Chip>
        <Chip value="dungeons">Dungeons</Chip>
        <Chip value="pvp">PvP</Chip>
        <Chip value="leveling">Leveling</Chip>
        <Chip value="gold">Gold</Chip>
      </ChipGroup>
    </Example>
  )
}
