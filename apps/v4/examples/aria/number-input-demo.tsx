import { Field, FieldLabel } from "@/styles/aria-nova/ui/field"
import { NumberInput } from "@/styles/aria-nova/ui/number-input"

export function NumberInputDemo() {
  return (
    <Field className="max-w-48">
      <FieldLabel htmlFor="keys">Keys</FieldLabel>
      <NumberInput id="keys" defaultValue={4} min={1} max={20} />
    </Field>
  )
}
