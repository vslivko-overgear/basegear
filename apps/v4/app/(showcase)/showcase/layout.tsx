import { type Metadata } from "next"
import { Geist, Inter } from "next/font/google"
import { getCatalog } from "@/showcase/docs"
import { ShowcaseShell } from "@/showcase/shell"
import { SHOWCASE_THEME_CSS } from "@/showcase/theme"

export const metadata: Metadata = {
  title: { default: "basegear", template: "%s — basegear" },
  description:
    "The basegear design system: baseui on Radix in Overgear colors.",
}

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-showcase-inter",
})
const geist = Geist({ subsets: ["latin"], variable: "--font-showcase-geist" })

export default async function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getCatalog()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHOWCASE_THEME_CSS }} />
      <div className={`${inter.variable} ${geist.variable} contents`}>
        <ShowcaseShell pages={pages}>{children}</ShowcaseShell>
      </div>
    </>
  )
}
