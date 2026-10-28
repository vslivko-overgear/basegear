"use client"

import * as React from "react"

import {
  chatTitle,
  contactOf,
  formatTime,
  nameOf,
  QUICK_REPLIES,
  type Chat,
  type ChatMessage,
} from "@/registry/bases/base/blocks/messenger-01/components/data"
import {
  AttachIcon,
  BackIcon,
  CheckIcon,
  FileIcon,
  ImageIcon,
  InfoIcon,
  PhoneIcon,
  ReadAllIcon,
  SendIcon,
} from "@/registry/bases/base/blocks/messenger-01/components/icons"
import { PersonAvatar } from "@/registry/bases/base/blocks/messenger-01/components/person-avatar"
import { Bubble, BubbleContent } from "@/registry/bases/base/ui/bubble"
import { Button } from "@/registry/bases/base/ui/button"
import { Chip, ChipGroup } from "@/registry/bases/base/ui/chip"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/bases/base/ui/message"
import {
  Navbar,
  NavbarEnd,
  NavbarHeading,
  NavbarStart,
  NavbarSubtitle,
  NavbarTitle,
} from "@/registry/bases/base/ui/navbar"

export function ChatView({
  chat,
  typing,
  showBack,
  onBack,
  onSend,
  onCall,
  onInfo,
}: {
  chat: Chat
  typing: boolean
  showBack: boolean
  onBack: () => void
  onSend: (chatId: string, message: Partial<ChatMessage>) => void
  onCall: () => void
  onInfo: () => void
}) {
  const [draft, setDraft] = React.useState("")
  const scroller = React.useRef<HTMLDivElement>(null)
  const group = chat.type === "group"
  const last = chat.messages[chat.messages.length - 1]

  React.useEffect(() => {
    setDraft("")
  }, [chat.id])

  React.useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight })
  }, [chat.id, chat.messages.length, typing])

  const send = (text: string) => {
    if (!text.trim()) {
      return
    }
    onSend(chat.id, { text: text.trim() })
    setDraft("")
  }

  const subtitle = typing
    ? "typing…"
    : group
      ? `${(chat.members?.length ?? 0) + 1} members`
      : (contactOf(chat.with ?? "")?.seen ?? "")

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <Navbar className="border-b">
        <NavbarStart>
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Back to chats"
              onClick={onBack}
            >
              <BackIcon />
            </Button>
          )}
          <PersonAvatar
            id={chat.with}
            name={group ? chat.name : undefined}
            group={group}
            size="sm"
          />
        </NavbarStart>
        <NavbarHeading className="items-start text-left">
          <NavbarTitle>{chatTitle(chat)}</NavbarTitle>
          <NavbarSubtitle>{subtitle}</NavbarSubtitle>
        </NavbarHeading>
        <NavbarEnd>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Call"
            onClick={onCall}
          >
            <PhoneIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Chat info"
            onClick={onInfo}
          >
            <InfoIcon />
          </Button>
        </NavbarEnd>
      </Navbar>
      <div
        ref={scroller}
        role="log"
        aria-label={`Messages with ${chatTitle(chat)}`}
        className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto bg-muted/40 px-4 py-4"
      >
        {chat.messages.map((message, index) => {
          const own = message.from === "me"
          const first =
            index === 0 || chat.messages[index - 1].from !== message.from
          return (
            <Message
              key={message.id}
              align={own ? "end" : "start"}
              className={first && index > 0 ? "mt-3" : undefined}
            >
              {group && !own && (
                <MessageAvatar className="size-8 bg-transparent">
                  {first && (
                    <PersonAvatar
                      id={message.from}
                      size="sm"
                      showPresence={false}
                    />
                  )}
                </MessageAvatar>
              )}
              <MessageContent className={own ? "items-end" : "items-start"}>
                <Bubble
                  align={own ? "end" : "start"}
                  variant={own ? "default" : "secondary"}
                  className="max-w-[min(32rem,80%)]"
                >
                  <BubbleContent>
                    {group && !own && first && (
                      <div className="text-xs font-medium opacity-80">
                        {nameOf(message.from)}
                      </div>
                    )}
                    <MessageBody message={message} />
                    <span className="ml-auto flex items-center justify-end gap-1 text-[0.7rem] tabular-nums opacity-70">
                      {formatTime(message.time)}
                      {own &&
                        (message.status === "sent" ? (
                          <CheckIcon aria-label="Sent" className="size-3.5" />
                        ) : (
                          <ReadAllIcon
                            aria-label={message.status}
                            className="size-3.5"
                          />
                        ))}
                    </span>
                  </BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          )
        })}
        {typing && (
          <Message className="mt-3">
            <MessageContent className="items-start">
              <Bubble variant="secondary">
                <BubbleContent className="text-muted-foreground">
                  typing…
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        )}
      </div>
      <form
        className="flex flex-col gap-2 border-t p-3"
        onSubmit={(event) => {
          event.preventDefault()
          send(draft)
        }}
      >
        {last && last.from !== "me" && !draft && (
          <ChipGroup aria-label="Quick replies" size="sm" value={[]}>
            {QUICK_REPLIES.map((reply) => (
              <Chip key={reply} value={reply} onClick={() => send(reply)}>
                {reply}
              </Chip>
            ))}
          </ChipGroup>
        )}
        <InputGroup>
          <InputGroupTextarea
            rows={1}
            placeholder="Message"
            aria-label="Message"
            value={draft}
            className="max-h-32 min-h-0"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault()
                send(draft)
              }
            }}
          />
          <InputGroupAddon align="inline-start">
            <InputGroupButton
              size="icon-xs"
              aria-label="Attach a photo"
              onClick={() =>
                onSend(chat.id, { kind: "image", caption: "Photo" })
              }
            >
              <AttachIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              type="submit"
              size="icon-xs"
              variant="default"
              aria-label="Send"
              disabled={!draft.trim()}
            >
              <SendIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  )
}

function MessageBody({ message }: { message: ChatMessage }) {
  if (message.kind === "image") {
    return (
      <div className="flex aspect-video w-56 items-end rounded-lg bg-linear-to-br from-primary to-chart-5 p-3 text-sm font-medium text-primary-foreground">
        <ImageIcon className="mr-2 size-4" />
        {message.caption}
      </div>
    )
  }
  if (message.kind === "file" && message.file) {
    return (
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-background/60">
          <FileIcon className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="font-medium">{message.file.name}</span>
          <span className="text-xs opacity-70">{message.file.size}</span>
        </span>
      </div>
    )
  }
  return <span className="whitespace-pre-wrap">{message.text}</span>
}
