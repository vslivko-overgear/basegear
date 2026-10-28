"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/styles/radix-baseui/ui/sheet"

export const sheet: Story = {
  args: {
    side: "right",
    title: "Filters",
    description: "Narrow the catalog down to what you need.",
    closeButton: true,
  },
  argTypes: {
    side: { control: "radio", options: ["top", "right", "bottom", "left"] },
    title: { control: "text" },
    description: { control: "text" },
    closeButton: { control: "boolean", label: "close button" },
  },
  render: ({ side, title, description, closeButton }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={side} showCloseButton={closeButton}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>Show results</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  code: ({ side, title, description, closeButton }) =>
    `<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="secondary">Open sheet</Button>\n  </SheetTrigger>\n  <SheetContent side="${side}"${closeButton ? "" : " showCloseButton={false}"}>\n    <SheetHeader>\n      <SheetTitle>${title}</SheetTitle>\n      <SheetDescription>${description}</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`,
}
