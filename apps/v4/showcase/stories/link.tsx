"use client"

import type { Story } from "@/showcase/types"

import { Link } from "@/styles/radix-baseui/ui/link"

export const link: Story = {
  args: { children: "Refund policy", underline: "hover", external: false },
  argTypes: {
    children: { control: "text", label: "label" },
    underline: { control: "radio", options: ["hover", "always", "none"] },
    external: { control: "boolean" },
  },
  render: ({ children, underline, external }) => (
    <p className="text-sm">
      Read our{" "}
      <Link href="#" underline={underline} external={external}>
        {children}
      </Link>{" "}
      before you order.
    </p>
  ),
  code: ({ children, underline, external }) =>
    `<Link href="/refund" underline="${underline}"${external ? " external" : ""}>\n  ${children}\n</Link>`,
}
