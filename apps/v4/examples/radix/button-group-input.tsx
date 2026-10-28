import { SearchIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"
import { ButtonGroup } from "@/styles/radix-baseui/ui/button-group"
import { Input } from "@/styles/radix-baseui/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
