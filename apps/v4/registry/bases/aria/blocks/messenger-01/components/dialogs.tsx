"use client"

import * as React from "react"

import {
  chatTitle,
  contactOf,
  CONTACTS,
  type Chat,
} from "@/registry/bases/aria/blocks/messenger-01/components/data"
import {
  MuteIcon,
  PhoneIcon,
  PinIcon,
  SearchIcon,
  TrashIcon,
  VideoIcon,
} from "@/registry/bases/aria/blocks/messenger-01/components/icons"
import { PersonAvatar } from "@/registry/bases/aria/blocks/messenger-01/components/person-avatar"
import { pressable } from "@/registry/bases/aria/blocks/messenger-01/components/pressable"
import { Button } from "@/registry/bases/aria/ui/button"
import { Checkbox } from "@/registry/bases/aria/ui/checkbox"
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/aria/ui/dialog"
import { Input } from "@/registry/bases/aria/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/aria/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/aria/ui/item"
import { Stack } from "@/registry/bases/aria/ui/layout"
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/aria/ui/sheet"
import { Switch } from "@/registry/bases/aria/ui/switch"

export function ChatInfoSheet({
  chat,
  open,
  onOpenChange,
  onToggle,
  onDelete,
  onCall,
}: {
  chat: Chat | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onToggle: (key: "pinned" | "muted") => void
  onDelete: () => void
  onCall: () => void
}) {
  if (!chat) {
    return null
  }
  const group = chat.type === "group"
  const contact = group ? undefined : contactOf(chat.with ?? "")

  return (
    <Sheet isOpen={open} onOpenChange={onOpenChange} className="gap-0">
      <SheetHeader>
        <SheetTitle>Chat info</SheetTitle>
        <SheetDescription>
          {group ? "Group settings and members" : "Contact and chat settings"}
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-6 overflow-y-auto px-4 pb-6">
        <Stack align="center" gap={2} className="text-center">
          <PersonAvatar
            id={chat.with}
            name={group ? chat.name : undefined}
            group={group}
            size="lg"
            className="size-20"
          />
          <div className="text-lg font-semibold">{chatTitle(chat)}</div>
          <div className="text-sm text-muted-foreground">
            {group
              ? `${(chat.members?.length ?? 0) + 1} members`
              : contact?.bio}
          </div>
          <Stack direction="row" gap={2}>
            <Button variant="secondary" onPress={onCall}>
              <PhoneIcon data-icon="inline-start" />
              Call
            </Button>
            <Button variant="secondary" onPress={onCall}>
              <VideoIcon data-icon="inline-start" />
              Video
            </Button>
          </Stack>
        </Stack>
        <ItemGroup>
          <Item size="sm">
            <ItemMedia variant="icon">
              <PinIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Pin chat</ItemTitle>
            </ItemContent>
            <Switch
              aria-label="Pin chat"
              isSelected={chat.pinned}
              onChange={() => onToggle("pinned")}
            />
          </Item>
          <Item size="sm">
            <ItemMedia variant="icon">
              <MuteIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Mute notifications</ItemTitle>
            </ItemContent>
            <Switch
              aria-label="Mute notifications"
              isSelected={chat.muted}
              onChange={() => onToggle("muted")}
            />
          </Item>
        </ItemGroup>
        {group && (
          <ItemGroup>
            <div className="px-2 pb-1 text-xs text-muted-foreground">
              Members
            </div>
            {chat.members?.map((id) => (
              <Item key={id} size="sm">
                <ItemMedia>
                  <PersonAvatar id={id} size="sm" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{contactOf(id)?.name}</ItemTitle>
                  <ItemDescription>{contactOf(id)?.seen}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        )}
        <Button variant="destructive" onPress={onDelete}>
          <TrashIcon data-icon="inline-start" />
          Delete chat
        </Button>
      </div>
    </Sheet>
  )
}

export function CallDialog({
  name,
  onClose,
}: {
  name: string | null
  onClose: () => void
}) {
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    if (!name) {
      return
    }
    setSeconds(0)
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timer)
  }, [name])

  return (
    <Dialog
      isOpen={!!name}
      onOpenChange={(open) => !open && onClose()}
      className="sm:max-w-sm"
    >
      <DialogHeader className="items-center text-center">
        <PersonAvatar name={name ?? ""} size="lg" className="size-20" />
        <DialogTitle>{name}</DialogTitle>
        <DialogDescription className="tabular-nums">
          {seconds < 3
            ? "Calling…"
            : `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="destructive" className="w-full" onPress={onClose}>
          End call
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export function NewChatDialog({
  open,
  onOpenChange,
  onCreate,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreate: (members: string[], name: string) => void
}) {
  const [picked, setPicked] = React.useState<string[]>([])
  const [query, setQuery] = React.useState("")
  const [name, setName] = React.useState("")

  React.useEffect(() => {
    if (open) {
      setPicked([])
      setQuery("")
      setName("")
    }
  }, [open])

  const q = query.trim().toLowerCase()
  const shown = CONTACTS.filter(
    (contact) => !q || contact.name.toLowerCase().includes(q)
  )
  const group = picked.length > 1
  const toggle = (id: string) =>
    setPicked((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    )

  return (
    <Dialog isOpen={open} onOpenChange={onOpenChange} className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>New chat</DialogTitle>
        <DialogDescription>
          Pick one person for a direct chat or several for a group.
        </DialogDescription>
      </DialogHeader>
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search people"
          aria-label="Search people"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputGroup>
      {group && (
        <Input
          placeholder="Group name"
          aria-label="Group name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      )}
      <ItemGroup className="max-h-72 overflow-y-auto">
        {shown.map((contact) => {
          const checked = picked.includes(contact.id)
          return (
            <Item
              key={contact.id}
              size="sm"
              {...pressable(() => toggle(contact.id))}
              className="cursor-pointer"
            >
              <ItemMedia>
                <PersonAvatar id={contact.id} size="sm" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{contact.name}</ItemTitle>
                <ItemDescription>{contact.bio}</ItemDescription>
              </ItemContent>
              <Checkbox
                aria-label={contact.name}
                isSelected={checked}
                onChange={() => toggle(contact.id)}
              />
            </Item>
          )
        })}
      </ItemGroup>
      <DialogFooter>
        <Button variant="secondary" onPress={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button
          isDisabled={picked.length === 0}
          onPress={() => onCreate(picked, name.trim() || "New group")}
        >
          {group ? "Create group" : "Start chat"}
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
