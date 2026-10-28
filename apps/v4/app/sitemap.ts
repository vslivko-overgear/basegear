import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/config"
import { getCatalog } from "@/showcase/docs"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getCatalog()
  return ["/", ...pages.map((page) => `/${page.section}/${page.slug}`)].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }))
}
