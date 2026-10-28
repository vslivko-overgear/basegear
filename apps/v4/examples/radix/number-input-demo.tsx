import { Field, FieldLabel } from "@/styles/radix-baseui/ui/field"
import { NumberInput } from "@/styles/radix-baseui/ui/number-input"

export function NumberInputDemo() {
  return (
    <Field className="max-w-48">
      <FieldLabel htmlFor="keys">Keys</FieldLabel>
      <NumberInput id="keys" defaultValue={4} min={1} max={20} />
    </Field>
  )
}
