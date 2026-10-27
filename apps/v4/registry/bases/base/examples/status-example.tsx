import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Status,
  StatusActions,
  StatusDescription,
  StatusMedia,
  StatusTitle,
} from "@/registry/bases/base/ui/status"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function StatusExample() {
  return (
    <ExampleWrapper>
      <StatusExampleEmpty />
      <StatusExampleVariants />
    </ExampleWrapper>
  )
}

function StatusExampleEmpty() {
  return (
    <Example title="Empty">
      <Status>
        <StatusMedia>
          <IconPlaceholder
            lucide="InboxIcon"
            tabler="IconInbox"
            hugeicons="InboxIcon"
            phosphor="TrayIcon"
            remixicon="RiInboxLine"
          />
        </StatusMedia>
        <StatusTitle>No orders yet</StatusTitle>
        <StatusDescription>
          When you place an order, it will show up here.
        </StatusDescription>
        <StatusActions>
          <Button>Browse games</Button>
        </StatusActions>
      </Status>
    </Example>
  )
}

function StatusExampleVariants() {
  return (
    <Example title="Variants">
      <div className="grid w-full gap-6 sm:grid-cols-2">
        <Status variant="info">
          <StatusMedia>
            <IconPlaceholder
              lucide="InfoIcon"
              tabler="IconInfoCircle"
              hugeicons="InformationCircleIcon"
              phosphor="InfoIcon"
              remixicon="RiInformationLine"
            />
          </StatusMedia>
          <StatusTitle>Good to know</StatusTitle>
          <StatusDescription>Your booster is online now.</StatusDescription>
        </Status>
        <Status variant="success">
          <StatusMedia>
            <IconPlaceholder
              lucide="CircleCheckIcon"
              tabler="IconCircleCheck"
              hugeicons="CheckmarkCircle02Icon"
              phosphor="CheckCircleIcon"
              remixicon="RiCheckboxCircleLine"
            />
          </StatusMedia>
          <StatusTitle>All done</StatusTitle>
          <StatusDescription>The order is completed.</StatusDescription>
        </Status>
        <Status variant="warning">
          <StatusMedia>
            <IconPlaceholder
              lucide="TriangleAlertIcon"
              tabler="IconAlertTriangle"
              hugeicons="Alert02Icon"
              phosphor="WarningIcon"
              remixicon="RiAlertLine"
            />
          </StatusMedia>
          <StatusTitle>Heads up</StatusTitle>
          <StatusDescription>
            Check the details before you pay.
          </StatusDescription>
        </Status>
        <Status variant="destructive">
          <StatusMedia>
            <IconPlaceholder
              lucide="CircleAlertIcon"
              tabler="IconAlertCircle"
              hugeicons="AlertCircleIcon"
              phosphor="WarningCircleIcon"
              remixicon="RiErrorWarningLine"
            />
          </StatusMedia>
          <StatusTitle>Something went wrong</StatusTitle>
          <StatusDescription>Try again in a moment.</StatusDescription>
        </Status>
      </div>
    </Example>
  )
}
