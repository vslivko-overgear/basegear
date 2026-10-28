"use client"

import * as React from "react"
import { format } from "date-fns"

import { Button } from "@/styles/radix-baseui/ui/button"
import { Calendar } from "@/styles/radix-baseui/ui/calendar"
import { Field, FieldLabel } from "@/styles/radix-baseui/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/radix-baseui/ui/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
