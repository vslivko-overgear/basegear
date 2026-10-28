import type { Metadata } from "next"
import { cn } from "cn"

import { META_THEME_COLORS, siteConfig } from "@/lib/config"
import { fontVariables } from "@/lib/fonts"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/registry/bases/radix/ui/sonner"
import { TooltipProvider } from "@/registry/bases/radix/ui/tooltip"

import "@/app/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body className={cn("overscroll-none antialiased")}>
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster position="top-center" />
          </TooltipProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
