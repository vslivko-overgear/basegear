"use client"

import type { Story } from "@/showcase/types"
import { CircleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/styles/radix-baseui/ui/alert"
import { Button } from "@/styles/radix-baseui/ui/button"

export const alert: Story = {
  args: {
    variant: "default",
    title: "Payment pending",
    description: "We will start the order once the bank confirms it.",
    icon: true,
    action: false,
  },
  argTypes: {
    variant: { control: "radio", options: ["default", "destructive"] },
    title: { control: "text" },
    description: { control: "text" },
    icon: { control: "boolean" },
    action: { control: "boolean" },
  },
  render: ({ variant, title, description, icon, action }) => (
    <Alert variant={variant} className="max-w-md">
      {icon && <CircleAlertIcon />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {action && (
        <AlertAction>
          <Button size="xs" variant="secondary">
            Details
          </Button>
        </AlertAction>
      )}
    </Alert>
  ),
  code: ({ variant, title, description, icon }) =>
    `<Alert variant="${variant}">${icon ? "\n  <CircleAlertIcon />" : ""}\n  <AlertTitle>${title}</AlertTitle>\n  <AlertDescription>${description}</AlertDescription>\n</Alert>`,
}
