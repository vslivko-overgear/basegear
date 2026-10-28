import { getCatalog } from "@/showcase/docs"
import { showcaseFontVariables } from "@/showcase/fonts"
import { ShowcaseShell } from "@/showcase/shell"
import { SHOWCASE_THEME_CSS } from "@/showcase/theme"

export default async function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  const pages = await getCatalog()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHOWCASE_THEME_CSS }} />
      <div className={`${showcaseFontVariables} contents`}>
        <ShowcaseShell pages={pages}>{children}</ShowcaseShell>
      </div>
    </>
  )
}
