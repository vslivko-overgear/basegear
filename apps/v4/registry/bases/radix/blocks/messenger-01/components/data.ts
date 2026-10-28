// Mock data: there is no backend, everything lives in memory.
const MINUTE = 60 * 1000

export type Presence = "online" | "busy" | "offline"

export type Contact = {
  id: string
  name: string
  bio: string
  seen: string
  presence: Presence
}

export type MessageKind = "text" | "image" | "file"

export type ChatMessage = {
  id: number
  from: string
  text?: string
  kind?: MessageKind
  caption?: string
  file?: { name: string; size: string }
  time: number
  status: "sent" | "delivered" | "read"
}

export type Chat = {
  id: string
  type: "direct" | "group"
  with?: string
  name?: string
  members?: string[]
  pinned: boolean
  muted: boolean
  unread: number
  messages: ChatMessage[]
}

export type Call = {
  id: number
  who: string
  kind: "incoming" | "outgoing" | "missed"
  minutes: number
  length: string
}

export const ME = {
  id: "me",
  name: "Alex Morgan",
  bio: "Product designer · coffee first",
  phone: "+1 (415) 555-0142",
}

export const CONTACTS: Contact[] = [
  {
    id: "maya",
    name: "Maya Chen",
    bio: "Design systems lead",
    seen: "online",
    presence: "online",
  },
  {
    id: "leo",
    name: "Leo Fischer",
    bio: "Frontend engineer",
    seen: "last seen 25 minutes ago",
    presence: "offline",
  },
  {
    id: "nora",
    name: "Nora Haddad",
    bio: "Product manager",
    seen: "online",
    presence: "online",
  },
  {
    id: "ivan",
    name: "Ivan Petrov",
    bio: "Do not disturb",
    seen: "busy",
    presence: "busy",
  },
  {
    id: "sofia",
    name: "Sofia Rossi",
    bio: "UX researcher",
    seen: "last seen yesterday",
    presence: "offline",
  },
  {
    id: "kai",
    name: "Kai Tanaka",
    bio: "Illustrator",
    seen: "online",
    presence: "online",
  },
  {
    id: "amara",
    name: "Amara Okafor",
    bio: "QA engineer",
    seen: "last seen 2 hours ago",
    presence: "offline",
  },
  {
    id: "tom",
    name: "Tom Becker",
    bio: "Backend engineer",
    seen: "last seen today at 09:12",
    presence: "offline",
  },
  {
    id: "lena",
    name: "Lena Novak",
    bio: "Marketing",
    seen: "online",
    presence: "online",
  },
  {
    id: "omar",
    name: "Omar Haddad",
    bio: "Dad",
    seen: "last seen recently",
    presence: "offline",
  },
  {
    id: "zoe",
    name: "Zoe Martin",
    bio: "Photographer",
    seen: "last seen a week ago",
    presence: "offline",
  },
  {
    id: "priya",
    name: "Priya Nair",
    bio: "Engineering manager",
    seen: "last seen 5 hours ago",
    presence: "offline",
  },
  {
    id: "yuki",
    name: "Yuki Sato",
    bio: "Motion designer",
    seen: "online",
    presence: "online",
  },
]

export const contactOf = (id: string) => CONTACTS.find((c) => c.id === id)

let uid = 100
export const nextId = () => ++uid

export function makeChats(now: number): Chat[] {
  const message = (
    from: string,
    text: string,
    minutesAgo: number,
    extra: Partial<ChatMessage> = {}
  ): ChatMessage => ({
    id: nextId(),
    from,
    text,
    time: now - minutesAgo * MINUTE,
    status: "read",
    ...extra,
  })

  return [
    {
      id: "c-maya",
      type: "direct",
      with: "maya",
      pinned: true,
      muted: false,
      unread: 2,
      messages: [
        message("me", "Morning! Did you see the new floating navbar?", 190),
        message("maya", "Yes! The gradient under it is a great touch 😍", 186),
        message("me", "Already done, check the theme settings", 170),
        message("maya", "", 42, { kind: "image", caption: "Onboarding, v3" }),
        message("maya", "Thoughts?", 41),
        message("maya", "Also: are we still on for 15:00?", 3),
      ],
    },
    {
      id: "g-design",
      type: "group",
      name: "Design team",
      members: ["maya", "kai", "sofia", "yuki"],
      pinned: true,
      muted: false,
      unread: 0,
      messages: [
        message("kai", "Uploaded the new icon set", 600),
        message("sofia", "", 480, {
          kind: "file",
          file: { name: "Research summary.pdf", size: "2.4 MB" },
        }),
        message("me", "Thanks everyone — reviewing today", 280),
        message("maya", "Reminder: critique at 16:00 ☕", 95),
      ],
    },
    {
      id: "c-nora",
      type: "direct",
      with: "nora",
      pinned: false,
      muted: false,
      unread: 1,
      messages: [
        message("nora", "", 1500, {
          kind: "file",
          file: { name: "Roadmap Q3.xlsx", size: "640 KB" },
        }),
        message("me", "Got it, will comment by Friday", 1490),
        message("nora", "Can you join the planning call tomorrow?", 12),
      ],
    },
    {
      id: "g-guild",
      type: "group",
      name: "Frontend guild",
      members: ["leo", "tom", "priya", "amara"],
      pinned: false,
      muted: false,
      unread: 5,
      messages: [
        message("priya", "Release train leaves at 17:00", 90),
        message("amara", "Found a focus-order bug in the dialog", 30),
        message("tom", "On it", 28),
      ],
    },
    {
      id: "g-trip",
      type: "group",
      name: "Lisbon trip ✈️",
      members: ["leo", "lena", "tom"],
      pinned: false,
      muted: true,
      unread: 14,
      messages: [
        message("lena", "Booked the apartment!", 2400),
        message("tom", "Flights are 40% cheaper on Tuesday", 1800),
        message("lena", "", 300, { kind: "image", caption: "Alfama" }),
      ],
    },
    {
      id: "c-leo",
      type: "direct",
      with: "leo",
      pinned: false,
      muted: false,
      unread: 0,
      messages: [
        message("leo", "The build is green again", 3000),
        message("me", "Amazing, thank you!", 2990),
      ],
    },
    {
      id: "c-ivan",
      type: "direct",
      with: "ivan",
      pinned: false,
      muted: false,
      unread: 0,
      messages: [
        message("me", "Can you send the invoice?", 4200),
        message("ivan", "Sure, tomorrow", 4100),
      ],
    },
    {
      id: "c-sofia",
      type: "direct",
      with: "sofia",
      pinned: false,
      muted: false,
      unread: 0,
      messages: [
        message("sofia", "Interview notes are in the doc", 5000),
        message("me", "Perfect 👌", 4990),
      ],
    },
    {
      id: "c-omar",
      type: "direct",
      with: "omar",
      pinned: false,
      muted: false,
      unread: 0,
      messages: [message("omar", "Call me when you are free", 7000)],
    },
  ]
}

export const CALLS: Call[] = [
  { id: 1, who: "maya", kind: "incoming", minutes: 55, length: "12:04" },
  { id: 2, who: "ivan", kind: "missed", minutes: 230, length: "" },
  { id: 3, who: "nora", kind: "outgoing", minutes: 1400, length: "03:31" },
  { id: 4, who: "omar", kind: "missed", minutes: 2900, length: "" },
  { id: 5, who: "leo", kind: "incoming", minutes: 4400, length: "25:18" },
  { id: 6, who: "sofia", kind: "outgoing", minutes: 5800, length: "01:12" },
]

export const REPLIES = [
  "Sounds good 👍",
  "Haha, yes!",
  "Let me check and get back to you",
  "On my way",
  "Thanks!",
  "Can we do it a bit later?",
  "Perfect, see you then",
]

export const QUICK_REPLIES = ["Sounds good", "On my way", "Thanks!", "Call me"]

export const nameOf = (id: string) =>
  id === ME.id ? ME.name : (contactOf(id)?.name ?? id)

export const chatTitle = (chat: Chat) =>
  chat.type === "group" ? (chat.name ?? "Group") : nameOf(chat.with ?? "")

export const initials = (name: string) =>
  name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")

export const previewOf = (message: ChatMessage) => {
  if (message.kind === "image") {
    return "📷 Photo"
  }
  if (message.kind === "file") {
    return `📎 ${message.file?.name}`
  }
  return message.text ?? ""
}

export const formatTime = (time: number) =>
  new Date(time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

export const listTime = (time: number, now: number) => {
  const days = Math.floor((now - time) / (24 * 60 * MINUTE))
  if (days < 1) {
    return formatTime(time)
  }
  if (days < 7) {
    return new Date(time).toLocaleDateString("en-US", { weekday: "short" })
  }
  return new Date(time).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  })
}
