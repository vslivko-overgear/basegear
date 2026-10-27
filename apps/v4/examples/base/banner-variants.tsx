import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Banner,
  BannerDescription,
  BannerTitle,
} from "@/styles/base-nova/ui/banner"

export function BannerVariants() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Banner variant="info">
        <InfoIcon />
        <BannerTitle>New season is live</BannerTitle>
        <BannerDescription>Prices are updated for Season 3.</BannerDescription>
      </Banner>
      <Banner variant="success">
        <CircleCheckIcon />
        <BannerTitle>Payment received</BannerTitle>
      </Banner>
      <Banner variant="warning">
        <TriangleAlertIcon />
        <BannerTitle>Two-factor authentication is off</BannerTitle>
        <BannerDescription>
          Turn it on before the booster logs in.
        </BannerDescription>
      </Banner>
      <Banner variant="destructive">
        <CircleAlertIcon />
        <BannerTitle>The card was declined</BannerTitle>
      </Banner>
    </div>
  )
}
