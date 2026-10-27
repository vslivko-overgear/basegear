"use client"

import * as React from "react"

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Rating, RatingDisplay } from "@/registry/bases/base/ui/rating"

export default function RatingExample() {
  return (
    <ExampleWrapper>
      <RatingExampleRating />
      <RatingExampleRatingDisplay />
    </ExampleWrapper>
  )
}

function RatingExampleRating() {
  const [value, setValue] = React.useState(4)

  return (
    <Example title="Rating">
      <div className="flex flex-col items-center gap-2">
        <Rating
          value={value}
          onValueChange={setValue}
          aria-label="Rate the order"
        />
        <span className="text-sm text-muted-foreground">{value} out of 5</span>
      </div>
    </Example>
  )
}

function RatingExampleRatingDisplay() {
  return (
    <Example title="Rating Display">
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <RatingDisplay value={4.6} size="sm" />
          <span className="text-sm font-medium">4.6</span>
          <span className="text-sm text-muted-foreground">(1,284 reviews)</span>
        </div>
        <RatingDisplay value={3.5} />
        <RatingDisplay value={5} size="lg" />
      </div>
    </Example>
  )
}
