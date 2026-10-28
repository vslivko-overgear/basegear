import {
  DISCLAIMER,
  FOOTER,
  OTHER_GAMES,
} from "@/registry/bases/base/blocks/product-01/components/data"
import { Grid } from "@/registry/bases/base/ui/layout"
import { Link } from "@/registry/bases/base/ui/link"
import { Separator } from "@/registry/bases/base/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-6">
        <Grid columns="repeat(auto-fit, minmax(12rem, 1fr))" gap={6}>
          {Object.entries(FOOTER).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-2">
              <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {title}
              </h4>
              {links.map((link) => (
                <Link key={link} href="#" underline="hover" className="text-sm">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </Grid>
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Other games
          </h4>
          <Grid columns="repeat(auto-fill, minmax(11rem, 1fr))" gap={2}>
            {OTHER_GAMES.map((game) => (
              <Link key={game} href="#" underline="hover" className="text-sm">
                {game}
              </Link>
            ))}
          </Grid>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">{DISCLAIMER}</p>
        <p className="text-xs text-muted-foreground">
          © Overgear 2018-2026. All rights reserved. Diagorou 4, Kermia
          Building, 3rd floor, Nicosia, Cyprus. Reg. number: HE395043
        </p>
      </div>
    </footer>
  )
}
