import { showcaseFontVariables } from "@/showcase/fonts"
import { SHOWCASE_THEME_CSS } from "@/showcase/theme"

// Blocks render from the registry source, whose cn-* classes the baseui style resolves under .style-baseui.
import "@/app/style-registry.css"

// A block alone on the page, in the baseui theme (the same CSS the showcase uses).
export default function BlockViewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHOWCASE_THEME_CSS }} />
      <div data-showcase className={`${showcaseFontVariables} style-baseui bg-background font-sans text-foreground`}>
        {children}
      </div>
    </>
  )
}
