import { type Metadata } from "next"

import { FoundationPage } from "@/showcase/foundations/page"

export const metadata: Metadata = { title: "Theme Settings" }

export default function ThemeSettings() {
  return (
    <article>
      <FoundationPage slug="theme-settings" title="Theme Settings" />
    </article>
  )
}
