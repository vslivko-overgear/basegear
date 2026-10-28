"use client"

import type { Story } from "@/showcase/types"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/radix-baseui/ui/field"
import { Input } from "@/styles/radix-baseui/ui/input"

export const input: Story = {
  args: {
    label: "Email",
    placeholder: "you@overgear.com",
    type: "email",
    description: true,
    invalid: false,
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "radio",
      options: ["text", "email", "password", "number"],
    },
    description: { control: "boolean" },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, placeholder, type, description, invalid, disabled }) => (
    <Field className="w-full max-w-sm" data-invalid={invalid || undefined}>
      <FieldLabel htmlFor="playground-input">{label}</FieldLabel>
      <Input
        id="playground-input"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
      {description && (
        <FieldDescription>We send the order status here.</FieldDescription>
      )}
    </Field>
  ),
  code: ({ label, placeholder, type, invalid, disabled }) =>
    `<Field>\n  <FieldLabel htmlFor="email">${label}</FieldLabel>\n  <Input id="email" type="${type}" placeholder="${placeholder}"${invalid ? " aria-invalid" : ""}${disabled ? " disabled" : ""} />\n</Field>`,
}
