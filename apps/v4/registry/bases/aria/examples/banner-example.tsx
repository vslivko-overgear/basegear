import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/aria/components/example"
import {
  Banner,
  BannerClose,
  BannerDescription,
  BannerTitle,
} from "@/registry/bases/aria/ui/banner"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function BannerExample() {
  return (
    <ExampleWrapper>
      <BannerExampleBasic />
      <BannerExampleVariants />
    </ExampleWrapper>
  )
}

function BannerExampleBasic() {
  return (
    <Example title="Basic">
      <Banner className="max-w-lg">
        <IconPlaceholder
          lucide="InfoIcon"
          tabler="IconInfoCircle"
          hugeicons="InformationCircleIcon"
          phosphor="InfoIcon"
          remixicon="RiInformationLine"
        />
        <BannerTitle>Delivery starts in 15 minutes</BannerTitle>
        <BannerDescription>
          A booster accepted your order and will message you in the chat.
        </BannerDescription>
        <BannerClose />
      </Banner>
    </Example>
  )
}

function BannerExampleVariants() {
  return (
    <Example title="Variants">
      <div className="flex w-full max-w-lg flex-col gap-3">
        <Banner variant="info">
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="InformationCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
          />
          <BannerTitle>New season is live</BannerTitle>
          <BannerDescription>
            Prices are updated for Season 3.
          </BannerDescription>
        </Banner>
        <Banner variant="success">
          <IconPlaceholder
            lucide="CircleCheckIcon"
            tabler="IconCircleCheck"
            hugeicons="CheckmarkCircle02Icon"
            phosphor="CheckCircleIcon"
            remixicon="RiCheckboxCircleLine"
          />
          <BannerTitle>Payment received</BannerTitle>
        </Banner>
        <Banner variant="warning">
          <IconPlaceholder
            lucide="TriangleAlertIcon"
            tabler="IconAlertTriangle"
            hugeicons="Alert02Icon"
            phosphor="WarningIcon"
            remixicon="RiAlertLine"
          />
          <BannerTitle>Two-factor authentication is off</BannerTitle>
          <BannerDescription>
            Turn it on before the booster logs in.
          </BannerDescription>
        </Banner>
        <Banner variant="destructive">
          <IconPlaceholder
            lucide="CircleAlertIcon"
            tabler="IconAlertCircle"
            hugeicons="AlertCircleIcon"
            phosphor="WarningCircleIcon"
            remixicon="RiErrorWarningLine"
          />
          <BannerTitle>The card was declined</BannerTitle>
        </Banner>
      </div>
    </Example>
  )
}
