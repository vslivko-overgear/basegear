"use client"

import type { Story } from "@/showcase/types"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/radix-baseui/ui/card"

export const card: Story = {
  args: {
    size: "default",
    title: "Mythic+ Dungeon Boost",
    description: "Timed key +10 with loot trading.",
    footer: true,
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    title: { control: "text" },
    description: { control: "text" },
    footer: { control: "boolean" },
  },
  render: ({ size, title, description, footer }) => (
    <Card size={size} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$24.99</div>
      </CardContent>
      {footer && (
        <CardFooter>
          <Button className="w-full">Add to cart</Button>
        </CardFooter>
      )}
    </Card>
  ),
  code: ({ size, title, description, footer }) =>
    `<Card size="${size}">\n  <CardHeader>\n    <CardTitle>${title}</CardTitle>\n    <CardDescription>${description}</CardDescription>\n  </CardHeader>\n  <CardContent>$24.99</CardContent>${footer ? '\n  <CardFooter>\n    <Button className="w-full">Add to cart</Button>\n  </CardFooter>' : ""}\n</Card>`,
}
