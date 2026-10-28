"use client"

import * as React from "react"

import { ColorPage } from "./color"
import { MotionPage } from "./motion"
import { RadiusPage } from "./radius"
import { ShadowPage } from "./shadow"
import { SpacingPage } from "./spacing"
import { ThemeSettingsPage } from "./theme-settings"
import { TypographyPage } from "./typography"

// The icons page carries the whole Lucide set, so it loads on its own.
const IconsPage = React.lazy(() =>
  import("./icons").then((mod) => ({ default: mod.IconsPage }))
)

/** Foundations and Theming pages by slug, with the lead under the title. */
export const FOUNDATION_PAGES: Record<
  string,
  { lead: string; page: React.ComponentType }
> = {
  color: {
    lead: "The baseui theme: Overgear colors on the shadcn variables, light and dark. Switch the theme on top to see both.",
    page: ColorPage,
  },
  typography: {
    lead: "One sans-serif family, a short Tailwind text scale and four weights.",
    page: TypographyPage,
  },
  spacing: {
    lead: "Tailwind's 4px spacing grid, the steps the baseui style uses.",
    page: SpacingPage,
  },
  radius: {
    lead: "A radius scale derived from one --radius, so every corner changes together.",
    page: RadiusPage,
  },
  shadow: {
    lead: "Shadows lift what floats above the page; flat elements are separated by fills.",
    page: ShadowPage,
  },
  motion: {
    lead: "Short, functional transitions that switch off for people who prefer reduced motion.",
    page: MotionPage,
  },
  icons: {
    lead: "Lucide, the only icon set of the system. Click an icon to copy its import.",
    page: IconsPage,
  },
  "theme-settings": {
    lead: "Pick the brand color, the radius and the font. Everything applies to the whole showcase at once.",
    page: ThemeSettingsPage,
  },
}
