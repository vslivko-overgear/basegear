"use client"

import {
  METHODS,
  WHY,
} from "@/registry/bases/radix/blocks/product-01/components/data"
import {
  CartIcon,
  ChartIcon,
  CircleCheckIcon,
  ClockIcon,
  CoinsIcon,
  HeadphonesIcon,
  LockIcon,
  ShieldCheckIcon,
} from "@/registry/bases/radix/blocks/product-01/components/icons"
import {
  money,
  type Order,
} from "@/registry/bases/radix/blocks/product-01/components/use-order"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Button } from "@/registry/bases/radix/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card"
import { Chip, ChipGroup } from "@/registry/bases/radix/ui/chip"
import { Separator } from "@/registry/bases/radix/ui/separator"

const PAYMENTS = [
  "Stripe",
  "VISA",
  "Mastercard",
  "Apple Pay",
  "G Pay",
  "PayPal",
  "Crypto",
]

const WHY_ICONS = {
  shield: ShieldCheckIcon,
  coin: CoinsIcon,
  podium: ChartIcon,
  headset: HeadphonesIcon,
}

export function OrderSummary({
  order,
  onAddToCart,
}: {
  order: Order
  onAddToCart: () => void
}) {
  const method = METHODS.find(([id]) => id === order.method)?.[1]
  const lines = [
    ["Leveling", `${order.from} → ${order.to}`],
    ["Method · region", `${method} · ${order.region.toUpperCase()}`],
    ["Options", order.options ? `${order.options} selected` : "none"],
  ]

  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-4xl font-bold tracking-tight tabular-nums">
            {money(order.price)}
          </span>
          <Badge variant="secondary">Cashback from 1%</Badge>
        </div>
        <dl className="flex flex-col gap-1.5 text-sm" aria-label="Your order">
          {lines.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <Separator />
        <div className="flex flex-col gap-1.5 text-sm">
          <span className="flex items-center gap-2">
            <ClockIcon className="size-4 text-muted-foreground" />
            <b>15 min</b> to start
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="size-4 text-muted-foreground" />
            <b>{order.duration}</b> to finish
          </span>
        </div>
        <Button size="lg" className="w-full" onClick={onAddToCart}>
          <CartIcon data-icon="inline-start" />
          Add to cart
        </Button>
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CircleCheckIcon className="size-4 text-primary" />
            100% money-back guarantee
          </span>
          <span className="flex items-center gap-2">
            <LockIcon className="size-4" />
            Secure checkout
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheckIcon className="size-4" />
            Zero-ban, manual only
          </span>
        </div>
        <ChipGroup
          aria-label="Payment methods"
          size="sm"
          type="multiple"
          value={[]}
        >
          {PAYMENTS.map((payment) => (
            <Chip key={payment} value={payment} disabled>
              {payment}
            </Chip>
          ))}
        </ChipGroup>
      </CardContent>
    </Card>
  )
}

export function WhyUs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Why players choose us</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {WHY.map(([icon, title, text]) => {
            const Icon = WHY_ICONS[icon]
            return (
              <li key={title} className="flex gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">{title}</div>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
