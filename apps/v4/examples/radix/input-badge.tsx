import { Badge } from "@/styles/radix-baseui/ui/badge"
import { Field, FieldLabel } from "@/styles/radix-baseui/ui/field"
import { Input } from "@/styles/radix-baseui/ui/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
