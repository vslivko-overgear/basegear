import { Button } from "@/styles/radix-baseui/ui/button"
import { ButtonGroup } from "@/styles/radix-baseui/ui/button-group"
import { Field, FieldLabel } from "@/styles/radix-baseui/ui/field"
import { Input } from "@/styles/radix-baseui/ui/input"

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
