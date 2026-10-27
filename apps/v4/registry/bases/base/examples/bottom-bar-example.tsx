import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import {
  BottomBar,
  BottomBarBadge,
  BottomBarIcon,
  BottomBarItem,
  BottomBarLabel,
} from "@/registry/bases/base/ui/bottom-bar"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function BottomBarExample() {
  return (
    <ExampleWrapper>
      <BottomBarExampleBasic />
    </ExampleWrapper>
  )
}

function BottomBarExampleBasic() {
  return (
    <Example title="Basic">
      <BottomBar defaultValue="home" className="max-w-sm rounded-xl border">
        <BottomBarItem value="home">
          <BottomBarIcon>
            <IconPlaceholder
              lucide="HomeIcon"
              tabler="IconHome"
              hugeicons="Home01Icon"
              phosphor="HouseIcon"
              remixicon="RiHomeLine"
            />
          </BottomBarIcon>
          <BottomBarLabel>Home</BottomBarLabel>
        </BottomBarItem>
        <BottomBarItem value="search">
          <BottomBarIcon>
            <IconPlaceholder
              lucide="SearchIcon"
              tabler="IconSearch"
              hugeicons="Search01Icon"
              phosphor="MagnifyingGlassIcon"
              remixicon="RiSearchLine"
            />
          </BottomBarIcon>
          <BottomBarLabel>Search</BottomBarLabel>
        </BottomBarItem>
        <BottomBarItem value="cart">
          <BottomBarIcon>
            <IconPlaceholder
              lucide="ShoppingCartIcon"
              tabler="IconShoppingCart"
              hugeicons="ShoppingCart01Icon"
              phosphor="ShoppingCartIcon"
              remixicon="RiShoppingCartLine"
            />
            <BottomBarBadge>2</BottomBarBadge>
          </BottomBarIcon>
          <BottomBarLabel>Cart</BottomBarLabel>
        </BottomBarItem>
        <BottomBarItem value="chats">
          <BottomBarIcon>
            <IconPlaceholder
              lucide="MessageCircleIcon"
              tabler="IconMessageCircle"
              hugeicons="Message01Icon"
              phosphor="ChatCircleIcon"
              remixicon="RiMessage3Line"
            />
            <BottomBarBadge>8</BottomBarBadge>
          </BottomBarIcon>
          <BottomBarLabel>Chats</BottomBarLabel>
        </BottomBarItem>
        <BottomBarItem value="profile">
          <BottomBarIcon>
            <IconPlaceholder
              lucide="UserIcon"
              tabler="IconUser"
              hugeicons="UserIcon"
              phosphor="UserIcon"
              remixicon="RiUserLine"
            />
          </BottomBarIcon>
          <BottomBarLabel>Profile</BottomBarLabel>
        </BottomBarItem>
      </BottomBar>
    </Example>
  )
}
