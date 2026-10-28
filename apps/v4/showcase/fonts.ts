import { Geist, Inter } from "next/font/google"

// Inter is the baseui preset's font; Geist is a Theme Settings option.
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-showcase-inter" })
const geist = Geist({ subsets: ["latin"], variable: "--font-showcase-geist" })

export const showcaseFontVariables = `${inter.variable} ${geist.variable}`
