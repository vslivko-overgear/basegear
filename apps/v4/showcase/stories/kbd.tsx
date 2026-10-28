"use client"

import type { Story } from "@/showcase/types"

import { Kbd, KbdGroup } from "@/styles/radix-baseui/ui/kbd"

export const kbd: Story = {
  args: { keys: "⌘ K", group: true },
  argTypes: {
    keys: { control: "text", label: "keys (space-separated)" },
    group: { control: "boolean" },
  },
  render: ({ keys, group }) => {
    const list = String(keys).split(" ").filter(Boolean)
    return group ? (
      <KbdGroup>
        {list.map((key, i) => (
          <Kbd key={i}>{key}</Kbd>
        ))}
      </KbdGroup>
    ) : (
      <Kbd>{list[0]}</Kbd>
    )
  },
  code: ({ keys }) =>
    `<KbdGroup>\n${String(keys)
      .split(" ")
      .filter(Boolean)
      .map((k) => `  <Kbd>${k}</Kbd>`)
      .join("\n")}\n</KbdGroup>`,
}
