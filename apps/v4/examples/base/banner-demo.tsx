import { InfoIcon } from "lucide-react"

import {
  Banner,
  BannerClose,
  BannerDescription,
  BannerTitle,
} from "@/styles/base-nova/ui/banner"

export function BannerDemo() {
  return (
    <Banner className="max-w-lg">
      <InfoIcon />
      <BannerTitle>Delivery starts in 15 minutes</BannerTitle>
      <BannerDescription>
        A booster accepted your order and will message you in the chat.
      </BannerDescription>
      <BannerClose />
    </Banner>
  )
}
