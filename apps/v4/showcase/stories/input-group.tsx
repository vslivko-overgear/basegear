"use client"

import type { Story } from "@/showcase/types"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/styles/radix-baseui/ui/input-group"

export const inputGroup: Story = {
  args: {
    placeholder: "Search games",
    icon: true,
    suffix: "12 results",
    button: false,
  },
  argTypes: {
    placeholder: { control: "text" },
    icon: { control: "boolean", label: "start icon" },
    suffix: { control: "text", label: "end text" },
    button: { control: "boolean", label: "end button" },
  },
  render: ({ placeholder, icon, suffix, button }) => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder={placeholder} />
      {icon && (
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      )}
      {(suffix || button) && (
        <InputGroupAddon align="inline-end">
          {suffix && <InputGroupText>{suffix}</InputGroupText>}
          {button && <InputGroupButton size="xs">Search</InputGroupButton>}
        </InputGroupAddon>
      )}
    </InputGroup>
  ),
  code: ({ placeholder, icon, suffix, button }) =>
    `<InputGroup>\n  <InputGroupInput placeholder="${placeholder}" />${icon ? "\n  <InputGroupAddon>\n    <SearchIcon />\n  </InputGroupAddon>" : ""}${suffix || button ? `\n  <InputGroupAddon align="inline-end">${suffix ? `\n    <InputGroupText>${suffix}</InputGroupText>` : ""}${button ? '\n    <InputGroupButton size="xs">Search</InputGroupButton>' : ""}\n  </InputGroupAddon>` : ""}\n</InputGroup>`,
}
