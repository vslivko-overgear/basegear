import type { Story } from "@/showcase/types"

import { accordion } from "./accordion"
import { alert } from "./alert"
import { alertDialog } from "./alert-dialog"
import { avatar } from "./avatar"
import { badge } from "./badge"
import { banner } from "./banner"
import { bottomBar } from "./bottom-bar"
import { breadcrumb } from "./breadcrumb"
import { button } from "./button"
import { card } from "./card"
import { checkbox } from "./checkbox"
import { chip } from "./chip"
import { dialog } from "./dialog"
import { drawer } from "./drawer"
import { empty } from "./empty"
import { input } from "./input"
import { inputGroup } from "./input-group"
import { item } from "./item"
import { kbd } from "./kbd"
import { link } from "./link"
import { nativeSelect } from "./native-select"
import { navbar } from "./navbar"
import { numberInput } from "./number-input"
import { pagination } from "./pagination"
import { popover } from "./popover"
import { progress } from "./progress"
import { radioGroup } from "./radio-group"
import { rating } from "./rating"
import { segmentedControl } from "./segmented-control"
import { select } from "./select"
import { separator } from "./separator"
import { sheet } from "./sheet"
import { skeleton } from "./skeleton"
import { slider } from "./slider"
import { spinner } from "./spinner"
import { status } from "./status"
import { switchStory } from "./switch"
import { tabs } from "./tabs"
import { textarea } from "./textarea"
import { toggle } from "./toggle"
import { toggleGroup } from "./toggle-group"
import { tooltip } from "./tooltip"

/** Playgrounds by component page slug. A page without one shows its props and examples only. */
export const STORIES: Record<string, Story> = {
  accordion,
  alert,
  "alert-dialog": alertDialog,
  avatar,
  badge,
  banner,
  "bottom-bar": bottomBar,
  breadcrumb,
  button,
  card,
  checkbox,
  chip,
  dialog,
  drawer,
  empty,
  input,
  "input-group": inputGroup,
  item,
  kbd,
  link,
  "native-select": nativeSelect,
  navbar,
  "number-input": numberInput,
  pagination,
  popover,
  progress,
  "radio-group": radioGroup,
  rating,
  "segmented-control": segmentedControl,
  select,
  separator,
  sheet,
  skeleton,
  slider,
  spinner,
  status,
  switch: switchStory,
  tabs,
  textarea,
  toggle,
  "toggle-group": toggleGroup,
  tooltip,
}
