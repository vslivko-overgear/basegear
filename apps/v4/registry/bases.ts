import { type RegistryItem } from "shadcn/schema"

export const BASES: RegistryItem[] = [
  {
    name: "radix",
    type: "registry:style",
    title: "Radix UI",
    description:
      "Optimized for fast development, easy maintenance, and accessibility.",
    dependencies: ["radix-ui"],
    meta: {
      logo: "<svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Radix UI</title><path fill='currentColor' d='M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z'/></svg>",
    },
  },
]

export type Base = (typeof BASES)[number]
