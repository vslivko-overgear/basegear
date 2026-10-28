import { Toc } from "@/showcase/toc"

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header>
      <div className="text-xs tracking-[0.08em] text-muted-foreground uppercase">{eyebrow}</div>
      <h1 className="mt-1 text-4xl font-bold tracking-tight in-data-[viewport=mobile]:text-3xl md:text-[40px]">{title}</h1>
      {lead && <p className="mt-3 max-w-[760px] text-lg text-foreground/80">{lead}</p>}
      <Toc />
    </header>
  )
}
