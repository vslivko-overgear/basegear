import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/aria/components/example"
import { Chip, ChipCounter, ChipGroup } from "@/registry/bases/aria/ui/chip"
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
        <Chip defaultSelected>Selected</Chip>
        <Chip isDisabled>Disabled</Chip>
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
      <ChipGroup defaultSelectedKeys={["raids"]} aria-label="Categories">
        <Chip id="raids">Raids</Chip>
        <Chip id="dungeons">Dungeons</Chip>
        <Chip id="pvp">PvP</Chip>
        <Chip id="leveling">Leveling</Chip>
        <Chip id="gold">Gold</Chip>
      </ChipGroup>
    </Example>
  )
}
