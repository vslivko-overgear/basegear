import { Calendar } from "@/styles/radix-baseui/ui/calendar"
import { Card, CardContent } from "@/styles/radix-baseui/ui/card"

export function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  )
}
