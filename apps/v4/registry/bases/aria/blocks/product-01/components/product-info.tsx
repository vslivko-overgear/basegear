import {
  ABOUT,
  ALSO,
  FAQ,
  REVIEWS,
  STEPS,
  WINS,
} from "@/registry/bases/aria/blocks/product-01/components/data"
import {
  ClockIcon,
  ShieldCheckIcon,
  SquareCheckIcon,
  TagIcon,
} from "@/registry/bases/aria/blocks/product-01/components/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/aria/ui/accordion"
import { Badge } from "@/registry/bases/aria/ui/badge"
import {
  Banner,
  BannerDescription,
  BannerTitle,
} from "@/registry/bases/aria/ui/banner"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/bases/aria/ui/breadcrumb"
import { Button } from "@/registry/bases/aria/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/aria/ui/card"
import { Grid, Section } from "@/registry/bases/aria/ui/layout"
import { Link } from "@/registry/bases/aria/ui/link"
import { RatingDisplay } from "@/registry/bases/aria/ui/rating"

const USPS = [
  { icon: ClockIcon, label: "90 lvl in 6 hours" },
  { icon: TagIcon, label: "Up to 20% off alts" },
  { icon: SquareCheckIcon, label: "Full AFK on Self-Play" },
  { icon: ShieldCheckIcon, label: "Manual, zero-ban" },
]

export function ProductTitle() {
  return (
    <Section className="flex flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              World of Warcraft: Midnight
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Power Leveling</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        WoW Midnight Level Boost
      </h1>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <RatingDisplay value={4.9} size="sm" />
        <b>4.9</b>
        <span className="text-muted-foreground">Trustpilot</span>
        <span className="text-muted-foreground">·</span>
        <span>
          <b>546,555</b> boosts completed
        </span>
      </div>
      <p className="text-lg">
        Hit 90 <span className="font-semibold text-primary">inside a day</span>{" "}
        and walk straight into your first M+10.
      </p>
      <div className="flex flex-wrap gap-2" aria-label="Main benefits">
        {USPS.map(({ icon: Icon, label }) => (
          <Badge key={label} variant="secondary">
            <Icon data-icon="inline-start" />
            {label}
          </Badge>
        ))}
      </div>
    </Section>
  )
}

export function ProductInfo() {
  return (
    <>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Your wins</h2>
        <Grid columns="repeat(auto-fit, minmax(16rem, 1fr))" gap={3}>
          {WINS.map(([emoji, highlight, ...rest], index) => (
            <Card key={index} size="sm">
              <CardContent className="flex gap-3 text-sm">
                <span aria-hidden="true">{emoji}</span>
                <p>
                  {highlight && (
                    <span className="font-semibold text-primary">
                      {highlight}
                    </span>
                  )}
                  {rest.join("")}
                </p>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Section>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <Grid columns="repeat(auto-fit, minmax(14rem, 1fr))" gap={3}>
          {["📋 Place order", "🗺️ Leveling starts", "✅ Endgame unlocked"].map(
            (title, index) => (
              <Card key={title} size="sm">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{STEPS[index]}</CardDescription>
                </CardHeader>
              </Card>
            )
          )}
        </Grid>
      </Section>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">What players say</h2>
        <Grid columns="repeat(auto-fit, minmax(16rem, 1fr))" gap={3}>
          {REVIEWS.map(([text, author]) => (
            <Card key={author} size="sm">
              <CardContent className="flex flex-col gap-2">
                <RatingDisplay value={5} size="sm" />
                <p>{text}</p>
                <span className="text-xs text-muted-foreground">
                  by {author}
                </span>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Section>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">You may also like</h2>
        <Grid columns="repeat(auto-fit, minmax(14rem, 1fr))" gap={3}>
          {ALSO.map((product) => (
            <Card
              key={product.title}
              size="sm"
              className="bg-linear-to-br from-primary/20 to-transparent"
            >
              <CardHeader>
                <CardTitle>
                  <Link href="#" underline="none">
                    {product.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-primary">
                  {product.lines[0][1]}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto justify-between gap-2">
                {product.badge ? (
                  <Badge variant="secondary">{product.badge}</Badge>
                ) : (
                  <span />
                )}
                <span className="text-sm">
                  From <b>{product.price}</b>
                </span>
              </CardFooter>
            </Card>
          ))}
        </Grid>
        <Banner variant="info" className="items-center">
          <BannerTitle>Need something else?</BannerTitle>
          <BannerDescription className="flex flex-wrap items-center justify-between gap-3">
            Request a custom offer — we reply in 2 minutes.
            <Button size="sm">Request custom offer</Button>
          </BannerDescription>
        </Banner>
      </Section>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">About the service</h2>
        <Accordion allowsMultipleExpanded>
          <AccordionItem id="methods">
            <AccordionTrigger>Boost methods explained</AccordionTrigger>
            <AccordionContent>
              Self-Play: you stay in the game and take part yourself. Piloted: a
              booster plays on your character through a secure VPN. Remote: a
              booster plays through remote access without getting your account
              details.
            </AccordionContent>
          </AccordionItem>
          {ABOUT.map((section) => (
            <AccordionItem key={section.h} id={section.h}>
              <AccordionTrigger>{section.h}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                {section.p.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {section.ul && (
                  <ul className="list-disc pl-5">
                    {section.ul.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )}
                {section.after?.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <Section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <Accordion allowsMultipleExpanded>
          {FAQ.map(([question, answer]) => (
            <AccordionItem key={question} id={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  )
}
