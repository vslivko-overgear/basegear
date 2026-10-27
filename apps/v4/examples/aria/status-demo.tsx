import { InboxIcon } from "lucide-react"

import { Button } from "@/styles/aria-nova/ui/button"
import {
  Status,
  StatusActions,
  StatusDescription,
  StatusMedia,
  StatusTitle,
} from "@/styles/aria-nova/ui/status"

export function StatusDemo() {
  return (
    <Status>
      <StatusMedia>
        <InboxIcon />
      </StatusMedia>
      <StatusTitle>No orders yet</StatusTitle>
      <StatusDescription>
        When you place an order, it will show up here.
      </StatusDescription>
      <StatusActions>
        <Button>Browse games</Button>
      </StatusActions>
    </Status>
  )
}
