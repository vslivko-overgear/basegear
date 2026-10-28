"use client"

import * as React from "react"

/** Value of a CSS custom property as the browser resolves it on the showcase root; follows theme switches. */
export function useToken(name: string) {
  const [value, setValue] = React.useState("")
  React.useEffect(() => {
    const read = () => {
      const root =
        document.querySelector("[data-showcase]") ?? document.documentElement
      setValue(getComputedStyle(root).getPropertyValue(name).trim())
    }
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })
    return () => observer.disconnect()
  }, [name])
  return value
}

export function Block({
  title,
  text,
  children,
}: {
  title: string
  text?: string
  children: React.ReactNode
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  return (
    <section id={id} data-anchor={title} className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {text && (
        <p className="mt-2 max-w-[760px] text-muted-foreground">{text}</p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  )
}
