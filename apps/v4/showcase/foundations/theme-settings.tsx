"use client"

import * as React from "react"
import { Block } from "@/showcase/foundations/kit"
import { useThemeOverrides, type ThemeOverrides } from "@/showcase/shell"

import { Badge } from "@/styles/radix-baseui/ui/badge"
import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/radix-baseui/ui/card"
import { Chip, ChipGroup } from "@/styles/radix-baseui/ui/chip"
import { Input } from "@/styles/radix-baseui/ui/input"
import { Label } from "@/styles/radix-baseui/ui/label"
import { Progress } from "@/styles/radix-baseui/ui/progress"
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/styles/radix-baseui/ui/segmented-control"
import { Slider } from "@/styles/radix-baseui/ui/slider"
import { Switch } from "@/styles/radix-baseui/ui/switch"

// Brand presets: Overgear purple (the theme's own, no override) and Overgear's accent colors.
const BRANDS: { name: string; color: string | null; swatch?: string }[] = [
  { name: "Overgear", color: null, swatch: "#564fff" },
  { name: "Cyan", color: "#3cb9ff" },
  { name: "Green", color: "#5a903c" },
  { name: "Orange", color: "#ff9548" },
  { name: "Pink", color: "#e07af4" },
  { name: "Red", color: "#ff4661" },
]
const RADII = ["0rem", "0.375rem", "0.625rem", "0.75rem", "1rem", "1.25rem"]
const DEFAULT_RADIUS = "0.75rem"
const FONTS: { name: string; value: string | null }[] = [
  { name: "Inter", value: null },
  { name: "Geist", value: "var(--font-showcase-geist)" },
  { name: "System", value: "ui-sans-serif, system-ui, sans-serif" },
]
const BRAND_VARS = ["--primary", "--ring", "--sidebar-primary", "--chart-1"]
const ON_BRAND_VARS = ["--primary-foreground", "--sidebar-primary-foreground"]

/** White or near-black text, whichever reads better on the color (WCAG relative luminance). */
function onColor(hex: string) {
  const [r, g, b] = [1, 3, 5].map(
    (i) => parseInt(hex.slice(i, i + 2), 16) / 255
  )
  const lin = (v: number) =>
    v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
  return luminance > 0.4 ? "#050622" : "#ffffff"
}

function withBrand(
  overrides: ThemeOverrides,
  color: string | null
): ThemeOverrides {
  const next = { ...overrides }
  ;[...BRAND_VARS, ...ON_BRAND_VARS].forEach((name) => delete next[name])
  if (!color) return next
  BRAND_VARS.forEach((name) => (next[name] = color))
  ON_BRAND_VARS.forEach((name) => (next[name] = onColor(color)))
  return next
}

function Preview() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Mythic+ Dungeon Boost</CardTitle>
        <CardDescription>Timed key +10 with loot trading.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Hot</Badge>
          <Badge variant="secondary">Europe</Badge>
        </div>
        <SegmentedControl defaultValue="piloted" aria-label="Method">
          <SegmentedControlItem value="piloted">Piloted</SegmentedControlItem>
          <SegmentedControlItem value="self-play">
            Self-play
          </SegmentedControlItem>
        </SegmentedControl>
        <ChipGroup type="multiple" defaultValue={["express"]} size="sm">
          <Chip value="express">Express</Chip>
          <Chip value="stream">Stream</Chip>
        </ChipGroup>
        <div className="flex items-center gap-3">
          <Switch id="preview-switch" defaultChecked />
          <Label htmlFor="preview-switch">Notify me when it starts</Label>
        </div>
        <Progress value={64} aria-label="Progress" />
        <Input placeholder="Character name" aria-label="Character name" />
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to cart</Button>
        <Button variant="secondary">Details</Button>
      </CardFooter>
    </Card>
  )
}

export function ThemeSettingsPage() {
  const { overrides, setOverrides } = useThemeOverrides()
  const brand = overrides["--primary"] ?? null
  const preset =
    BRANDS.find((b) => b.color === brand)?.name ??
    (brand ? "custom" : "Overgear")
  const radius = overrides["--radius"] ?? DEFAULT_RADIUS
  const radiusIndex = Math.max(0, RADII.indexOf(radius))
  const font =
    FONTS.find((f) => f.value === (overrides["--showcase-font"] ?? null))
      ?.name ?? "Inter"

  const setVar = (name: string, value: string | null) => {
    const next = { ...overrides }
    if (value === null) delete next[name]
    else next[name] = value
    setOverrides(next)
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-8">
        <Block
          title="Brand"
          text="The color of actions and selection. Text on it switches between white and dark by contrast."
        >
          <div className="flex flex-col gap-4">
            <ChipGroup
              type="single"
              value={preset}
              onValueChange={(name) => {
                const choice = BRANDS.find((b) => b.name === name)
                if (choice) setOverrides(withBrand(overrides, choice.color))
              }}
              aria-label="Brand color"
            >
              {BRANDS.map((b) => (
                <Chip key={b.name} value={b.name}>
                  <span
                    className="size-3 rounded-full ring-1 ring-foreground/10"
                    style={{ background: b.color ?? b.swatch }}
                  />
                  {b.name}
                </Chip>
              ))}
            </ChipGroup>
            <div className="flex max-w-xs items-center gap-3">
              <Label htmlFor="brand-custom" className="shrink-0">
                Custom
              </Label>
              <Input
                id="brand-custom"
                type="color"
                className="h-10 w-16 cursor-pointer p-1"
                value={
                  brand && /^#[0-9a-f]{6}$/i.test(brand) ? brand : "#564fff"
                }
                onChange={(e) =>
                  setOverrides(withBrand(overrides, e.target.value))
                }
              />
            </div>
          </div>
        </Block>
        <Block
          title="Radius"
          text="One --radius drives the whole radius scale."
        >
          <div className="flex max-w-sm flex-col gap-3">
            <span className="text-sm font-semibold">
              --radius:{" "}
              <span className="font-mono text-muted-foreground">
                {RADII[radiusIndex]}
              </span>
            </span>
            <Slider
              min={0}
              max={RADII.length - 1}
              step={1}
              value={[radiusIndex]}
              onValueChange={([i]) =>
                setVar(
                  "--radius",
                  RADII[i] === DEFAULT_RADIUS ? null : RADII[i]
                )
              }
              aria-label="Radius"
            />
          </div>
        </Block>
        <Block
          title="Font"
          text="Inter is the preset's font; Overgear's TT Interphases Pro is commercial and not bundled."
        >
          <SegmentedControl
            value={font}
            onValueChange={(name) =>
              setVar(
                "--showcase-font",
                FONTS.find((f) => f.name === name)?.value ?? null
              )
            }
            aria-label="Font"
          >
            {FONTS.map((f) => (
              <SegmentedControlItem key={f.name} value={f.name}>
                {f.name}
              </SegmentedControlItem>
            ))}
          </SegmentedControl>
        </Block>
        <div>
          <Button variant="secondary" onClick={() => setOverrides({})}>
            Reset to the baseui theme
          </Button>
        </div>
      </div>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <Block
          title="Preview"
          text="Applied at once to the whole showcase and kept on this device."
        >
          <Preview />
        </Block>
      </div>
    </div>
  )
}
