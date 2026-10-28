import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

// The icons of the product page, one name per icon library.
type IconProps = Omit<React.ComponentProps<"svg">, "ref">

export function MenuIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="MenuIcon"
      tabler="IconMenu"
      hugeicons="Menu09Icon"
      phosphor="ListIcon"
      remixicon="RiMenuLine"
      {...props}
    />
  )
}

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

export function HeartIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="HeartIcon"
      tabler="IconHeart"
      hugeicons="FavouriteIcon"
      phosphor="HeartIcon"
      remixicon="RiHeartLine"
      {...props}
    />
  )
}

export function CartIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ShoppingCartIcon"
      tabler="IconShoppingCart"
      hugeicons="ShoppingCart01Icon"
      phosphor="ShoppingCartIcon"
      remixicon="RiShoppingCartLine"
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

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ChevronDownIcon"
      tabler="IconChevronDown"
      hugeicons="ArrowDown01Icon"
      phosphor="CaretDownIcon"
      remixicon="RiArrowDownSLine"
      {...props}
    />
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ArrowRightIcon"
      tabler="IconArrowRight"
      hugeicons="ArrowRight01Icon"
      phosphor="ArrowRightIcon"
      remixicon="RiArrowRightLine"
      {...props}
    />
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ClockIcon"
      tabler="IconClock"
      hugeicons="Clock01Icon"
      phosphor="ClockIcon"
      remixicon="RiTimeLine"
      {...props}
    />
  )
}

export function TagIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="TagIcon"
      tabler="IconTag"
      hugeicons="Tag01Icon"
      phosphor="TagIcon"
      remixicon="RiPriceTag3Line"
      {...props}
    />
  )
}

export function SquareCheckIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="SquareCheckIcon"
      tabler="IconSquareCheck"
      hugeicons="CheckmarkSquare02Icon"
      phosphor="CheckSquareIcon"
      remixicon="RiCheckboxLine"
      {...props}
    />
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ShieldCheckIcon"
      tabler="IconShieldCheck"
      hugeicons="SecurityCheckIcon"
      phosphor="ShieldCheckIcon"
      remixicon="RiShieldCheckLine"
      {...props}
    />
  )
}

export function CircleCheckIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="CircleCheckIcon"
      tabler="IconCircleCheck"
      hugeicons="CheckmarkCircle02Icon"
      phosphor="CheckCircleIcon"
      remixicon="RiCheckboxCircleLine"
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

export function CoinsIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="CoinsIcon"
      tabler="IconCoins"
      hugeicons="Coins01Icon"
      phosphor="CoinsIcon"
      remixicon="RiCoinsLine"
      {...props}
    />
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ChartBarIcon"
      tabler="IconChartBar"
      hugeicons="ChartHistogramIcon"
      phosphor="ChartBarIcon"
      remixicon="RiBarChartLine"
      {...props}
    />
  )
}

export function HeadphonesIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="HeadphonesIcon"
      tabler="IconHeadphones"
      hugeicons="HeadphonesIcon"
      phosphor="HeadphonesIcon"
      remixicon="RiHeadphoneLine"
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

export function ZapIcon(props: IconProps) {
  return (
    <IconPlaceholder
      lucide="ZapIcon"
      tabler="IconBolt"
      hugeicons="ZapIcon"
      phosphor="LightningIcon"
      remixicon="RiFlashlightLine"
      {...props}
    />
  )
}
