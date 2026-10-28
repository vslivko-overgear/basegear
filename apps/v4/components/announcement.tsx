import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/styles/radix-baseui/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-muted">
      <Link href="/docs/components/radix/segmented-control">
        baseui components on Radix <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
