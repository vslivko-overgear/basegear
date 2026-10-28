"use client"

import * as React from "react"

import {
  chatTitle,
  contactOf,
  listTime,
  previewOf,
  type Chat,
} from "@/registry/bases/radix/blocks/messenger-01/components/data"
import {
  NewChatIcon,
  PinIcon,
  ReadAllIcon,
  SearchIcon,
} from "@/registry/bases/radix/blocks/messenger-01/components/icons"
import { PersonAvatar } from "@/registry/bases/radix/blocks/messenger-01/components/person-avatar"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Button } from "@/registry/bases/radix/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/radix/ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/radix/ui/item"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/registry/bases/radix/ui/navbar"
import {
  SegmentedControl,
  SegmentedControlCounter,
  SegmentedControlItem,
} from "@/registry/bases/radix/ui/segmented-control"

type Filter = "all" | "unread" | "groups"

export function ChatList({
  chats,
  typing,
  activeId,
  now,
  unread,
  onOpen,
  onNew,
  onReadAll,
}: {
  chats: Chat[]
  typing: Record<string, boolean>
  activeId: string | null
  now: number
  unread: number
  onOpen: (id: string) => void
  onNew: () => void
  onReadAll: () => void
}) {
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState<Filter>("all")

  const q = query.trim().toLowerCase()
  const shown = chats
    .filter((chat) =>
      filter === "unread"
        ? chat.unread > 0
        : filter === "groups"
          ? chat.type === "group"
          : true
    )
    .filter(
      (chat) =>
        !q ||
        chatTitle(chat).toLowerCase().includes(q) ||
        chat.messages.some((m) => m.text?.toLowerCase().includes(q))
    )
    .sort((a, b) => lastOf(b).time - lastOf(a).time)
  const pinned = shown.filter((chat) => chat.pinned)
  const rest = shown.filter((chat) => !chat.pinned)

  const row = (chat: Chat) => {
    const last = lastOf(chat)
    const author =
      last.from === "me"
        ? "You: "
        : chat.type === "group"
          ? `${contactOf(last.from)?.name.split(" ")[0]}: `
          : ""
    return (
      <Item
        key={chat.id}
        size="sm"
        variant={chat.id === activeId ? "muted" : "default"}
        asChild
        className="w-full text-left"
      >
        <button type="button" onClick={() => onOpen(chat.id)}>
          <ItemMedia>
            <PersonAvatar
              id={chat.with}
              name={chat.type === "group" ? chat.name : undefined}
              group={chat.type === "group"}
            />
          </ItemMedia>
          <ItemContent className="min-w-0">
            <ItemTitle className="w-full truncate">{chatTitle(chat)}</ItemTitle>
            <ItemDescription className="line-clamp-1">
              {typing[chat.id] ? "typing…" : `${author}${previewOf(last)}`}
            </ItemDescription>
          </ItemContent>
          <ItemActions className="flex-col items-end gap-1 self-start">
            <span className="text-xs text-muted-foreground tabular-nums">
              {listTime(last.time, now)}
            </span>
            {chat.unread > 0 ? (
              <Badge variant={chat.muted ? "secondary" : "default"}>
                {chat.unread}
              </Badge>
            ) : chat.pinned ? (
              <PinIcon
                aria-label="Pinned"
                className="size-4 text-muted-foreground"
              />
            ) : null}
          </ItemActions>
        </button>
      </Item>
    )
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Navbar>
        <NavbarStart />
        <NavbarHeading>
          <NavbarTitle>Chats</NavbarTitle>
          <NavbarSubtitle>
            {unread ? `${unread} unread` : "All caught up"}
          </NavbarSubtitle>
        </NavbarHeading>
        <NavbarEnd>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Mark all as read"
            onClick={onReadAll}
          >
            <ReadAllIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="New chat"
            onClick={onNew}
          >
            <NewChatIcon />
          </Button>
        </NavbarEnd>
      </Navbar>
      <div className="flex flex-col gap-3 px-4 pb-2">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search"
            aria-label="Search chats"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
        <SegmentedControl
          aria-label="Filter chats"
          value={filter}
          onValueChange={(value) => setFilter(value as Filter)}
          className="w-full *:flex-1"
        >
          <SegmentedControlItem value="all">All</SegmentedControlItem>
          <SegmentedControlItem value="unread">
            Unread
            {unread > 0 && (
              <SegmentedControlCounter>{unread}</SegmentedControlCounter>
            )}
          </SegmentedControlItem>
          <SegmentedControlItem value="groups">Groups</SegmentedControlItem>
        </SegmentedControl>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        {shown.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">
            Nothing found.
          </p>
        )}
        {pinned.length > 0 && (
          <ItemGroup>
            <div className="px-2 pt-2 pb-1 text-xs text-muted-foreground">
              Pinned
            </div>
            {pinned.map(row)}
          </ItemGroup>
        )}
        {rest.length > 0 && (
          <ItemGroup>
            {pinned.length > 0 && (
              <div className="px-2 pt-3 pb-1 text-xs text-muted-foreground">
                All chats
              </div>
            )}
            {rest.map(row)}
          </ItemGroup>
        )}
      </div>
    </div>
  )
}

function lastOf(chat: Chat) {
  return chat.messages[chat.messages.length - 1]
}
