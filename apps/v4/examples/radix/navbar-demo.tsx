import { ChevronLeftIcon, SearchIcon, ShareIcon } from "lucide-react"

import { Button } from "@/styles/radix-nova/ui/button"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/styles/radix-nova/ui/navbar"

export function NavbarDemo() {
  return (
    <Navbar className="max-w-sm rounded-xl border">
      <NavbarStart>
        <Button variant="ghost" size="icon" aria-label="Back">
          <ChevronLeftIcon />
        </Button>
      </NavbarStart>
      <NavbarHeading>
        <NavbarTitle>Order #4821</NavbarTitle>
        <NavbarSubtitle>Mythic+ Dungeon Boost</NavbarSubtitle>
      </NavbarHeading>
      <NavbarEnd>
        <Button variant="ghost" size="icon" aria-label="Search">
          <SearchIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Share">
          <ShareIcon />
        </Button>
      </NavbarEnd>
    </Navbar>
  )
}
