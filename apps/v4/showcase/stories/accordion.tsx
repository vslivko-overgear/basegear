"use client"

import type { Story } from "@/showcase/types"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/styles/radix-baseui/ui/accordion"

const ITEMS = [
  {
    value: "safe",
    q: "Is it safe for my account?",
    a: "Manual play only, smart VPN routes, no bots.",
  },
  {
    value: "start",
    q: "When will my order start?",
    a: "Usually within 15 minutes after payment.",
  },
  {
    value: "refund",
    q: "Can I get a refund?",
    a: "Yes, until the booster starts, and pro rata after.",
  },
]

export const accordion: Story = {
  args: { type: "single", collapsible: true },
  argTypes: {
    type: { control: "radio", options: ["single", "multiple"] },
    collapsible: { control: "boolean", label: "collapsible (single)" },
  },
  render: ({ type, collapsible }) => {
    const items = ITEMS.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.q}</AccordionTrigger>
        <AccordionContent>{item.a}</AccordionContent>
      </AccordionItem>
    ))
    return type === "multiple" ? (
      <Accordion key="multiple" type="multiple" className="w-full max-w-md">
        {items}
      </Accordion>
    ) : (
      <Accordion
        key="single"
        type="single"
        collapsible={collapsible}
        defaultValue="safe"
        className="w-full max-w-md"
      >
        {items}
      </Accordion>
    )
  },
  code: ({ type, collapsible }) =>
    `<Accordion type="${type}"${type === "single" && collapsible ? " collapsible" : ""}>\n${ITEMS.map((i) => `  <AccordionItem value="${i.value}">\n    <AccordionTrigger>${i.q}</AccordionTrigger>\n    <AccordionContent>${i.a}</AccordionContent>\n  </AccordionItem>`).join("\n")}\n</Accordion>`,
}
