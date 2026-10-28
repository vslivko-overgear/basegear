export const STYLES = [
  {
    name: "baseui",
    title: "baseui",
    description: "Filled, rounded, no outlines. Overgear colors.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        color="currentColor"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="5"
          fill="currentColor"
        ></rect>
      </svg>
    ),
  },
] as const

export type Style = (typeof STYLES)[number]
