// The showcase catalog, after baseui's docs: Theming, Foundations and Components in groups.
// Component pages are the Radix docs pages of the registry (content/docs/components/radix).

export type CatalogPage = {
  section: "theming" | "foundations" | "components"
  slug: string
  title: string
  group?: string
  icon?: string
}

export const FOUNDATIONS: CatalogPage[] = [
  { section: "foundations", slug: "color", title: "Color", icon: "Palette" },
  { section: "foundations", slug: "typography", title: "Typography", icon: "Type" },
  { section: "foundations", slug: "spacing", title: "Spacing", icon: "Ruler" },
  { section: "foundations", slug: "radius", title: "Radius", icon: "SquareRoundCorner" },
  { section: "foundations", slug: "shadow", title: "Shadow", icon: "Layers" },
  { section: "foundations", slug: "motion", title: "Motion", icon: "CirclePlay" },
  { section: "foundations", slug: "icons", title: "Icons", icon: "Shapes" },
]

export const THEMING: CatalogPage[] = [
  { section: "theming", slug: "theme-settings", title: "Theme Settings", icon: "SlidersHorizontal" },
]

// Component groups; a page that is in no group lands in "More".
export const COMPONENT_GROUPS: { group: string; pages: string[] }[] = [
  { group: "Actions", pages: ["button", "button-group", "toggle", "toggle-group", "chip", "link"] },
  {
    group: "Inputs",
    pages: [
      "input", "input-group", "textarea", "number-input", "input-otp", "checkbox", "radio-group", "switch",
      "slider", "select", "native-select", "combobox", "command", "calendar", "date-picker", "rating",
      "segmented-control", "field", "label", "form",
    ],
  },
  {
    group: "Overlays",
    pages: ["dialog", "alert-dialog", "sheet", "drawer", "popover", "hover-card", "tooltip", "dropdown-menu", "context-menu", "menubar"],
  },
  { group: "Feedback", pages: ["alert", "banner", "status", "empty", "badge", "progress", "spinner", "skeleton", "sonner", "toast"] },
  {
    group: "Navigation",
    pages: ["tabs", "breadcrumb", "pagination", "navigation-menu", "sidebar", "navbar", "bottom-bar", "accordion", "collapsible"],
  },
  {
    group: "Data Display",
    pages: ["avatar", "card", "item", "table", "data-table", "chart", "carousel", "kbd", "typography", "separator"],
  },
  { group: "Layout", pages: ["layout", "aspect-ratio", "scroll-area", "resizable"] },
  { group: "Messaging", pages: ["message", "bubble", "message-scroller", "attachment", "code-block", "questionnaire", "trace", "marker"] },
]
