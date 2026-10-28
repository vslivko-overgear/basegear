import { CircleFadingArrowUpIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}
