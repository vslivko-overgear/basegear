"use client"

import type { Story } from "@/showcase/types"

import { Field, FieldLabel } from "@/styles/radix-baseui/ui/field"
import { Textarea } from "@/styles/radix-baseui/ui/textarea"

export const textarea: Story = {
  args: {
    label: "Comment to the order",
    placeholder: "Preferred play time, character name…",
    invalid: false,
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, placeholder, invalid, disabled }) => (
    <Field className="w-full max-w-sm" data-invalid={invalid || undefined}>
      <FieldLabel htmlFor="playground-textarea">{label}</FieldLabel>
      <Textarea
        id="playground-textarea"
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    </Field>
  ),
  code: ({ label, placeholder, invalid, disabled }) =>
    `<Field>\n  <FieldLabel htmlFor="comment">${label}</FieldLabel>\n  <Textarea id="comment" placeholder="${placeholder}"${invalid ? " aria-invalid" : ""}${disabled ? " disabled" : ""} />\n</Field>`,
}
