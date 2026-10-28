import { RatingDisplay } from "@/styles/radix-baseui/ui/rating"

export function RatingDisplayDemo() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-2">
        <RatingDisplay value={4.6} size="sm" />
        <span className="text-sm font-medium">4.6</span>
        <span className="text-sm text-muted-foreground">(1,284 reviews)</span>
      </div>
      <RatingDisplay value={3.5} />
      <RatingDisplay value={5} size="lg" />
    </div>
  )
}
