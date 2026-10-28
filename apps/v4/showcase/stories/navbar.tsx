"use client"

import type { Story } from "@/showcase/types"
import { ChevronLeftIcon, MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/styles/radix-baseui/ui/navbar"

export const navbar: Story = {
  args: { title: "Maya Chen", subtitle: "online", back: true, action: true },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    back: { control: "boolean", label: "back button" },
    action: { control: "boolean", label: "end action" },
  },
  render: ({ title, subtitle, back, action }) => (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border">
      <Navbar>
        <NavbarStart>
          {back && (
            <Button variant="ghost" size="icon" aria-label="Back">
              <ChevronLeftIcon />
            </Button>
          )}
        </NavbarStart>
        <NavbarHeading>
          <NavbarTitle>{title}</NavbarTitle>
          {subtitle && <NavbarSubtitle>{subtitle}</NavbarSubtitle>}
        </NavbarHeading>
        <NavbarEnd>
          {action && (
            <Button variant="ghost" size="icon" aria-label="More">
              <MoreHorizontalIcon />
            </Button>
          )}
        </NavbarEnd>
      </Navbar>
    </div>
  ),
  code: ({ title, subtitle, back, action }) =>
    `<Navbar>\n  <NavbarStart>${back ? '\n    <Button variant="ghost" size="icon" aria-label="Back">\n      <ChevronLeftIcon />\n    </Button>\n  ' : ""}</NavbarStart>\n  <NavbarHeading>\n    <NavbarTitle>${title}</NavbarTitle>${subtitle ? `\n    <NavbarSubtitle>${subtitle}</NavbarSubtitle>` : ""}\n  </NavbarHeading>\n  <NavbarEnd>${action ? '\n    <Button variant="ghost" size="icon" aria-label="More">\n      <MoreHorizontalIcon />\n    </Button>\n  ' : ""}</NavbarEnd>\n</Navbar>`,
}
