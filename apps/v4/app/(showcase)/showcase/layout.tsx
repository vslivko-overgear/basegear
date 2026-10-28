import { type Metadata } from "next"

import { getCatalog } from "@/showcase/docs"
import { ShowcaseShell } from "@/showcase/shell"
import { SHOWCASE_THEME_CSS } from "@/showcase/theme"

export const metadata: Metadata = {
  title: { default: "basegear", template: "%s — basegear" },
  description: "The basegear design system: baseui on Radix in Overgear colors.",
}

export default async function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  const pages = await getCatalog()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHOWCASE_THEME_CSS }} />
      <ShowcaseShell pages={pages}>{children}</ShowcaseShell>
    </>
  )
}
