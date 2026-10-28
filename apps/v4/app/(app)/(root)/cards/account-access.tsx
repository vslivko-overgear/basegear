import {
  AlertCircleIcon,
  ArrowRight01Icon,
  SquareLock02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/styles/radix-baseui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/radix-baseui/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/styles/radix-baseui/ui/field"
import { Input } from "@/styles/radix-baseui/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/radix-baseui/ui/item"

export function AccountAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Access</CardTitle>
        <CardDescription>
          Update your credentials or re-authenticate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-address">Email Address</FieldLabel>
            <Input
              id="email-address"
              type="email"
              placeholder="artist@studio.inc"
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="current-password">
                Current Password
              </FieldLabel>
              <a
                href="#"
                className="text-xs font-medium tracking-wider text-muted-foreground uppercase hover:text-foreground"
              >
                Forgot?
              </a>
            </div>
            <Input
              id="current-password"
              type="password"
              placeholder="••••••••••••••••••••••••"
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">
          <HugeiconsIcon icon={SquareLock02Icon} strokeWidth={2} />
          Update Security
        </Button>
        <Item variant="muted" asChild>
          <a href="#">
            <ItemMedia variant="icon">
              <HugeiconsIcon
                icon={AlertCircleIcon}
                className="text-destructive"
                strokeWidth={2}
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Danger Zone</ItemTitle>
              <ItemDescription className="line-clamp-1">
                Archive account and remove catalog
              </ItemDescription>
            </ItemContent>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-4"
              strokeWidth={2}
            />
          </a>
        </Item>
      </CardFooter>
    </Card>
  )
}
