import { Link, useRoute } from "wouter";
import { ArrowLeft, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Article = {
  slug: string;
  title: string;
  neighborhood: string;
  updated: string;
  question: string;
  answer: string[];
  seo: {
    keywords: string[];
    related: string[];
  };
};

const articles: Article[] = [
  {
    slug: "best-blocks-crocker-highlands",
    title: "What are the best blocks in Crocker Highlands?",
    neighborhood: "Crocker Highlands",
    updated: "2026-02-02",
    question:
      "What are the best blocks in Crocker Highlands for walkability, architecture, and day-to-day feel?",
    answer: [
      "There isn’t one single ‘best’ block—buyers tend to value a mix of street character, proximity to Lakeshore, and how the home sits (light, privacy, and traffic).",
      "A simple way to narrow it down: start with your daily rhythm. If you want coffee-and-walkability, prioritize areas that feel easiest to Lakeshore. If you want quieter, prioritize the interior streets and hillside pockets.",
      "The right block is also price-sensitive: two streets can feel similar, but the view corridor, the lot shape, or the number of steps can move the value meaningfully.",
      "If you share your ‘must-haves’ (walk score vs. view vs. minimal stairs), we can suggest the micro-areas that match—without overpaying.",
    ],
    seo: {
      keywords: [
        "best blocks in Crocker Highlands",
        "Crocker Highlands Oakland homes",
        "Crocker Highlands neighborhood guide",
      ],
      related: [
        "Crocker Highlands vs Trestle Glen",
        "Crocker Highlands walkability",
        "Crocker Highlands school proximity",
      ],
    },
  },
  {
    slug: "crocker-highlands-price-premium",
    title: "Why do Crocker Highlands homes command a premium?",
    neighborhood: "Crocker Highlands",
    updated: "2026-02-02",
    question:
      "Why are home prices higher in Crocker Highlands compared to nearby Oakland neighborhoods?",
    answer: [
      "Premiums usually come from a combination of architecture, consistency of street character, and the buyer pool’s perception of long-term value.",
      "Crocker Highlands also benefits from ‘low-friction living’: quick access to Lakeshore, parks, and commute corridors while still feeling residential.",
      "Within the neighborhood, premiums concentrate around light, layout, and minimal deferred maintenance—buyers pay for certainty.",
      "If you’re selling, the goal is to make your home ‘read’ like the premium version of itself—through prep, storytelling, and pricing with proof.",
    ],
    seo: {
      keywords: [
        "Crocker Highlands price premium",
        "Crocker Highlands home values",
        "Oakland luxury real estate",
      ],
      related: ["Crocker Highlands listing strategy", "Oakland market trends"],
    },
  },
  {
    slug: "trestle-glen-vs-crocker-highlands",
    title: "Trestle Glen vs. Crocker Highlands: which fits your lifestyle?",
    neighborhood: "Trestle Glen",
    updated: "2026-02-02",
    question:
      "How do Trestle Glen and Crocker Highlands compare for buyers who want charm, walkability, and community?",
    answer: [
      "Both are beautiful and ‘classic Oakland,’ but they live differently. Crocker Highlands often feels closer to the Lakeshore corridor; Trestle Glen can feel a touch more tucked-away and intimate.",
      "Buyers who prioritize a consistent architectural ‘edit’ often gravitate toward Crocker Highlands. Buyers who want a softer, storybook pocket sometimes fall for Trestle Glen.",
      "The best choice usually comes down to commute direction, your daily errands, and how you want the streets to feel when you walk outside.",
    ],
    seo: {
      keywords: [
        "Trestle Glen vs Crocker Highlands",
        "Trestle Glen Oakland",
        "Crocker Highlands vs Trestle Glen",
      ],
      related: ["Trestle Glen homes", "Crocker Highlands homes"],
    },
  },
  {
    slug: "selling-in-crocker-highlands-prep",
    title: "Selling in Crocker Highlands: what prep is actually worth it?",
    neighborhood: "Crocker Highlands",
    updated: "2026-02-02",
    question:
      "If we’re selling in Crocker Highlands, what improvements actually increase the result?",
    answer: [
      "In luxury neighborhoods, buyers pay for ‘move-in certainty’—not novelty. The highest ROI usually comes from clarity and confidence: paint, lighting, landscaping, and staging that makes the home read clean and intentional.",
      "We typically prioritize: (1) exterior first impression, (2) kitchen/baths ‘freshness,’ (3) flooring consistency, and (4) inspection strategy to reduce surprises.",
      "The goal isn’t to over-renovate—it’s to remove questions so buyers can emotionally commit.",
    ],
    seo: {
      keywords: [
        "selling in Crocker Highlands",
        "Crocker Highlands listing prep",
        "Oakland home staging",
      ],
      related: ["Crocker Highlands pricing", "Oakland inspection tips"],
    },
  },
];

function getArticle(slug: string | undefined) {
  return articles.find((a) => a.slug === slug) ?? null;
}

export default function ArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const article = getArticle(params?.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Card className="rounded-3xl border bg-card p-10 text-center">
            <div className="font-serif text-2xl" data-testid="text-article-missing-title">
              Article not found
            </div>
            <div
              className="mt-2 text-sm text-muted-foreground"
              data-testid="text-article-missing-body"
            >
              Try going back to the Q&A index.
            </div>
            <div className="mt-6">
              <Link href="/blog">
                <Button asChild className="rounded-full" data-testid="button-article-missing-back">
                  <a data-testid="link-article-missing-back">Back to Q&A</a>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/65">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/blog">
            <Button
              asChild
              variant="outline"
              className="rounded-full"
              data-testid="button-article-back"
            >
              <a data-testid="link-article-back">
                <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
                All Q&A
              </a>
            </Button>
          </Link>

          <Button variant="outline" className="rounded-full" data-testid="button-article-save">
            <Bookmark className="mr-2 size-4" aria-hidden="true" />
            Save
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full border bg-card px-2.5 py-1 text-xs text-muted-foreground"
              data-testid="pill-article-neighborhood"
            >
              {article.neighborhood}
            </span>
            <span
              className="inline-flex items-center rounded-full border bg-card px-2.5 py-1 text-xs text-muted-foreground"
              data-testid="pill-article-updated"
            >
              Updated {article.updated}
            </span>
          </div>

          <h1
            className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight"
            data-testid="text-article-title"
          >
            {article.title}
          </h1>

          <p className="mt-4 text-base text-muted-foreground" data-testid="text-article-question">
            {article.question}
          </p>

          <Separator className="my-8" />

          <Card className="rounded-3xl border bg-card p-7">
            <div className="space-y-4">
              {article.answer.map((p, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-7 text-foreground/90"
                  data-testid={`text-article-paragraph-${idx}`}
                >
                  {p}
                </p>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  SEO keywords
                </div>
                <div className="mt-2 flex flex-wrap gap-2" data-testid="list-article-keywords">
                  {article.seo.keywords.map((k) => (
                    <span
                      key={k}
                      className="inline-flex items-center rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      data-testid={`pill-keyword-${k.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Related questions
                </div>
                <ul className="mt-2 space-y-2" data-testid="list-article-related">
                  {article.seo.related.map((r) => (
                    <li
                      key={r}
                      className="text-sm text-muted-foreground"
                      data-testid={`text-related-${r.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      • {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7">
              <Button className="rounded-full" data-testid="button-article-cta">
                Talk to the team
              </Button>
            </div>
          </Card>

          <div className="mt-10 rounded-3xl border bg-card p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Disclosure
            </div>
            <div className="mt-2 text-sm text-muted-foreground" data-testid="text-article-disclosure">
              This Q&A is general information and not legal or financial advice. For guidance specific
              to your property or goals, contact the Crocker Highlands Team at The Grubb Company.
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground sm:px-6">
          <div data-testid="text-article-footer">Crocker Highlands Team · The Grubb Company</div>
        </div>
      </footer>
    </div>
  );
}
