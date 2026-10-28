"use client"

import type { Story } from "@/showcase/types"

import {
  Banner,
  BannerClose,
  BannerDescription,
  BannerTitle,
} from "@/styles/radix-baseui/ui/banner"

export const banner: Story = {
  args: {
    variant: "info",
    title: "Season 2 is live",
    description: "New raids and a fresh ladder are open.",
    closable: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["info", "success", "warning", "destructive"],
    },
    title: { control: "text" },
    description: { control: "text" },
    closable: { control: "boolean" },
  },
  render: ({ variant, title, description, closable }) => (
    <Banner variant={variant} className="w-full max-w-xl">
      <BannerTitle>{title}</BannerTitle>
      <BannerDescription>{description}</BannerDescription>
      {closable && <BannerClose />}
    </Banner>
  ),
  code: ({ variant, title, description, closable }) =>
    `<Banner variant="${variant}">\n  <BannerTitle>${title}</BannerTitle>\n  <BannerDescription>${description}</BannerDescription>${closable ? "\n  <BannerClose />" : ""}\n</Banner>`,
}
