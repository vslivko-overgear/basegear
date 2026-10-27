import {
  HomeIcon,
  MessageCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react"

import {
  BottomBar,
  BottomBarBadge,
  BottomBarIcon,
  BottomBarItem,
  BottomBarLabel,
} from "@/styles/radix-nova/ui/bottom-bar"

export function BottomBarDemo() {
  return (
    <BottomBar defaultValue="home" className="max-w-sm rounded-xl border">
      <BottomBarItem value="home">
        <BottomBarIcon>
          <HomeIcon />
        </BottomBarIcon>
        <BottomBarLabel>Home</BottomBarLabel>
      </BottomBarItem>
      <BottomBarItem value="search">
        <BottomBarIcon>
          <SearchIcon />
        </BottomBarIcon>
        <BottomBarLabel>Search</BottomBarLabel>
      </BottomBarItem>
      <BottomBarItem value="cart">
        <BottomBarIcon>
          <ShoppingCartIcon />
          <BottomBarBadge>2</BottomBarBadge>
        </BottomBarIcon>
        <BottomBarLabel>Cart</BottomBarLabel>
      </BottomBarItem>
      <BottomBarItem value="chats">
        <BottomBarIcon>
          <MessageCircleIcon />
          <BottomBarBadge>8</BottomBarBadge>
        </BottomBarIcon>
        <BottomBarLabel>Chats</BottomBarLabel>
      </BottomBarItem>
      <BottomBarItem value="profile">
        <BottomBarIcon>
          <UserIcon />
        </BottomBarIcon>
        <BottomBarLabel>Profile</BottomBarLabel>
      </BottomBarItem>
    </BottomBar>
  )
}
