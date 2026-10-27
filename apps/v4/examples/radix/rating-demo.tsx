"use client"

import * as React from "react"

import { Rating } from "@/styles/radix-nova/ui/rating"

export function RatingDemo() {
  const [value, setValue] = React.useState(4)

  return (
    <div className="flex flex-col items-center gap-2">
      <Rating
        value={value}
        onValueChange={setValue}
        aria-label="Rate the order"
      />
      <span className="text-sm text-muted-foreground">{value} out of 5</span>
    </div>
  )
}
