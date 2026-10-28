"use client"

import * as React from "react"
import { cn } from "cn"

import { ChatList } from "@/registry/bases/base/blocks/messenger-01/components/chat-list"
import { ChatView } from "@/registry/bases/base/blocks/messenger-01/components/chat-view"
import {
  chatTitle,
  makeChats,
  nextId,
  REPLIES,
  type Chat,
  type ChatMessage,
} from "@/registry/bases/base/blocks/messenger-01/components/data"
import {
  CallDialog,
  ChatInfoSheet,
  NewChatDialog,
} from "@/registry/bases/base/blocks/messenger-01/components/dialogs"
import {
  ChatsIcon,
  ContactsIcon,
  PhoneIcon,
  SettingsIcon,
} from "@/registry/bases/base/blocks/messenger-01/components/icons"
import {
  CallsSection,
  ContactPane,
  ContactsSection,
  DEFAULT_SETTINGS,
  SettingsPane,
  SettingsSection,
  type Settings,
  type SettingsPageKey,
} from "@/registry/bases/base/blocks/messenger-01/components/sections"
import { useIsMobile } from "@/registry/bases/base/hooks/use-mobile"
import {
  Banner,
  BannerClose,
  BannerDescription,
  BannerTitle,
} from "@/registry/bases/base/ui/banner"
import {
  BottomBar,
  BottomBarBadge,
  BottomBarIcon,
  BottomBarItem,
  BottomBarLabel,
} from "@/registry/bases/base/ui/bottom-bar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Status,
  StatusActions,
  StatusDescription,
  StatusMedia,
  StatusTitle,
} from "@/registry/bases/base/ui/status"

type Section = "chats" | "calls" | "contacts" | "settings"
type Pane =
  | { type: "chat"; id: string }
  | { type: "contact"; id: string }
  | { type: "settings"; id: SettingsPageKey }
  | null

export function Messenger() {
  const [now] = React.useState(() => Date.now())
  const [chats, setChats] = React.useState<Chat[]>(() => makeChats(now))
  const [section, setSection] = React.useState<Section>("chats")
  const [pane, setPane] = React.useState<Pane>(null)
  const [typing, setTyping] = React.useState<Record<string, boolean>>({})
  const [settings, setSettings] = React.useState<Settings>(DEFAULT_SETTINGS)
  const [infoOpen, setInfoOpen] = React.useState(false)
  const [call, setCall] = React.useState<string | null>(null)
  const [newChat, setNewChat] = React.useState(false)
  const isMobile = useIsMobile()

  const chatsRef = React.useRef(chats)
  chatsRef.current = chats
  const settingsRef = React.useRef(settings)
  settingsRef.current = settings

  const unread = chats.reduce(
    (sum, chat) => sum + (chat.muted ? 0 : chat.unread),
    0
  )
  const active =
    pane?.type === "chat" ? chats.find((chat) => chat.id === pane.id) : null

  const patchChat = React.useCallback(
    (id: string, fn: (chat: Chat) => Chat) =>
      setChats((current) =>
        current.map((chat) => (chat.id === id ? fn(chat) : chat))
      ),
    []
  )

  const openChat = (id: string) => {
    setSection("chats")
    setPane({ type: "chat", id })
    patchChat(id, (chat) => ({ ...chat, unread: 0 }))
  }

  const send = (chatId: string, payload: Partial<ChatMessage>) => {
    const message: ChatMessage = {
      id: nextId(),
      from: "me",
      time: Date.now(),
      status: "sent",
      ...payload,
    }
    patchChat(chatId, (chat) => ({
      ...chat,
      messages: [...chat.messages, message],
    }))
    setTimeout(
      () =>
        patchChat(chatId, (chat) => ({
          ...chat,
          messages: chat.messages.map((m) =>
            m.id === message.id ? { ...m, status: "delivered" } : m
          ),
        })),
      600
    )
    if (settingsRef.current.offline) {
      return
    }
    // The other side reads the message, types and replies.
    setTimeout(() => setTyping((t) => ({ ...t, [chatId]: true })), 1000)
    setTimeout(() => {
      setTyping((t) => ({ ...t, [chatId]: false }))
      const chat = chatsRef.current.find((c) => c.id === chatId)
      if (!chat) {
        return
      }
      const from =
        chat.type === "group"
          ? (chat.members ?? [])[
              Math.floor(Math.random() * (chat.members?.length ?? 1))
            ]
          : (chat.with ?? "")
      const reply: ChatMessage = {
        id: nextId(),
        from,
        text: REPLIES[Math.floor(Math.random() * REPLIES.length)],
        time: Date.now(),
        status: "read",
      }
      patchChat(chatId, (c) => ({
        ...c,
        messages: [
          ...c.messages.map((m) =>
            m.from === "me" ? { ...m, status: "read" as const } : m
          ),
          reply,
        ],
      }))
    }, 2800)
  }

  const openDirect = (contactId: string) => {
    let chat = chatsRef.current.find(
      (c) => c.type === "direct" && c.with === contactId
    )
    if (!chat) {
      chat = {
        id: `c-${contactId}`,
        type: "direct",
        with: contactId,
        pinned: false,
        muted: false,
        unread: 0,
        messages: [
          {
            id: nextId(),
            from: "me",
            text: "Hi! 👋",
            time: Date.now(),
            status: "sent",
          },
        ],
      }
      const created = chat
      setChats((current) => [...current, created])
    }
    openChat(chat.id)
  }

  const createChat = (members: string[], name: string) => {
    setNewChat(false)
    if (members.length === 1) {
      openDirect(members[0])
      return
    }
    const chat: Chat = {
      id: `g-${nextId()}`,
      type: "group",
      name,
      members,
      pinned: false,
      muted: false,
      unread: 0,
      messages: [
        {
          id: nextId(),
          from: "me",
          text: `Created the group “${name}”`,
          time: Date.now(),
          status: "read",
        },
      ],
    }
    setChats((current) => [...current, chat])
    openChat(chat.id)
  }

  const deleteChat = (id: string) => {
    setInfoOpen(false)
    setPane(null)
    setChats((current) => current.filter((chat) => chat.id !== id))
  }

  const go = (next: string) => {
    setSection(next as Section)
    if (isMobile) {
      setPane(null)
    }
  }

  let main: React.ReactNode
  if (active) {
    main = (
      <ChatView
        chat={active}
        typing={!!typing[active.id]}
        showBack={isMobile}
        onBack={() => setPane(null)}
        onSend={send}
        onCall={() => setCall(chatTitle(active))}
        onInfo={() => setInfoOpen(true)}
      />
    )
  } else if (pane?.type === "contact") {
    main = (
      <ContactPane
        id={pane.id}
        showBack={isMobile}
        onBack={() => setPane(null)}
        onMessage={openDirect}
        onCall={(contact) => setCall(contact.name)}
      />
    )
  } else if (pane?.type === "settings") {
    main = (
      <SettingsPane
        pageKey={pane.id}
        settings={settings}
        onChange={(patch) => setSettings((s) => ({ ...s, ...patch }))}
        showBack={isMobile}
        onBack={() => setPane(null)}
      />
    )
  } else {
    main = (
      <div className="flex flex-1 items-center justify-center p-6">
        <Status>
          <StatusMedia>
            <ChatsIcon />
          </StatusMedia>
          <StatusTitle>Select a chat</StatusTitle>
          <StatusDescription>
            Pick a conversation on the left or start a new one.
          </StatusDescription>
          <StatusActions>
            <Button onClick={() => setNewChat(true)}>New chat</Button>
          </StatusActions>
        </Status>
      </div>
    )
  }

  return (
    <div className="flex h-svh flex-col bg-background">
      {settings.offline && (
        <Banner variant="warning" className="rounded-none">
          <BannerTitle>You are offline</BannerTitle>
          <BannerDescription>
            Messages are kept on this device and replies are paused.
          </BannerDescription>
          <BannerClose
            onClick={() => setSettings((s) => ({ ...s, offline: false }))}
          />
        </Banner>
      )}
      <div className="flex min-h-0 flex-1">
        <aside
          className={cn(
            "flex min-h-0 w-full flex-col border-r md:w-90 md:shrink-0",
            pane && "max-md:hidden"
          )}
        >
          {section === "chats" && (
            <ChatList
              chats={chats}
              typing={typing}
              activeId={active?.id ?? null}
              now={now}
              unread={unread}
              onOpen={openChat}
              onNew={() => setNewChat(true)}
              onReadAll={() =>
                setChats((current) =>
                  current.map((chat) => ({ ...chat, unread: 0 }))
                )
              }
            />
          )}
          {section === "calls" && (
            <CallsSection onCall={(contact) => setCall(contact.name)} />
          )}
          {section === "contacts" && (
            <ContactsSection
              activeId={pane?.type === "contact" ? pane.id : null}
              onOpen={(id) => setPane({ type: "contact", id })}
              onNew={() => setNewChat(true)}
            />
          )}
          {section === "settings" && (
            <SettingsSection
              activeKey={pane?.type === "settings" ? pane.id : null}
              onOpen={(id) => setPane({ type: "settings", id })}
            />
          )}
          <BottomBar value={section} onValueChange={go} className="border-t">
            <BottomBarItem value="chats">
              <BottomBarIcon>
                <ChatsIcon />
                {unread > 0 && <BottomBarBadge>{unread}</BottomBarBadge>}
              </BottomBarIcon>
              <BottomBarLabel>Chats</BottomBarLabel>
            </BottomBarItem>
            <BottomBarItem value="calls">
              <BottomBarIcon>
                <PhoneIcon />
                <BottomBarBadge>2</BottomBarBadge>
              </BottomBarIcon>
              <BottomBarLabel>Calls</BottomBarLabel>
            </BottomBarItem>
            <BottomBarItem value="contacts">
              <BottomBarIcon>
                <ContactsIcon />
              </BottomBarIcon>
              <BottomBarLabel>Contacts</BottomBarLabel>
            </BottomBarItem>
            <BottomBarItem value="settings">
              <BottomBarIcon>
                <SettingsIcon />
              </BottomBarIcon>
              <BottomBarLabel>Settings</BottomBarLabel>
            </BottomBarItem>
          </BottomBar>
        </aside>
        <main
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col",
            !pane && "max-md:hidden"
          )}
        >
          {main}
        </main>
      </div>
      <ChatInfoSheet
        chat={active ?? null}
        open={infoOpen && !!active}
        onOpenChange={setInfoOpen}
        onToggle={(key) =>
          active &&
          patchChat(active.id, (chat) => ({ ...chat, [key]: !chat[key] }))
        }
        onDelete={() => active && deleteChat(active.id)}
        onCall={() => active && setCall(chatTitle(active))}
      />
      <CallDialog name={call} onClose={() => setCall(null)} />
      <NewChatDialog
        open={newChat}
        onOpenChange={setNewChat}
        onCreate={createChat}
      />
    </div>
  )
}
