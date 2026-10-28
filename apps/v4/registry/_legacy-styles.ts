// The one style the docs, blocks and /view routes render with: baseui on Radix
// (the base og-frontend-monorepo's ui-system uses).
export const legacyStyles = [
  {
    name: "radix-baseui",
    title: "Radix baseui",
  },
] as const

export type Style = (typeof legacyStyles)[number]

export async function getActiveStyle() {
  return legacyStyles[0]
}

export function getStyle(name: string) {
  return legacyStyles.find((style) => style.name === name)
}
