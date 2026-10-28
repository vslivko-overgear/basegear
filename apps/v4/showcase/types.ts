import type { ReactNode } from "react"

/** A control in the Settings panel for one prop of the Playground. */
export type ArgType =
  | { control: "text"; label?: string }
  | { control: "boolean"; label?: string }
  | { control: "radio"; options: readonly string[]; label?: string }
  | {
      control: "range"
      min: number
      max: number
      step?: number
      label?: string
    }

// Story args hold any props of the component they render.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Args = Record<string, any>

/** The Playground of a component page: default args, their controls, and how to render and print them. */
export type Story = {
  args: Args
  argTypes: Record<string, ArgType>
  render: (args: Args) => ReactNode
  /** JSX for "Show code"; by default the component name with the args that differ from the defaults. */
  code?: (args: Args) => string
}
