import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/registry/bases/base/ui/navbar"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function NavbarExample() {
  return (
    <ExampleWrapper>
      <NavbarExampleBasic />
    </ExampleWrapper>
  )
}

function NavbarExampleBasic() {
  return (
    <Example title="Basic">
      <Navbar className="max-w-sm rounded-xl border">
        <NavbarStart>
          <Button variant="ghost" size="icon" aria-label="Back">
            <IconPlaceholder
              lucide="ChevronLeftIcon"
              tabler="IconChevronLeft"
              hugeicons="ArrowLeft01Icon"
              phosphor="CaretLeftIcon"
              remixicon="RiArrowLeftSLine"
            />
          </Button>
        </NavbarStart>
        <NavbarHeading>
          <NavbarTitle>Order #4821</NavbarTitle>
          <NavbarSubtitle>Mythic+ Dungeon Boost</NavbarSubtitle>
        </NavbarHeading>
        <NavbarEnd>
          <Button variant="ghost" size="icon" aria-label="Search">
            <IconPlaceholder
              lucide="SearchIcon"
              tabler="IconSearch"
              hugeicons="Search01Icon"
              phosphor="MagnifyingGlassIcon"
              remixicon="RiSearchLine"
            />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Share">
            <IconPlaceholder
              lucide="ShareIcon"
              tabler="IconShare"
              hugeicons="Share01Icon"
              phosphor="ShareIcon"
              remixicon="RiShareLine"
            />
          </Button>
        </NavbarEnd>
      </Navbar>
    </Example>
  )
}
