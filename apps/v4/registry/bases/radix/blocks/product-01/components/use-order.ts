"use client"

import * as React from "react"

import {
  EXTRAS,
  METHODS,
  NUMBERS,
  PER_LEVEL,
} from "@/registry/bases/radix/blocks/product-01/components/data"

export const MIN_LEVEL = 1
export const MAX_LEVEL = 90

export const money = (value: number) => `$${value.toFixed(2)}`

/** One state for the order form and the summary: the price and the time follow every choice. */
export function useOrder() {
  const [region, setRegion] = React.useState("us")
  const [range, setRange] = React.useState<[number, number]>([80, 90])
  const [express, setExpress] = React.useState(false)
  const [characters, setCharacters] = React.useState("0")
  const [method, setMethod] = React.useState("piloted")
  const [extras, setExtras] = React.useState<Record<string, boolean>>({})
  const [from, to] = range

  const price = React.useMemo(() => {
    const methodSurcharge = METHODS.find(([id]) => id === method)?.[2] ?? 0
    let total = (to - from) * PER_LEVEL
    total *= 1 + (express ? 0.3 : 0) + methodSurcharge / 100
    total *= 1 + (NUMBERS[Number(characters)]?.[1] ?? 0) / 100
    for (const [id, , cost] of EXTRAS) {
      if (extras[id]) {
        total += cost
      }
    }
    return total
  }, [from, to, express, characters, method, extras])

  const minutes = Math.round(
    (((to - from) * 37.5) / (express ? 1.5 : 1)) *
      (1 + Number(characters) * 0.5)
  )
  const options = (express ? 1 : 0) + EXTRAS.filter(([id]) => extras[id]).length

  const setLevels = (nextFrom: number, nextTo: number) => {
    const a = Math.max(MIN_LEVEL, Math.min(nextFrom, MAX_LEVEL - 1))
    const b = Math.min(MAX_LEVEL, Math.max(nextTo, a + 1))
    setRange([a, b])
  }

  return {
    region,
    setRegion,
    from,
    to,
    setLevels,
    express,
    setExpress,
    characters,
    setCharacters,
    method,
    setMethod,
    extras,
    setExtra: (id: string, on: boolean) =>
      setExtras((current) => ({ ...current, [id]: on })),
    price,
    duration: `${Math.floor(minutes / 60)} h ${minutes % 60} min`,
    options,
  }
}

export type Order = ReturnType<typeof useOrder>
