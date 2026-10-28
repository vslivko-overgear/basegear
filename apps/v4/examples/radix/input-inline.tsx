import { Button } from "@/styles/radix-baseui/ui/button"
import { Field } from "@/styles/radix-baseui/ui/field"
import { Input } from "@/styles/radix-baseui/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
