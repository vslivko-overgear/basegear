"use client"

import type * as React from "react"

import { ColorPage } from "./color"

/** Foundations pages by slug, with the lead under the title. */
export const FOUNDATION_PAGES: Record<string, { lead: string; page: React.ComponentType }> = {
  color: {
    lead: "The baseui theme: Overgear colors on the shadcn variables, light and dark. Switch the theme on top to see both.",
    page: ColorPage,
  },
}
