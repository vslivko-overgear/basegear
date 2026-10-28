import type * as React from "react"

/** Makes a non-button element (an Item row) act as a button: click, Enter and Space. */
export function pressable(onPress: () => void) {
  return {
    role: "button",
    tabIndex: 0,
    onClick: onPress,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        onPress()
      }
    },
  } as const
}
