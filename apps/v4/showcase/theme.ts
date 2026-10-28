import { THEMES } from "@/registry/themes"

// The baseui theme (Overgear colors) on the page while the showcase is on it, so portals (dialogs, popovers,
// sheets) get it too: light by default, dark under `.dark`.
const theme = THEMES.find((t) => t.name === "baseui")

const declarations = (vars: Record<string, string> | undefined) =>
  Object.entries(vars ?? {})
    .map(([name, value]) => `--${name}:${value};`)
    .join("")

export const SHOWCASE_THEME_CSS = theme
  ? `:root:has([data-showcase]){${declarations(theme.cssVars?.light)}}:root.dark:has([data-showcase]){${declarations(theme.cssVars?.dark)}}`
  : ""
