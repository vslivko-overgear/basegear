import * as React from "react"
import { cn } from "cn"
import { type RegistryItemFile } from "shadcn/schema"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry"
import { BlockViewer } from "@/components/block-viewer"
import { ComponentPreview } from "@/components/component-preview"
import { type Style } from "@/registry/_legacy-styles"

export async function BlockDisplay({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
}) {
  // Blocks that exist only in the base registries (no legacy new-york-v4 copy) render with base-nova.
  const legacyItem = await getCachedRegistryItem(name, styleName)
  const resolvedStyleName = legacyItem?.files ? styleName : "base-nova"
  const item = legacyItem?.files
    ? legacyItem
    : await getCachedRegistryItem(name, resolvedStyleName)

  if (!item?.files) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <BlockViewer
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      styleName={resolvedStyleName}
    >
      <ComponentPreview
        name={item.name}
        styleName={resolvedStyleName}
        hideCode
        className={cn(
          "my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0",
          item.meta?.containerClassName
        )}
      />
    </BlockViewer>
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    return await getRegistryItem(name, styleName)
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null
    }

    return await createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: RegistryItemFile[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    )
  }
)
