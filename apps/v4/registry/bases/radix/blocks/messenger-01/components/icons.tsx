import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

// The icons of the messenger, one name per icon library.
type IconProps = Omit<React.ComponentProps<"svg">, "ref">

export function SearchIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SearchIcon"
      tabler="IconSearch"
      hugeicons="Search01Icon"
      phosphor="MagnifyingGlassIcon"
      remixicon="RiSearchLine"
      {...props}
    />
  )
}

export function NewChatIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SquarePenIcon"
      tabler="IconEdit"
      hugeicons="PencilEdit02Icon"
      phosphor="NotePencilIcon"
      remixicon="RiEditBoxLine"
      {...props}
    />
  )
}

export function ReadAllIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="CheckCheckIcon"
      tabler="IconChecks"
      hugeicons="TickDouble02Icon"
      phosphor="ChecksIcon"
      remixicon="RiCheckDoubleLine"
      {...props}
    />
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="CheckIcon"
      tabler="IconCheck"
      hugeicons="Tick02Icon"
      phosphor="CheckIcon"
      remixicon="RiCheckLine"
      {...props}
    />
  )
}

export function ChatsIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="MessageCircleIcon"
      tabler="IconMessageCircle"
      hugeicons="Message01Icon"
      phosphor="ChatCircleIcon"
      remixicon="RiMessage3Line"
      {...props}
    />
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PhoneIcon"
      tabler="IconPhone"
      hugeicons="Call02Icon"
      phosphor="PhoneIcon"
      remixicon="RiPhoneLine"
      {...props}
    />
  )
}

export function PhoneIncomingIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PhoneIncomingIcon"
      tabler="IconPhoneIncoming"
      hugeicons="CallIncoming01Icon"
      phosphor="PhoneIncomingIcon"
      remixicon="RiPhoneLine"
      {...props}
    />
  )
}

export function PhoneOutgoingIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PhoneOutgoingIcon"
      tabler="IconPhoneOutgoing"
      hugeicons="CallOutgoing01Icon"
      phosphor="PhoneOutgoingIcon"
      remixicon="RiPhoneLine"
      {...props}
    />
  )
}

export function PhoneMissedIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PhoneMissedIcon"
      tabler="IconPhoneX"
      hugeicons="CallBlocked02Icon"
      phosphor="PhoneXIcon"
      remixicon="RiPhoneLine"
      {...props}
    />
  )
}

export function ContactsIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="UsersIcon"
      tabler="IconUsers"
      hugeicons="UserGroupIcon"
      phosphor="UsersIcon"
      remixicon="RiGroupLine"
      {...props}
    />
  )
}

export function SettingsIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SettingsIcon"
      tabler="IconSettings"
      hugeicons="Settings01Icon"
      phosphor="GearIcon"
      remixicon="RiSettingsLine"
      {...props}
    />
  )
}

export function InfoIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="InfoIcon"
      tabler="IconInfoCircle"
      hugeicons="InformationCircleIcon"
      phosphor="InfoIcon"
      remixicon="RiInformationLine"
      {...props}
    />
  )
}

export function BackIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ChevronLeftIcon"
      tabler="IconChevronLeft"
      hugeicons="ArrowLeft01Icon"
      phosphor="CaretLeftIcon"
      remixicon="RiArrowLeftSLine"
      {...props}
    />
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ChevronRightIcon"
      tabler="IconChevronRight"
      hugeicons="ArrowRight01Icon"
      phosphor="CaretRightIcon"
      remixicon="RiArrowRightSLine"
      {...props}
    />
  )
}

export function SendIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SendIcon"
      tabler="IconSend"
      hugeicons="SentIcon"
      phosphor="PaperPlaneTiltIcon"
      remixicon="RiSendPlaneLine"
      {...props}
    />
  )
}

export function AttachIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PaperclipIcon"
      tabler="IconPaperclip"
      hugeicons="Attachment01Icon"
      phosphor="PaperclipIcon"
      remixicon="RiAttachment2"
      {...props}
    />
  )
}

export function EmojiIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SmileIcon"
      tabler="IconMoodSmile"
      hugeicons="SmileIcon"
      phosphor="SmileyIcon"
      remixicon="RiEmotionLine"
      {...props}
    />
  )
}

export function PinIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PinIcon"
      tabler="IconPin"
      hugeicons="PinIcon"
      phosphor="PushPinIcon"
      remixicon="RiPushpinLine"
      {...props}
    />
  )
}

export function MuteIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="BellOffIcon"
      tabler="IconBellOff"
      hugeicons="NotificationOff03Icon"
      phosphor="BellSlashIcon"
      remixicon="RiNotificationOffLine"
      {...props}
    />
  )
}

export function BellIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="BellIcon"
      tabler="IconBell"
      hugeicons="Notification03Icon"
      phosphor="BellIcon"
      remixicon="RiBellLine"
      {...props}
    />
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="TrashIcon"
      tabler="IconTrash"
      hugeicons="Delete02Icon"
      phosphor="TrashIcon"
      remixicon="RiDeleteBinLine"
      {...props}
    />
  )
}

export function UserIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="UserIcon"
      tabler="IconUser"
      hugeicons="UserIcon"
      phosphor="UserIcon"
      remixicon="RiUserLine"
      {...props}
    />
  )
}

export function LockIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="LockIcon"
      tabler="IconLock"
      hugeicons="SquareLock02Icon"
      phosphor="LockKeyIcon"
      remixicon="RiLockLine"
      {...props}
    />
  )
}

export function PaletteIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="PaletteIcon"
      tabler="IconPalette"
      hugeicons="PaintBoardIcon"
      phosphor="PaletteIcon"
      remixicon="RiPaletteLine"
      {...props}
    />
  )
}

export function HelpIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="CircleHelpIcon"
      tabler="IconHelp"
      hugeicons="HelpCircleIcon"
      phosphor="QuestionIcon"
      remixicon="RiQuestionLine"
      {...props}
    />
  )
}

export function VideoIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="VideoIcon"
      tabler="IconVideo"
      hugeicons="Video01Icon"
      phosphor="VideoCameraIcon"
      remixicon="RiVideoOnLine"
      {...props}
    />
  )
}

export function FileIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="FileTextIcon"
      tabler="IconFileText"
      hugeicons="File01Icon"
      phosphor="FileTextIcon"
      remixicon="RiFileTextLine"
      {...props}
    />
  )
}

export function ImageIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ImageIcon"
      tabler="IconPhoto"
      hugeicons="Image01Icon"
      phosphor="ImageIcon"
      remixicon="RiImageLine"
      {...props}
    />
  )
}
