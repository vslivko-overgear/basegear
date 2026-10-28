"use client"

import type { Story } from "@/showcase/types"

import { Separator } from "@/styles/radix-baseui/ui/separator"

export const separator: Story = {
  args: { orientation: "horizontal" },
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  render: ({ orientation }) =>
    orientation === "vertical" ? (
      <div className="flex h-6 items-center gap-4 text-sm">
        <span>Orders</span>
        <Separator orientation="vertical" />
        <span>Payouts</span>
        <Separator orientation="vertical" />
        <span>Profile</span>
      </div>
    ) : (
      <div className="w-full max-w-sm text-sm">
        <div className="font-semibold">Mythic+ Dungeon Boost</div>
        <Separator className="my-4" />
        <div className="text-muted-foreground">
          Timed key +10 with loot trading.
        </div>
      </div>
    ),
  code: ({ orientation }) =>
    orientation === "vertical"
      ? `<Separator orientation="vertical" />`
      : `<Separator className="my-4" />`,
}
