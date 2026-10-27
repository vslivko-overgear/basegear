import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Status,
  StatusDescription,
  StatusMedia,
  StatusTitle,
} from "@/styles/base-nova/ui/status"

export function StatusVariants() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2">
      <Status variant="info">
        <StatusMedia>
          <InfoIcon />
        </StatusMedia>
        <StatusTitle>Good to know</StatusTitle>
        <StatusDescription>Your booster is online now.</StatusDescription>
      </Status>
      <Status variant="success">
        <StatusMedia>
          <CircleCheckIcon />
        </StatusMedia>
        <StatusTitle>All done</StatusTitle>
        <StatusDescription>The order is completed.</StatusDescription>
      </Status>
      <Status variant="warning">
        <StatusMedia>
          <TriangleAlertIcon />
        </StatusMedia>
        <StatusTitle>Heads up</StatusTitle>
        <StatusDescription>Check the details before you pay.</StatusDescription>
      </Status>
      <Status variant="destructive">
        <StatusMedia>
          <CircleAlertIcon />
        </StatusMedia>
        <StatusTitle>Something went wrong</StatusTitle>
        <StatusDescription>Try again in a moment.</StatusDescription>
      </Status>
    </div>
  )
}
