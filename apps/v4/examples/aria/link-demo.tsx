import { ExternalLinkIcon } from "lucide-react"

import { Link } from "@/styles/aria-nova/ui/link"

export function LinkDemo() {
  return (
    <div className="flex flex-col items-start gap-3 text-sm">
      <p>
        Read the <Link href="#">terms of service</Link> before you order.
      </p>
      <Link href="#" underline="always">
        Always underlined
      </Link>
      <Link href="#" underline="none">
        Never underlined
      </Link>
      <Link href="https://overgear.com" external>
        overgear.com
        <ExternalLinkIcon />
      </Link>
    </div>
  )
}
