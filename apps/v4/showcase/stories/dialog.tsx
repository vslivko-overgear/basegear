"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/radix-baseui/ui/dialog"

export const dialog: Story = {
  args: {
    title: "Add to cart?",
    description: "Mythic+ Dungeon Boost, Europe, piloted. $24.99.",
    closeButton: true,
    footer: true,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    closeButton: { control: "boolean", label: "close button" },
    footer: { control: "boolean" },
  },
  render: ({ title, description, closeButton, footer }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={closeButton}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {footer && (
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button>Add to cart</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  ),
  code: ({ title, description, closeButton, footer }) =>
    `<Dialog>\n  <DialogTrigger asChild>\n    <Button>Open dialog</Button>\n  </DialogTrigger>\n  <DialogContent${closeButton ? "" : " showCloseButton={false}"}>\n    <DialogHeader>\n      <DialogTitle>${title}</DialogTitle>\n      <DialogDescription>${description}</DialogDescription>\n    </DialogHeader>${footer ? '\n    <DialogFooter>\n      <DialogClose asChild>\n        <Button variant="secondary">Cancel</Button>\n      </DialogClose>\n      <Button>Add to cart</Button>\n    </DialogFooter>' : ""}\n  </DialogContent>\n</Dialog>`,
}
