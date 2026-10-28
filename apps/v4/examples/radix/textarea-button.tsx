import { Button } from "@/styles/radix-baseui/ui/button"
import { Textarea } from "@/styles/radix-baseui/ui/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
