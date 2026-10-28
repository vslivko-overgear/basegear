"use client"

import type { Story } from "@/showcase/types"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/styles/radix-baseui/ui/alert-dialog"
import { Button } from "@/styles/radix-baseui/ui/button"

export const alertDialog: Story = {
  args: {
    size: "default",
    title: "Cancel the order?",
    description: "The booster stops and the payment returns within 3 days.",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    title: { control: "text" },
    description: { control: "text" },
  },
  render: ({ size, title, description }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Cancel order</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep</AlertDialogCancel>
          <AlertDialogAction>Cancel order</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  code: ({ size, title, description }) =>
    `<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button variant="destructive">Cancel order</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent size="${size}">\n    <AlertDialogHeader>\n      <AlertDialogTitle>${title}</AlertDialogTitle>\n      <AlertDialogDescription>${description}</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Keep</AlertDialogCancel>\n      <AlertDialogAction>Cancel order</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
}
