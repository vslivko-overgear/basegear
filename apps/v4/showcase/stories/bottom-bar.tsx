"use client"

import type { Story } from "@/showcase/types"
import {
  MessageCircleIcon,
  PhoneIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import {
  BottomBar,
  BottomBarBadge,
  BottomBarIcon,
  BottomBarItem,
  BottomBarLabel,
} from "@/styles/radix-baseui/ui/bottom-bar"

const ITEMS = [
  {
    value: "chats",
    label: "Chats",
    icon: MessageCircleIcon,
    iconName: "MessageCircleIcon",
    badge: "8",
  },
  {
    value: "calls",
    label: "Calls",
    icon: PhoneIcon,
    iconName: "PhoneIcon",
    badge: "2",
  },
  {
    value: "contacts",
    label: "Contacts",
    icon: UsersIcon,
    iconName: "UsersIcon",
    badge: undefined,
  },
  {
    value: "settings",
    label: "Settings",
    icon: SettingsIcon,
    iconName: "SettingsIcon",
    badge: undefined,
  },
]

export const bottomBar: Story = {
  args: { labels: true, badges: true },
  argTypes: {
    labels: { control: "boolean" },
    badges: { control: "boolean" },
  },
  render: ({ labels, badges }) => (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border">
      <BottomBar defaultValue="chats" aria-label="Sections">
        {ITEMS.map(({ value, label, icon: Icon, badge }) => (
          <BottomBarItem
            key={value}
            value={value}
            aria-label={labels ? undefined : label}
          >
            <BottomBarIcon>
              <Icon />
              {badges && badge && <BottomBarBadge>{badge}</BottomBarBadge>}
            </BottomBarIcon>
            {labels && <BottomBarLabel>{label}</BottomBarLabel>}
          </BottomBarItem>
        ))}
      </BottomBar>
    </div>
  ),
  code: () =>
    `<BottomBar defaultValue="chats" aria-label="Sections">\n${ITEMS.map((i) => `  <BottomBarItem value="${i.value}">\n    <BottomBarIcon>\n      <${i.iconName} />${i.badge ? `\n      <BottomBarBadge>${i.badge}</BottomBarBadge>` : ""}\n    </BottomBarIcon>\n    <BottomBarLabel>${i.label}</BottomBarLabel>\n  </BottomBarItem>`).join("\n")}\n</BottomBar>`,
}
