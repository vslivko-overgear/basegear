import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/aria/components/example"
import { Field, FieldLabel } from "@/registry/bases/aria/ui/field"
import { NumberInput } from "@/registry/bases/aria/ui/number-input"

export default function NumberInputExample() {
  return (
    <ExampleWrapper>
      <NumberInputExampleBasic />
    </ExampleWrapper>
  )
}

function NumberInputExampleBasic() {
  return (
    <Example title="Basic">
      <Field className="max-w-48">
        <FieldLabel htmlFor="keys">Keys</FieldLabel>
        <NumberInput id="keys" defaultValue={4} min={1} max={20} />
      </Field>
    </Example>
  )
}
