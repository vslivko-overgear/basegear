"use client"

import * as React from "react"

import {
  CALLS,
  contactOf,
  CONTACTS,
  ME,
  type Contact,
} from "@/registry/bases/aria/blocks/messenger-01/components/data"
import {
  BackIcon,
  BellIcon,
  ChatsIcon,
  ChevronRightIcon,
  HelpIcon,
  LockIcon,
  NewChatIcon,
  PaletteIcon,
  PhoneIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon,
  PhoneOutgoingIcon,
  SearchIcon,
  UserIcon,
} from "@/registry/bases/aria/blocks/messenger-01/components/icons"
import { PersonAvatar } from "@/registry/bases/aria/blocks/messenger-01/components/person-avatar"
import { pressable } from "@/registry/bases/aria/blocks/messenger-01/components/pressable"
import { Badge } from "@/registry/bases/aria/ui/badge"
import { Button } from "@/registry/bases/aria/ui/button"
import { Card, CardContent } from "@/registry/bases/aria/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/aria/ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/aria/ui/item"
import { Stack } from "@/registry/bases/aria/ui/layout"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/registry/bases/aria/ui/navbar"
import { Switch } from "@/registry/bases/aria/ui/switch"

export type Settings = {
  notifyMessages: boolean
  notifyGroups: boolean
  previews: boolean
  lastSeen: boolean
  readReceipts: boolean
  offline: boolean
}

export const DEFAULT_SETTINGS: Settings = {
  notifyMessages: true,
  notifyGroups: true,
  previews: true,
  lastSeen: true,
  readReceipts: true,
  offline: false,
}

export const SETTINGS_PAGES = [
  {
    key: "profile",
    label: "Profile",
    hint: "Name, bio, phone",
    icon: UserIcon,
  },
  {
    key: "notifications",
    label: "Notifications",
    hint: "Sounds, previews",
    icon: BellIcon,
  },
  {
    key: "privacy",
    label: "Privacy and security",
    hint: "Last seen, read receipts",
    icon: LockIcon,
  },
  {
    key: "appearance",
    label: "Appearance",
    hint: "Theme, text size",
    icon: PaletteIcon,
  },
  { key: "help", label: "Help", hint: "FAQ and feedback", icon: HelpIcon },
] as const

export type SettingsPageKey = (typeof SETTINGS_PAGES)[number]["key"]

export function CallsSection({
  onCall,
}: {
  onCall: (contact: Contact) => void
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Navbar>
        <NavbarStart />
        <NavbarHeading>
          <NavbarTitle>Calls</NavbarTitle>
          <NavbarSubtitle>2 missed</NavbarSubtitle>
        </NavbarHeading>
      </Navbar>
      <ItemGroup className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        {CALLS.map((call) => {
          const contact = contactOf(call.who)
          if (!contact) {
            return null
          }
          const Icon =
            call.kind === "incoming"
              ? PhoneIncomingIcon
              : call.kind === "outgoing"
                ? PhoneOutgoingIcon
                : PhoneMissedIcon
          return (
            <Item key={call.id} size="sm">
              <ItemMedia>
                <PersonAvatar id={contact.id} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle
                  className={
                    call.kind === "missed" ? "text-destructive" : undefined
                  }
                >
                  {contact.name}
                </ItemTitle>
                <ItemDescription className="flex items-center gap-1.5">
                  <Icon className="size-3.5" />
                  {call.kind === "missed" ? "Missed" : call.length}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Call ${contact.name}`}
                  onPress={() => onCall(contact)}
                >
                  <PhoneIcon />
                </Button>
              </ItemActions>
            </Item>
          )
        })}
      </ItemGroup>
    </div>
  )
}

export function ContactsSection({
  activeId,
  onOpen,
  onNew,
}: {
  activeId: string | null
  onOpen: (id: string) => void
  onNew: () => void
}) {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const shown = CONTACTS.filter(
    (contact) => !q || contact.name.toLowerCase().includes(q)
  ).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Navbar>
        <NavbarStart />
        <NavbarHeading>
          <NavbarTitle>Contacts</NavbarTitle>
          <NavbarSubtitle>{CONTACTS.length} people</NavbarSubtitle>
        </NavbarHeading>
        <NavbarEnd>
          <Button
            variant="ghost"
            size="icon"
            aria-label="New chat"
            onPress={onNew}
          >
            <NewChatIcon />
          </Button>
        </NavbarEnd>
      </Navbar>
      <div className="px-4 pb-2">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search contacts"
            aria-label="Search contacts"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
      </div>
      <ItemGroup className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        {shown.map((contact) => (
          <Item
            key={contact.id}
            size="sm"
            variant={contact.id === activeId ? "muted" : "default"}
            {...pressable(() => onOpen(contact.id))}
            className="w-full text-left"
          >
            <ItemMedia>
              <PersonAvatar id={contact.id} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{contact.name}</ItemTitle>
              <ItemDescription>{contact.seen}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

export function SettingsSection({
  activeKey,
  onOpen,
}: {
  activeKey: SettingsPageKey | null
  onOpen: (key: SettingsPageKey) => void
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Navbar>
        <NavbarStart />
        <NavbarHeading>
          <NavbarTitle>Settings</NavbarTitle>
        </NavbarHeading>
      </Navbar>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        <Item size="sm" className="mb-2">
          <ItemMedia>
            <PersonAvatar name={ME.name} size="lg" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{ME.name}</ItemTitle>
            <ItemDescription>{ME.bio}</ItemDescription>
          </ItemContent>
        </Item>
        <ItemGroup>
          {SETTINGS_PAGES.map((page) => (
            <Item
              key={page.key}
              size="sm"
              variant={page.key === activeKey ? "muted" : "default"}
              {...pressable(() => onOpen(page.key))}
              className="w-full text-left"
            >
              <ItemMedia variant="icon">
                <page.icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{page.label}</ItemTitle>
                <ItemDescription>{page.hint}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4 text-muted-foreground" />
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </div>
  )
}

function PaneNavbar({
  title,
  subtitle,
  showBack,
  onBack,
}: {
  title: string
  subtitle?: string
  showBack: boolean
  onBack: () => void
}) {
  return (
    <Navbar className="border-b">
      <NavbarStart>
        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Back"
            onPress={onBack}
          >
            <BackIcon />
          </Button>
        )}
      </NavbarStart>
      <NavbarHeading>
        <NavbarTitle>{title}</NavbarTitle>
        {subtitle && <NavbarSubtitle>{subtitle}</NavbarSubtitle>}
      </NavbarHeading>
      <NavbarEnd />
    </Navbar>
  )
}

export function ContactPane({
  id,
  showBack,
  onBack,
  onMessage,
  onCall,
}: {
  id: string
  showBack: boolean
  onBack: () => void
  onMessage: (id: string) => void
  onCall: (contact: Contact) => void
}) {
  const contact = contactOf(id)
  if (!contact) {
    return null
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <PaneNavbar
        title={contact.name}
        subtitle={contact.seen}
        showBack={showBack}
        onBack={onBack}
      />
      <div className="flex flex-1 justify-center overflow-y-auto p-6">
        <Card className="h-fit w-full max-w-md">
          <CardContent>
            <Stack align="center" gap={3} className="text-center">
              <PersonAvatar id={contact.id} size="lg" className="size-20" />
              <div className="text-xl font-semibold">{contact.name}</div>
              <div className="text-muted-foreground">{contact.bio}</div>
              <Badge
                variant={
                  contact.presence === "online"
                    ? "default"
                    : contact.presence === "busy"
                      ? "destructive"
                      : "secondary"
                }
              >
                {contact.presence === "online"
                  ? "Online"
                  : contact.presence === "busy"
                    ? "Busy"
                    : "Offline"}
              </Badge>
              <Stack direction="row" gap={2} className="mt-2">
                <Button onPress={() => onMessage(contact.id)}>
                  <ChatsIcon data-icon="inline-start" />
                  Message
                </Button>
                <Button variant="secondary" onPress={() => onCall(contact)}>
                  <PhoneIcon data-icon="inline-start" />
                  Call
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const SETTING_ROWS: Partial<
  Record<
    SettingsPageKey,
    { key: keyof Settings; label: string; hint: string }[]
  >
> = {
  notifications: [
    {
      key: "notifyMessages",
      label: "Private chats",
      hint: "Notify about new messages",
    },
    {
      key: "notifyGroups",
      label: "Groups",
      hint: "Notify about group messages",
    },
    {
      key: "previews",
      label: "Message preview",
      hint: "Show the text in the notification",
    },
  ],
  privacy: [
    { key: "lastSeen", label: "Last seen", hint: "Show when you were online" },
    {
      key: "readReceipts",
      label: "Read receipts",
      hint: "Show that you read messages",
    },
    {
      key: "offline",
      label: "Offline mode",
      hint: "Pause replies and keep messages on this device",
    },
  ],
}

export function SettingsPane({
  pageKey,
  settings,
  onChange,
  showBack,
  onBack,
}: {
  pageKey: SettingsPageKey
  settings: Settings
  onChange: (patch: Partial<Settings>) => void
  showBack: boolean
  onBack: () => void
}) {
  const page = SETTINGS_PAGES.find((p) => p.key === pageKey)
  const rows = SETTING_ROWS[pageKey]

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <PaneNavbar
        title={page?.label ?? ""}
        showBack={showBack}
        onBack={onBack}
      />
      <div className="flex flex-1 justify-center overflow-y-auto p-6">
        <Card className="h-fit w-full max-w-lg">
          <CardContent>
            {pageKey === "profile" ? (
              <ItemGroup>
                {[
                  ["Name", ME.name],
                  ["Bio", ME.bio],
                  ["Phone", ME.phone],
                ].map(([label, value]) => (
                  <Item key={label} size="sm">
                    <ItemContent>
                      <ItemDescription>{label}</ItemDescription>
                      <ItemTitle>{value}</ItemTitle>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            ) : rows ? (
              <ItemGroup>
                {rows.map((row) => (
                  <Item key={row.key} size="sm">
                    <ItemContent>
                      <ItemTitle>{row.label}</ItemTitle>
                      <ItemDescription>{row.hint}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Switch
                        aria-label={row.label}
                        isSelected={settings[row.key]}
                        onChange={(checked) => onChange({ [row.key]: checked })}
                      />
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            ) : (
              <p className="text-muted-foreground">
                This page is not part of the demo.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
