export const siteConfig = {
  name: "basegear",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:4000",
  description:
    "The basegear design system: baseui rebuilt as shadcn/ui on Radix, in Overgear colors.",
  links: {
    github: "https://github.com/vslivko-overgear/basegear",
  },
}

// Preset code of the baseui style + baseui theme (Overgear colors), Lucide, Inter.
export const BASEUI_PRESET = "b7qMHwHqa"

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#050622",
}
