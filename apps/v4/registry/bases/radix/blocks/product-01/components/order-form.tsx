"use client"

import {
  EXTRAS,
  METHODS,
  NUMBERS,
} from "@/registry/bases/radix/blocks/product-01/components/data"
import {
  ArrowRightIcon,
  HelpIcon,
} from "@/registry/bases/radix/blocks/product-01/components/icons"
import {
  MAX_LEVEL,
  MIN_LEVEL,
  money,
  type Order,
} from "@/registry/bases/radix/blocks/product-01/components/use-order"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card"
import { Checkbox } from "@/registry/bases/radix/ui/checkbox"
import { Label } from "@/registry/bases/radix/ui/label"
import { Grid } from "@/registry/bases/radix/ui/layout"
import { NumberInput } from "@/registry/bases/radix/ui/number-input"
import {
  SegmentedControl,
  SegmentedControlCounter,
  SegmentedControlItem,
} from "@/registry/bases/radix/ui/segmented-control"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/radix/ui/select"
import { Slider } from "@/registry/bases/radix/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/radix/ui/tooltip"

const characterItems = NUMBERS.map(([label, add], index) => ({
  value: String(index),
  label: add ? `${label} +${add}%` : label,
}))

export function Help({ text }: { text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="Help"
          className="inline-flex size-5 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
        >
          <HelpIcon className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-64">{text}</TooltipContent>
    </Tooltip>
  )
}

export function OrderForm({ order }: { order: Order }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configure your boost</CardTitle>
      </CardHeader>
      <CardContent>
        <Grid columns="repeat(auto-fit, minmax(16rem, 1fr))" gap={5}>
          <div className="flex flex-col gap-2">
            <Label>Region</Label>
            <SegmentedControl
              aria-label="Region"
              value={order.region}
              onValueChange={(value) => order.setRegion(String(value))}
              className="w-full *:flex-1"
            >
              <SegmentedControlItem value="eu">EU</SegmentedControlItem>
              <SegmentedControlItem value="us">US</SegmentedControlItem>
            </SegmentedControl>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Boost method</Label>
            <SegmentedControl
              aria-label="Boost method"
              value={order.method}
              onValueChange={(value) => order.setMethod(String(value))}
              className="w-full *:flex-1"
            >
              {METHODS.map(([value, label, add]) => (
                <SegmentedControlItem key={value} value={value}>
                  {label}
                  {add > 0 && (
                    <SegmentedControlCounter>+{add}%</SegmentedControlCounter>
                  )}
                </SegmentedControlItem>
              ))}
            </SegmentedControl>
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <Label>Leveling range</Label>
            <div className="flex flex-wrap items-center gap-3">
              <NumberInput
                aria-label="Level from"
                className="w-36"
                min={MIN_LEVEL}
                max={MAX_LEVEL - 1}
                value={order.from}
                onValueChange={(value) =>
                  order.setLevels(value ?? MIN_LEVEL, order.to)
                }
              />
              <ArrowRightIcon className="size-5 text-muted-foreground" />
              <NumberInput
                aria-label="Level to"
                className="w-36"
                min={MIN_LEVEL + 1}
                max={MAX_LEVEL}
                value={order.to}
                onValueChange={(value) =>
                  order.setLevels(order.from, value ?? MAX_LEVEL)
                }
              />
              <Slider
                aria-label="Leveling range"
                className="min-w-48 flex-1"
                min={MIN_LEVEL}
                max={MAX_LEVEL}
                value={[order.from, order.to]}
                onValueChange={([a, b]) => order.setLevels(a, b)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="gap-1">
              Number of characters
              <Help text="Level up to 5 characters and save up to 20%" />
            </Label>
            <Select
              value={order.characters}
              onValueChange={(value) => order.setCharacters(String(value))}
            >
              <SelectTrigger className="w-full" aria-label="Characters">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {characterItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <label className="flex w-full items-center gap-3 text-sm">
              <Checkbox
                checked={order.express}
                onCheckedChange={(checked) =>
                  order.setExpress(checked === true)
                }
              />
              <span className="flex-1">⚡ Express start & completion</span>
              <span className="text-muted-foreground tabular-nums">+30%</span>
              <Help text="A booster starts at once and works on your order in a priority queue" />
            </label>
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <Label>Additional options</Label>
            <Grid columns="repeat(auto-fit, minmax(16rem, 1fr))" gap={3}>
              {EXTRAS.map(([id, label, cost, was]) => (
                <label key={id} className="flex items-center gap-3 text-sm">
                  <Checkbox
                    checked={!!order.extras[id]}
                    onCheckedChange={(checked) =>
                      order.setExtra(id, checked === true)
                    }
                  />
                  <span className="flex-1">{label}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {was && <s className="mr-1">{money(was)}</s>}
                    {was ? money(cost) : `+${money(cost)}`}
                  </span>
                </label>
              ))}
            </Grid>
          </div>
        </Grid>
      </CardContent>
    </Card>
  )
}
