import { existsSync, readdirSync, readFileSync } from "fs"
import path from "path"

// The generated styles under styles/ are gitignored (see styles/README.md),
// but the per-style shards in registry/__components__/ (tracked in git)
// dynamically import from them. If a tracked shard references styles that were
// never generated locally (e.g. after pulling a commit that adds a new base),
// Turbopack hits hundreds of module-not-found errors compiling /docs and the
// dev server grinds to a halt. Fail fast with instructions instead.
if (process.env.NODE_ENV === "development") {
  const componentsDir = path.join(process.cwd(), "registry/__components__")
  const referencedStyles = existsSync(componentsDir)
    ? new Set(
        readdirSync(componentsDir)
          .filter((file) => file.endsWith(".tsx"))
          .flatMap((file) => [
            ...readFileSync(path.join(componentsDir, file), "utf-8").matchAll(
              /@\/styles\/([\w-]+)\//g
            ),
          ])
          .map((match) => match[1])
      )
    : new Set(["base-nova"])
  const missingStyles = [...referencedStyles].filter(
    (style) => !existsSync(path.join(process.cwd(), "styles", style, "ui"))
  )

  if (missingStyles.length > 0) {
    throw new Error(
      `Generated styles are missing or stale (${missingStyles.join(", ")}). ` +
        "Run `pnpm --filter=v4 registry:build --style all` once, then restart the dev server."
    )
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*", "./styles/**/*", "./content/**/*", "./examples/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: path.resolve(import.meta.dirname, "../.."),
  },
}

export default nextConfig
