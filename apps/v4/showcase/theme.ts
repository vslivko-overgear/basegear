import { THEMES } from "@/registry/themes"

// The baseui theme (Overgear colors) on the page while the showcase is on it, so portals (dialogs, popovers,
// sheets) get it too: light by default, dark under `.dark`.
const theme = THEMES.find((t) => t.name === "baseui")

const declarations = (vars: Record<string, string> | undefined) =>
  Object.entries(vars ?? {})
    .map(([name, value]) => `--${name}:${value};`)
    .join("")

// The preset's font is Inter; Theme Settings swaps it through --showcase-font.
const FONT_CSS =
  "[data-showcase]{--font-sans:var(--showcase-font,var(--font-showcase-inter),ui-sans-serif,system-ui,sans-serif)}"

export const SHOWCASE_THEME_CSS = theme
  ? `:root:has([data-showcase]){${declarations(theme.cssVars?.light)}}:root.dark:has([data-showcase]){${declarations(theme.cssVars?.dark)}}${FONT_CSS}`
  : FONT_CSS
