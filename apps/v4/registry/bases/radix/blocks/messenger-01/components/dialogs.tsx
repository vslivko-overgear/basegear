"use client"

import * as React from "react"

import {
  chatTitle,
  contactOf,
  CONTACTS,
  type Chat,
} from "@/registry/bases/radix/blocks/messenger-01/components/data"
import {
  MuteIcon,
  PhoneIcon,
  PinIcon,
  SearchIcon,
  TrashIcon,
  VideoIcon,
} from "@/registry/bases/radix/blocks/messenger-01/components/icons"
import { PersonAvatar } from "@/registry/bases/radix/blocks/messenger-01/components/person-avatar"
import { Button } from "@/registry/bases/radix/ui/button"
import { Checkbox } from "@/registry/bases/radix/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/radix/ui/dialog"
import { Input } from "@/registry/bases/radix/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/radix/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/radix/ui/item"
import { Stack } from "@/registry/bases/radix/ui/layout"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/radix/ui/sheet"
import { Switch } from "@/registry/bases/radix/ui/switch"

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
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="gap-0">
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
              <Button variant="secondary" onClick={onCall}>
                <PhoneIcon data-icon="inline-start" />
                Call
              </Button>
              <Button variant="secondary" onClick={onCall}>
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
                checked={chat.pinned}
                onCheckedChange={() => onToggle("pinned")}
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
                checked={chat.muted}
                onCheckedChange={() => onToggle("muted")}
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
          <Button variant="destructive" onClick={onDelete}>
            <TrashIcon data-icon="inline-start" />
            Delete chat
          </Button>
        </div>
      </SheetContent>
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
    <Dialog open={!!name} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-sm">
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
          <Button variant="destructive" className="w-full" onClick={onClose}>
            End call
          </Button>
        </DialogFooter>
      </DialogContent>
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
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
                asChild
                className="cursor-pointer"
              >
                <label>
                  <ItemMedia>
                    <PersonAvatar id={contact.id} size="sm" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{contact.name}</ItemTitle>
                    <ItemDescription>{contact.bio}</ItemDescription>
                  </ItemContent>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(value) =>
                      setPicked((current) =>
                        value
                          ? [...current, contact.id]
                          : current.filter((id) => id !== contact.id)
                      )
                    }
                  />
                </label>
              </Item>
            )
          })}
        </ItemGroup>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            disabled={picked.length === 0}
            onClick={() => onCreate(picked, name.trim() || "New group")}
          >
            {group ? "Create group" : "Start chat"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
