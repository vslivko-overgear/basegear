"use client"

import type { Story } from "@/showcase/types"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/radix-baseui/ui/tabs"

const TABS = [
  {
    value: "overview",
    label: "Overview",
    text: "What the boost includes and how it works.",
  },
  {
    value: "requirements",
    label: "Requirements",
    text: "Level 80, an active subscription, any class.",
  },
  {
    value: "reviews",
    label: "Reviews",
    text: "4.9 out of 5 from 2,341 players.",
  },
]

export const tabs: Story = {
  args: { variant: "default", orientation: "horizontal" },
  argTypes: {
    variant: { control: "radio", options: ["default", "line"] },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  render: ({ variant, orientation }) => (
    <Tabs
      defaultValue="overview"
      orientation={orientation}
      className="w-full max-w-md"
    >
      <TabsList variant={variant}>
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="text-sm text-muted-foreground"
        >
          {tab.text}
        </TabsContent>
      ))}
    </Tabs>
  ),
  code: ({ variant, orientation }) =>
    `<Tabs defaultValue="overview"${orientation === "vertical" ? ' orientation="vertical"' : ""}>\n  <TabsList variant="${variant}">\n${TABS.map((t) => `    <TabsTrigger value="${t.value}">${t.label}</TabsTrigger>`).join("\n")}\n  </TabsList>\n${TABS.map((t) => `  <TabsContent value="${t.value}">${t.text}</TabsContent>`).join("\n")}\n</Tabs>`,
}
