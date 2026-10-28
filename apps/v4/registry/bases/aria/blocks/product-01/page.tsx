"use client"

import * as React from "react"

import { OrderForm } from "@/registry/bases/aria/blocks/product-01/components/order-form"
import {
  OrderSummary,
  WhyUs,
} from "@/registry/bases/aria/blocks/product-01/components/order-summary"
import {
  ProductInfo,
  ProductTitle,
} from "@/registry/bases/aria/blocks/product-01/components/product-info"
import { SiteFooter } from "@/registry/bases/aria/blocks/product-01/components/site-footer"
import {
  Categories,
  SiteHeader,
} from "@/registry/bases/aria/blocks/product-01/components/site-header"
import {
  money,
  useOrder,
} from "@/registry/bases/aria/blocks/product-01/components/use-order"
import {
  Banner,
  BannerClose,
  BannerDescription,
  BannerTitle,
} from "@/registry/bases/aria/ui/banner"
import { Button } from "@/registry/bases/aria/ui/button"

export default function Page() {
  const order = useOrder()
  const [added, setAdded] = React.useState<string | null>(null)

  const addToCart = () =>
    setAdded(`${order.from}–${order.to} for ${money(order.price)}`)

  return (
    <>
      <div className="min-h-svh bg-background">
        <SiteHeader />
        <div className="flex">
          <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] w-64 shrink-0 overflow-y-auto border-r p-3 xl:block">
            <Categories />
          </aside>
          <main className="min-w-0 flex-1 px-4 py-6 pb-28 md:px-6 lg:pb-10">
            {added && (
              <Banner variant="success" className="mb-6">
                <BannerTitle>Added to cart</BannerTitle>
                <BannerDescription>{added}</BannerDescription>
                <BannerClose onClick={() => setAdded(null)} />
              </Banner>
            )}
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="flex min-w-0 flex-col gap-10">
                <ProductTitle />
                <OrderForm order={order} />
                <div className="flex flex-col gap-6 lg:hidden">
                  <OrderSummary order={order} onAddToCart={addToCart} />
                  <WhyUs />
                </div>
                <ProductInfo />
              </div>
              <div className="hidden lg:block">
                <div className="sticky top-22 flex flex-col gap-6">
                  <OrderSummary order={order} onAddToCart={addToCart} />
                  <WhyUs />
                </div>
              </div>
            </div>
          </main>
        </div>
        <SiteFooter />
        <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t bg-background/95 p-3 backdrop-blur lg:hidden">
          <div className="flex min-w-0 flex-1 flex-col">
            <strong className="text-xl tabular-nums">
              {money(order.price)}
            </strong>
            <small className="truncate text-muted-foreground">
              {order.from} → {order.to} · {order.duration}
            </small>
          </div>
          <Button onPress={addToCart}>Add to cart</Button>
        </div>
      </div>
    </>
  )
}
