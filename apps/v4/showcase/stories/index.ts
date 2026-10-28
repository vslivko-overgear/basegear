import type { Story } from "@/showcase/types"

import { button } from "./button"
import { segmentedControl } from "./segmented-control"

/** Playgrounds by component page slug. A page without one shows its props and examples only. */
export const STORIES: Record<string, Story> = {
  button,
  "segmented-control": segmentedControl,
}
