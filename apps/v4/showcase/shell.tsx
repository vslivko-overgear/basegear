"use client"

// The showcase frame, after baseui's docs site: the catalog on the left, the page in the middle, the Playground
// settings on the right, width and theme switches on top. Built from the design system's own components.
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { CatalogPage } from "@/showcase/catalog"
import { Controls } from "@/showcase/controls"
import type { Args, ArgType } from "@/showcase/types"
import {
  ChevronDownIcon,
  CirclePlayIcon,
  LayersIcon,
  MenuIcon,
  MonitorIcon,
  MoonIcon,
  PaletteIcon,
  RulerIcon,
  SearchIcon,
  ShapesIcon,
  SlidersHorizontalIcon,
  SmartphoneIcon,
  SquircleIcon,
  SunIcon,
  TypeIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/styles/radix-baseui/ui/collapsible"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/radix-baseui/ui/input-group"
import { ScrollArea } from "@/styles/radix-baseui/ui/scroll-area"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/styles/radix-baseui/ui/segmented-control"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/styles/radix-baseui/ui/sheet"

/* ------------------------------------------------------------- settings */

type Settings = {
  argTypes: Record<string, ArgType>
  args: Args
  onChange: (name: string, value: unknown) => void
  onReset: () => void
}

const SettingsContext = React.createContext<
  (settings: Settings | null) => void
>(() => {})
export const useSettingsPanel = () => React.useContext(SettingsContext)

/* ---------------------------------------------------------- theme overrides */

/** CSS variables set by Theme Settings on top of the baseui theme; stored on this device. */
export type ThemeOverrides = Record<string, string>
const OVERRIDES_KEY = "basegear-showcase-theme"

const ThemeOverridesContext = React.createContext<{
  overrides: ThemeOverrides
  setOverrides: (next: ThemeOverrides) => void
}>({ overrides: {}, setOverrides: () => {} })
export const useThemeOverrides = () => React.useContext(ThemeOverridesContext)

function readOverrides(): ThemeOverrides {
  try {
    return JSON.parse(
      localStorage.getItem(OVERRIDES_KEY) ?? "{}"
    ) as ThemeOverrides
  } catch {
    return {}
  }
}

/* ------------------------------------------------------------------ catalog */

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette: PaletteIcon,
  Type: TypeIcon,
  Ruler: RulerIcon,
  SquareRoundCorner: SquircleIcon,
  Layers: LayersIcon,
  CirclePlay: CirclePlayIcon,
  Shapes: ShapesIcon,
  SlidersHorizontal: SlidersHorizontalIcon,
}

const SECTION_TITLES = {
  theming: "Theming",
  foundations: "Foundations",
  components: "Components",
  blocks: "Blocks",
} as const
export const hrefOf = (page: CatalogPage) =>
  `/${page.section}/${page.slug}`

function NavRow({
  page,
  active,
  sub,
}: {
  page: CatalogPage
  active: boolean
  sub?: boolean
}) {
  const Icon = page.icon ? ICONS[page.icon] : undefined
  return (
    <Link
      href={hrefOf(page)}
      aria-current={active ? "page" : undefined}
      data-active={active}
      className="flex min-h-9 items-center gap-3 rounded-lg px-3 text-sm text-foreground/80 transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-[active=true]:bg-primary/10 data-[active=true]:font-semibold data-[active=true]:text-foreground"
      style={sub ? { paddingLeft: 24 } : undefined}
    >
      {Icon && <Icon className="size-[18px] shrink-0" />}
      <span className="truncate">{page.title}</span>
    </Link>
  )
}

function Catalog({ pages }: { pages: CatalogPage[] }) {
  const pathname = usePathname()
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const match = (p: CatalogPage) =>
    !q || p.title.toLowerCase().includes(q) || p.slug.includes(q)
  const activeGroup = pages.find((p) => hrefOf(p) === pathname)?.group
  const [open, setOpen] = React.useState<string | undefined>(activeGroup)
  React.useEffect(() => setOpen(activeGroup), [activeGroup])

  return (
    <div className="flex flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
      </InputGroup>
      <nav aria-label="Catalog" className="flex flex-col">
        {(Object.keys(SECTION_TITLES) as (keyof typeof SECTION_TITLES)[]).map(
          (section) => {
            const list = pages.filter((p) => p.section === section && match(p))
            if (!list.length) return null
            const groups = [...new Set(list.map((p) => p.group))]
            return (
              <div
                key={section}
                className="flex flex-col gap-0.5 border-b py-3 last:border-b-0"
              >
                <div className="px-3 pb-2 text-xs text-muted-foreground">
                  {SECTION_TITLES[section]}
                </div>
                {groups.map((group) =>
                  group ? (
                    <Collapsible
                      key={group}
                      open={Boolean(q) || open === group}
                      onOpenChange={(isOpen) =>
                        setOpen(isOpen ? group : undefined)
                      }
                    >
                      <CollapsibleTrigger className="flex min-h-9 w-full items-center justify-between rounded-lg px-3 text-sm text-foreground/80 outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180">
                        {group}
                        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-0.5">
                        {list
                          .filter((p) => p.group === group)
                          .map((p) => (
                            <NavRow
                              key={p.slug}
                              page={p}
                              active={hrefOf(p) === pathname}
                              sub
                            />
                          ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    list.map((p) => (
                      <NavRow
                        key={p.slug}
                        page={p}
                        active={hrefOf(p) === pathname}
                      />
                    ))
                  )
                )}
              </div>
            )
          }
        )}
      </nav>
    </div>
  )
}

/* -------------------------------------------------------------------- shell */

const ViewportContext = React.createContext<"desktop" | "mobile">("desktop")
export const useViewport = () => React.useContext(ViewportContext)

export function ShowcaseShell({
  pages,
  children,
}: {
  pages: CatalogPage[]
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [viewport, setViewport] = React.useState<"desktop" | "mobile">(
    "desktop"
  )
  const [settings, setSettings] = React.useState<Settings | null>(null)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [overrides, setOverridesState] = React.useState<ThemeOverrides>({})
  // The theme is known on the client only; the switch shows it once mounted.
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => setOverridesState(readOverrides()), [])

  // Overrides go on <html> so portals get them too; they leave with the showcase.
  React.useEffect(() => {
    const root = document.documentElement
    Object.entries(overrides).forEach(([name, value]) =>
      root.style.setProperty(name, value)
    )
    return () =>
      Object.keys(overrides).forEach((name) => root.style.removeProperty(name))
  }, [overrides])
  React.useEffect(() => setMenuOpen(false), [pathname])

  const setOverrides = React.useCallback((next: ThemeOverrides) => {
    setOverridesState(next)
    try {
      localStorage.setItem(OVERRIDES_KEY, JSON.stringify(next))
    } catch {
      // Storage unavailable: the overrides last for this visit.
    }
  }, [])

  return (
    <ThemeOverridesContext.Provider value={{ overrides, setOverrides }}>
      <SettingsContext.Provider value={setSettings}>
        <ViewportContext.Provider value={viewport}>
          <div
            data-showcase
            className="min-h-svh bg-background font-sans text-foreground antialiased"
          >
            <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur md:px-6">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open catalog"
                onClick={() => setMenuOpen(true)}
              >
                <MenuIcon />
              </Button>
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold tracking-tight"
              >
                <span className="grid size-8 place-items-center rounded-xl bg-primary text-sm text-primary-foreground">
                  bg
                </span>
                basegear
              </Link>
              <div className="ml-auto flex items-center gap-3">
                <SegmentedControl
                  className="hidden md:flex"
                  value={viewport}
                  onValueChange={(value) =>
                    setViewport(value as "desktop" | "mobile")
                  }
                  aria-label="Preview width"
                >
                  <SegmentedControlItem value="desktop" aria-label="Desktop">
                    <MonitorIcon />
                  </SegmentedControlItem>
                  <SegmentedControlItem value="mobile" aria-label="Mobile">
                    <SmartphoneIcon />
                  </SegmentedControlItem>
                </SegmentedControl>
                <SegmentedControl
                  value={
                    mounted
                      ? resolvedTheme === "dark"
                        ? "dark"
                        : "light"
                      : undefined
                  }
                  onValueChange={setTheme}
                  aria-label="Theme"
                >
                  <SegmentedControlItem value="light" aria-label="Light theme">
                    <SunIcon />
                  </SegmentedControlItem>
                  <SegmentedControlItem value="dark" aria-label="Dark theme">
                    <MoonIcon />
                  </SegmentedControlItem>
                </SegmentedControl>
              </div>
            </header>

            <div
              className="grid md:grid-cols-[280px_minmax(0,1fr)] data-[settings=true]:xl:grid-cols-[280px_minmax(0,1fr)_300px]"
              data-settings={Boolean(settings)}
            >
              <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] border-r md:block">
                <ScrollArea className="h-full">
                  <div className="p-5">
                    <Catalog pages={pages} />
                  </div>
                </ScrollArea>
              </aside>

              <main
                id="main"
                data-viewport={viewport}
                className="min-w-0 data-[viewport=mobile]:bg-muted data-[viewport=mobile]:pt-4"
              >
                <div className="mx-auto w-full max-w-[1040px] px-4 pt-6 pb-20 in-data-[viewport=mobile]:min-h-[calc(100svh-5rem)] in-data-[viewport=mobile]:max-w-[375px] in-data-[viewport=mobile]:rounded-t-3xl in-data-[viewport=mobile]:bg-background in-data-[viewport=mobile]:px-4 md:px-8">
                  {children}
                </div>
              </main>

              {settings && (
                <aside
                  aria-label="Settings"
                  className="sticky top-16 hidden h-[calc(100svh-4rem)] border-l xl:block"
                >
                  <ScrollArea className="h-full">
                    <div className="p-5">
                      <Controls {...settings} />
                    </div>
                  </ScrollArea>
                </aside>
              )}
            </div>

            {settings && (
              <Button
                className="fixed right-4 bottom-4 z-20 shadow-lg xl:hidden"
                onClick={() => setSettingsOpen(true)}
              >
                <SlidersHorizontalIcon />
                Settings
              </Button>
            )}

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetContent side="left" className="w-[300px] p-0">
                <SheetHeader>
                  <SheetTitle>Catalog</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100svh-5rem)]">
                  <div className="px-4 pb-6">
                    <Catalog pages={pages} />
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <Sheet
              open={settingsOpen && Boolean(settings)}
              onOpenChange={setSettingsOpen}
            >
              <SheetContent side="bottom" className="max-h-[80svh] p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Settings</SheetTitle>
                </SheetHeader>
                <ScrollArea className="max-h-[80svh]">
                  <div className="p-5">
                    {settings && <Controls {...settings} />}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </ViewportContext.Provider>
      </SettingsContext.Provider>
    </ThemeOverridesContext.Provider>
  )
}
