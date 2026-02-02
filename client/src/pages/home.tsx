import type React from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const team = [
  {
    name: "Patrick MacCartee",
    role: "Partner Agent",
    bio: "Strategic pricing, clean negotiation, and a calm process for high-stakes decisions.",
  },
  {
    name: "Laura Ziedan",
    role: "Partner Agent",
    bio: "Design-forward marketing and neighborhood-level insight that buyers can feel.",
  },
  {
    name: "Ilona Cample",
    role: "Partner Agent",
    bio: "Detail-obsessed operations and client care that makes every step feel effortless.",
  },
] as const;

const neighborhoods = [
  {
    title: "Crocker Highlands",
    desc: "Tree-lined streets, iconic architecture, and an easy rhythm of neighborhood life.",
  },
  {
    title: "Trestle Glen",
    desc: "A tucked-away pocket with storybook homes and a true community feel.",
  },
  {
    title: "Piedmont",
    desc: "Classic East Bay prestige with walkability and top-tier schools.",
  },
  {
    title: "Berkeley",
    desc: "A creative, architectural mix—north, hills, and beyond.",
  },
] as const;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/65">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="/"
            className="group inline-flex items-center gap-3"
            data-testid="link-home"
          >
            <div
              className="grid size-10 place-items-center rounded-xl border bg-card shadow-sm"
              aria-hidden="true"
            >
              <span className="font-serif text-lg tracking-tight">CH</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-base tracking-tight">
                Crocker Highlands Team
              </div>
              <div className="text-xs text-muted-foreground">The Grubb Company</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a
              href="#neighborhoods"
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              href="#team"
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-team"
            >
              Team
            </a>
            <a
              href="#community"
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-community"
            >
              Community
            </a>
            <a
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-blog"
            >
              Q&A Blog
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="hidden rounded-full border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted md:inline-flex"
              data-testid="link-explore-blog"
            >
              Explore Q&A
            </a>
            <Button className="rounded-full" data-testid="button-contact">
              Contact
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="space-y-2">
            <div className="font-serif text-base">Crocker Highlands Team</div>
            <div className="text-sm text-muted-foreground">
              Patrick MacCartee · Laura Ziedan · Ilona Cample
            </div>
            <div className="text-xs text-muted-foreground">
              Affiliated with The Grubb Company. All information deemed reliable but
              not guaranteed.
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-3 md:justify-end">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
              data-testid="link-footer-blog"
            >
              Read the Q&A Blog
            </a>
            <Button className="rounded-full" data-testid="button-footer-contact">
              Request a consult
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Shell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grain">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_0%,hsl(var(--accent)/0.18),transparent_55%),radial-gradient(900px_circle_at_85%_15%,hsl(var(--primary)/0.22),transparent_60%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span
                  className="inline-flex size-1.5 rounded-full bg-[hsl(var(--accent))]"
                  aria-hidden="true"
                />
                Local specialists · Luxury homes · East Bay
              </div>

              <h1
                className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl"
                data-testid="text-hero-title"
              >
                Crocker Highlands & Trestle Glen—
                <span className="text-balance">marketed with taste, sold with precision.</span>
              </h1>

              <p
                className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
                data-testid="text-hero-subtitle"
              >
                We’re a three-agent team at The Grubb Company focused on Oakland’s most
                enduring neighborhoods—Crocker Highlands and Trestle Glen—serving Piedmont and
                Berkeley as well.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="rounded-full" data-testid="button-hero-consult">
                  Request a private consult
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Button>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
                  data-testid="link-hero-qa"
                >
                  Read neighborhood Q&A
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <Card
                  className="hover-elevate rounded-2xl border bg-card/80 p-4 backdrop-blur"
                  data-testid="card-credibility-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 place-items-center rounded-xl border bg-background">
                      <ShieldCheck
                        className="size-4 text-[hsl(var(--primary))]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Trusted guidance</div>
                      <div className="text-xs text-muted-foreground">
                        Clear strategy + calm execution.
                      </div>
                    </div>
                  </div>
                </Card>
                <Card
                  className="hover-elevate rounded-2xl border bg-card/80 p-4 backdrop-blur"
                  data-testid="card-credibility-2"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 place-items-center rounded-xl border bg-background">
                      <Sparkles
                        className="size-4 text-[hsl(var(--accent))]"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Luxury presentation</div>
                      <div className="text-xs text-muted-foreground">
                        Editorial design + modern reach.
                      </div>
                    </div>
                  </div>
                </Card>
                <Card
                  className="hover-elevate rounded-2xl border bg-card/80 p-4 backdrop-blur"
                  data-testid="card-credibility-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid size-9 place-items-center rounded-xl border bg-background">
                      <MapPin className="size-4 text-[hsl(var(--primary))]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Neighborhood depth</div>
                      <div className="text-xs text-muted-foreground">
                        Crocker + Trestle Glen focus.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_0%_0%,hsl(var(--accent)/0.22),transparent_55%),radial-gradient(700px_circle_at_90%_35%,hsl(var(--primary)/0.25),transparent_60%)]" />
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Primary focus</div>
                      <div className="font-serif text-xl">Crocker Highlands</div>
                    </div>
                    <div
                      className="rounded-full border bg-background/70 px-3 py-1 text-xs"
                      data-testid="pill-focus"
                    >
                      Oakland, CA
                    </div>
                  </div>

                  <Separator className="my-5" />

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium" data-testid="text-signal-title-1">
                        Marketing that feels like the home
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid="text-signal-body-1"
                      >
                        Warm editorial photography, clean typography, and story-led property pages.
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium" data-testid="text-signal-title-2">
                        Pricing with proof
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid="text-signal-body-2"
                      >
                        Data-informed positioning + local buyer behavior, explained in plain English.
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium" data-testid="text-signal-title-3">
                        Community-first presence
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid="text-signal-body-3"
                      >
                        Major sponsors of Crocker Highlands Elementary; active with the PTA.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border bg-background/70 p-4">
                    <div className="text-xs text-muted-foreground">Fast answers</div>
                    <div className="mt-1 font-serif text-lg" data-testid="text-qa-highlight">
                      “What are the best blocks in Crocker Highlands?”
                    </div>
                    <div className="mt-3">
                      <a
                        href="/blog"
                        className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
                        data-testid="link-qa-highlight"
                      >
                        Browse Q&A
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Where we work
              </div>
              <h2
                className="mt-2 font-serif text-3xl tracking-tight"
                data-testid="text-neighborhoods-title"
              >
                East Bay neighborhoods—by feel, not hype.
              </h2>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
              data-testid="link-neighborhoods-blog"
            >
              Read Q&A by neighborhood
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {neighborhoods.map((n) => (
              <Card
                key={n.title}
                className="hover-elevate rounded-3xl border bg-card p-6"
                data-testid={`card-neighborhood-${n.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="font-serif text-2xl">{n.title}</div>
                <div className="mt-2 max-w-prose text-sm text-muted-foreground">{n.desc}</div>
                <div className="mt-5">
                  <a
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
                    data-testid={`link-neighborhood-${n.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    Explore Q&A
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                The team
              </div>
              <h2
                className="mt-2 font-serif text-3xl tracking-tight"
                data-testid="text-team-title"
              >
                Three specialists. One polished experience.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground" data-testid="text-team-subtitle">
                We’re a boutique team within The Grubb Company—high-touch, design-forward, and
                deeply local.
              </p>
            </div>
            <div className="md:col-span-7">
              <Card className="rounded-3xl border bg-card p-6">
                <div className="text-sm text-muted-foreground">
                  Expect weekly Q&A posts, neighborhood guides, and market explainers—written for
                  buyers and sellers who want clarity.
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:opacity-95"
                    data-testid="link-team-blog"
                  >
                    Browse the Q&A blog
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </a>
                  <Button variant="outline" className="rounded-full" data-testid="button-team-contact">
                    Get in touch
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <Card
              className="overflow-hidden rounded-3xl border bg-card md:col-span-7"
              data-testid="card-team-photo"
            >
              <div className="relative">
                <img
                  src="/images/team.jpg"
                  alt="Crocker Highlands Team at The Grubb Company"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  loading="eager"
                  data-testid="img-team-photo"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.44))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur"
                    data-testid="pill-team-photo-caption"
                  >
                    Patrick MacCartee · Ilona Cample · Laura Ziedan
                  </div>
                </div>
              </div>
            </Card>

            <div className="md:col-span-5">
              <div className="grid gap-4">
                {team.map((m) => (
                  <Card
                    key={m.name}
                    className="hover-elevate rounded-3xl border bg-card p-6"
                    data-testid={`card-team-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                    <div
                      className="mt-1 font-serif text-2xl"
                      data-testid={`text-team-name-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {m.name}
                    </div>
                    <p
                      className="mt-3 text-sm text-muted-foreground"
                      data-testid={`text-team-bio-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {m.bio}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        className="rounded-full"
                        data-testid={`button-team-email-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full"
                        data-testid={`button-team-call-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        Call
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Card className="overflow-hidden rounded-3xl border bg-card">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="relative md:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_40%_10%,hsl(var(--accent)/0.25),transparent_55%),linear-gradient(180deg,hsl(var(--primary)/0.18),transparent_60%)]" />
                <div className="relative p-8">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Community
                  </div>
                  <div
                    className="mt-2 font-serif text-3xl tracking-tight"
                    data-testid="text-community-title"
                  >
                    We show up.
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground" data-testid="text-community-body">
                    We’re major sponsors of Crocker Highlands Elementary School and active with the
                    PTA—because the best neighborhoods are built by neighbors.
                  </p>
                  <div className="mt-6">
                    <Button className="rounded-full" data-testid="button-community-connect">
                      Connect with us
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="rounded-2xl border bg-background p-5" data-testid="card-community-1">
                      <div className="text-xs text-muted-foreground">What this means for clients</div>
                      <div className="mt-1 font-serif text-xl">Local context</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        We understand school patterns, street-by-street character, and what buyers
                        value here.
                      </div>
                    </Card>
                    <Card className="rounded-2xl border bg-background p-5" data-testid="card-community-2">
                      <div className="text-xs text-muted-foreground">How we market</div>
                      <div className="mt-1 font-serif text-xl">Community credibility</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Real relationships create authentic demand—not generic impressions.
                      </div>
                    </Card>
                    <Card className="rounded-2xl border bg-background p-5" data-testid="card-community-3">
                      <div className="text-xs text-muted-foreground">For buyers</div>
                      <div className="mt-1 font-serif text-xl">Fast answers</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Our Q&A library is built to answer the questions people actually search.
                      </div>
                    </Card>
                    <Card className="rounded-2xl border bg-background p-5" data-testid="card-community-4">
                      <div className="text-xs text-muted-foreground">For sellers</div>
                      <div className="mt-1 font-serif text-xl">Polished process</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Timing, pricing, prep, and storytelling—handled with clarity and taste.
                      </div>
                    </Card>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-muted-foreground" data-testid="text-community-cta">
                      Want a specific answer? Start here.
                    </div>
                    <a
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-muted"
                      data-testid="link-community-blog"
                    >
                      Browse Crocker Highlands Q&A
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Shell>
  );
}
