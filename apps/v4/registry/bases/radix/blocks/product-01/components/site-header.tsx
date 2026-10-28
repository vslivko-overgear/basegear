"use client"

import * as React from "react"

import { CATEGORIES } from "@/registry/bases/radix/blocks/product-01/components/data"
import {
  CartIcon,
  ChevronDownIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/registry/bases/radix/blocks/product-01/components/icons"
import { Button } from "@/registry/bases/radix/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/radix/ui/collapsible"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/radix/ui/input-group"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/radix/ui/sheet"

export function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 font-bold"
      aria-label="overgear"
    >
      <svg viewBox="0 0 32 36" className="size-7" aria-hidden="true">
        <path
          d="M16 1 2 6v11c0 9 6 15 14 18 8-3 14-9 14-18V6L16 1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        <path
          d="M16 9l-7 3v6c0 5 3 8 7 10 4-2 7-5 7-10v-6l-7-3Z"
          className="fill-primary"
        />
      </svg>
      <span className="text-xl tracking-tight">overgear</span>
    </a>
  )
}

export function Categories({ onPick }: { onPick?: () => void }) {
  return (
    <nav aria-label="Categories" className="flex flex-col gap-0.5">
      <div className="px-3 pb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        Categories
      </div>
      {CATEGORIES.map((category) =>
        category.items ? (
          <Collapsible key={category.label} defaultOpen={category.open}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="group/category w-full justify-between"
              >
                {category.label}
                <ChevronDownIcon className="transition-transform group-data-[state=open]/category:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-0.5 py-1 pl-3">
              {category.items.map((item) => (
                <Button
                  key={item}
                  variant={category.active === item ? "secondary" : "ghost"}
                  size="sm"
                  className="justify-start"
                  onClick={onPick}
                >
                  {item}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Button
            key={category.label}
            variant="ghost"
            className="justify-start"
            onClick={onPick}
          >
            {category.label}
          </Button>
        )
      )}
    </nav>
  )
}

export function SiteHeader() {
  const [menu, setMenu] = React.useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
      <Button
        variant="secondary"
        size="icon"
        aria-label="Categories"
        className="xl:hidden"
        onClick={() => setMenu(true)}
      >
        <MenuIcon />
      </Button>
      <Logo />
      <InputGroup className="mx-auto max-w-2xl flex-1 max-sm:hidden">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search" aria-label="Search" />
      </InputGroup>
      <nav aria-label="Account" className="ml-auto flex items-center gap-1">
        {[
          { label: "Wishlist", icon: HeartIcon },
          { label: "Cart", icon: CartIcon },
          { label: "Sign In", icon: UserIcon },
        ].map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="ghost"
            className="h-auto flex-col gap-0.5 px-2 py-1 text-xs"
          >
            <Icon />
            {label}
          </Button>
        ))}
      </nav>
      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent side="left" className="gap-0">
          <SheetHeader>
            <SheetTitle>Catalog</SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto px-2 pb-6">
            <Categories onPick={() => setMenu(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
