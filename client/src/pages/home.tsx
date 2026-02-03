import type React from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout";

const team = [
  {
    name: "Laura Ziedan",
    role: "Partner Agent",
    bio: "Local insight and calm execution—helping clients navigate timing, prep, and pricing with clarity.",
  },
  {
    name: "Patrick MacCartee",
    role: "Partner Agent",
    bio: "Strategic pricing, thoughtful strategy, and steady, relationship-driven guidance.",
  },
  {
    name: "Ilona Cample",
    role: "Partner Agent",
    bio: "Detail-forward operations and client care that keeps the process polished and low-friction.",
  },
] as const;

const neighborhoods = [
  {
    title: "Crocker Highlands",
    desc: "Tree-lined streets, iconic architecture, and an easy rhythm of neighborhood life.",
    image: "/images/crocker-street.jpg",
  },
  {
    title: "Trestle Glen",
    desc: "A tucked-away pocket with storybook homes and a true community feel.",
    image: "/images/trestle-glen.jpg",
  },
  {
    title: "Piedmont",
    desc: "Classic East Bay prestige with walkability and top-tier schools.",
    image: "/images/piedmont-havens.jpg",
  },
  {
    title: "Berkeley",
    desc: "A creative, architectural mix—north, hills, and beyond.",
    image: "/images/berkeley-uplands.webp",
  },
] as const;

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-black/10">
        <div className="absolute inset-0">
          <img
            src="/images/hero-street.jpg"
            alt="Crocker Highlands Street"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/90">
              <span className="h-px w-8 bg-white/60"></span>
              Luxury Real Estate · East Bay
            </div>

            <h1
              className="font-serif text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
              data-testid="text-hero-title"
            >
              Marketed with taste, <br/>
              <span className="italic">sold with precision.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg text-white/90 leading-relaxed font-light"
              data-testid="text-hero-subtitle"
            >
              We’re a three-agent team at The Grubb Company focused on Oakland’s most
              enduring neighborhoods—Crocker Highlands and Trestle Glen—serving Piedmont and
              Berkeley with clarity and calm.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button className="rounded-none h-12 px-8 text-base bg-white text-primary hover:bg-white/90" data-testid="button-hero-consult">
                Request a private consult
              </Button>
              <a
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-white/80"
                data-testid="link-hero-qa"
              >
                Read neighborhood Q&A
                <ArrowRight className="ml-2 size-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="border-t border-border/40 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-16 md:grid-cols-12">
             <div className="md:col-span-5 space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The Team</div>
                  <h2 className="font-serif text-4xl tracking-tight text-foreground" data-testid="text-team-title">
                    Three specialists.<br/>One polished experience.
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Crocker Team brings over 25 years of combined real estate experience to clients
                    in Crocker Highlands and across the greater East Bay.
                  </p>
                  <p>
                    Deeply rooted in the community, we’re known for thoughtful strategy, local insight,
                    and steady, relationship-driven guidance.
                  </p>
                  <p>
                    With backgrounds spanning real estate, education, finance, tech, and hospitality,
                    we blend analytical rigor with a clear understanding of people, place, and timing.
                  </p>
                  <p>
                    A shared focus on long-term value and generational wealth through real estate—along
                    with active involvement in the local community—helps clients move forward with
                    confidence and clarity.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="rounded-none border-primary/20 hover:border-primary hover:text-primary bg-transparent" data-testid="button-team-contact">
                    Get in touch with us
                  </Button>
                </div>
             </div>

             <div className="md:col-span-7 space-y-12">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/team.jpg"
                    alt="Crocker Highlands Team"
                    className="h-full w-full object-cover scale-x-[-1]"
                    loading="lazy"
                  />
                </div>
                
                <div className="grid gap-10 sm:grid-cols-3">
                  {team.map((m) => (
                    <div key={m.name} className="space-y-3">
                      <div className="font-serif text-lg leading-tight">{m.name}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.role}</div>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {m.bio}
                      </p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="community" className="border-t border-border/40 bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Community
              </div>
              <h2 className="font-serif text-4xl tracking-tight text-foreground mb-6">
                We show up.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                We’re major sponsors of Crocker Highlands Elementary School and active with the
                PTA—because the best neighborhoods are built by neighbors.
              </p>
              <Button className="rounded-none bg-primary text-white hover:bg-primary/90">
                Connect with us
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <img
                src="/images/crocker-school.jpg"
                alt="Crocker Highlands School"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
             <div className="space-y-3">
               <h3 className="font-serif text-lg">Local Context</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 We understand school patterns, street-by-street character, and what buyers value here.
               </p>
             </div>
             <div className="space-y-3">
               <h3 className="font-serif text-lg">Community Credibility</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Real relationships create authentic demand—not generic impressions.
               </p>
             </div>
             <div className="space-y-3">
               <h3 className="font-serif text-lg">Fast Answers</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Our Q&A library is built to answer the questions people actually search.
               </p>
             </div>
             <div className="space-y-3">
               <h3 className="font-serif text-lg">Polished Process</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Timing, pricing, prep, and storytelling—handled with clarity and taste.
               </p>
             </div>
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Where we work
              </div>
              <h2 className="font-serif text-4xl tracking-tight text-foreground">
                East Bay neighborhoods—<span className="italic text-muted-foreground">by feel, not hype.</span>
              </h2>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              Read Q&A by neighborhood
              <ArrowRight className="ml-2 size-4" />
            </a>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((n) => (
              <div key={n.title} className="group cursor-pointer space-y-4">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted transition-colors group-hover:bg-muted/80">
                  {n.image ? (
                    <img
                      src={n.image}
                      alt={n.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-secondary/50"></div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-xl">{n.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                  <div className="pt-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Explore Q&A
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="listings" className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Current Market
            </div>
            <h2 className="font-serif text-4xl tracking-tight text-foreground mb-6">
              Homes for Sale
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Explore active listings in Crocker Highlands, Trestle Glen, and our featured collection.
            </p>
            <Button asChild className="rounded-none h-12 px-8 text-base bg-primary text-white hover:bg-primary/90">
              <a 
                href="https://patrickmaccartee970.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNzQ2OA==" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Listings
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="valuation" className="border-t border-border/40 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
             Market Value
          </div>
          <h2 className="font-serif text-3xl tracking-tight text-foreground mb-8">
            What is your home worth in today's market?
          </h2>
          
          <div className="mx-auto max-w-2xl bg-background p-6 rounded-xl border border-border/40 shadow-sm">
             {/* @ts-ignore */}
             <realscout-home-value></realscout-home-value>
          </div>
        </div>
      </section>
    </Layout>
  );
}
