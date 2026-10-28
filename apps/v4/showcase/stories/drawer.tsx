"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/styles/radix-baseui/ui/drawer"

export const drawer: Story = {
  args: {
    direction: "bottom",
    title: "Choose a region",
    description: "Prices and start times depend on the region.",
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["bottom", "top", "left", "right"],
    },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ direction, title, description }) => (
    <Drawer key={direction} direction={direction}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Europe</Button>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  code: ({ direction, title, description }) =>
    `<Drawer direction="${direction}">\n  <DrawerTrigger asChild>\n    <Button variant="secondary">Open drawer</Button>\n  </DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>${title}</DrawerTitle>\n      <DrawerDescription>${description}</DrawerDescription>\n    </DrawerHeader>\n  </DrawerContent>\n</Drawer>`,
}
