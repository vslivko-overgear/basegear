import { cn } from "cn"

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        "cn-navbar grid w-full grid-cols-[1fr_minmax(0,auto)_1fr] items-center",
        className
      )}
      {...props}
    />
  )
}

function NavbarStart({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-start"
      className={cn("cn-navbar-start flex items-center", className)}
      {...props}
    />
  )
}

function NavbarHeading({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-heading"
      className={cn("cn-navbar-heading min-w-0 text-center", className)}
      {...props}
    />
  )
}

function NavbarTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="navbar-title"
      className={cn("cn-navbar-title truncate", className)}
      {...props}
    />
  )
}

function NavbarSubtitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-subtitle"
      className={cn("cn-navbar-subtitle truncate", className)}
      {...props}
    />
  )
}

function NavbarEnd({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-end"
      className={cn("cn-navbar-end flex items-center justify-end", className)}
      {...props}
    />
  )
}

export {
  Navbar,
  NavbarStart,
  NavbarHeading,
  NavbarTitle,
  NavbarSubtitle,
  NavbarEnd,
}
