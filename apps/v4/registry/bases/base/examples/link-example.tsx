import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import { Link } from "@/registry/bases/base/ui/link"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function LinkExample() {
  return (
    <ExampleWrapper>
      <LinkExampleUnderline />
    </ExampleWrapper>
  )
}

function LinkExampleUnderline() {
  return (
    <Example title="Underline">
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
          <IconPlaceholder
            lucide="ExternalLinkIcon"
            tabler="IconExternalLink"
            hugeicons="LinkSquare02Icon"
            phosphor="ArrowSquareOutIcon"
            remixicon="RiExternalLinkLine"
          />
        </Link>
      </div>
    </Example>
  )
}
