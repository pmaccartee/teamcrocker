import { Link, useRoute } from "wouter";
import { ArrowLeft, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/data/blog-posts";

function getArticle(slug: string | undefined) {
  return blogPosts.find((a) => a.slug === slug) ?? null;
}

export default function ArticlePage() {
  const [, params] = useRoute("/blog/:slug");
  const article = getArticle(params?.slug);

  if (!article) {
    return (
      <Layout>
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
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8">
            <Link href="/blog">
                <Button
                  asChild
                  variant="ghost"
                  className="pl-0 text-muted-foreground hover:text-foreground"
                  data-testid="button-article-back"
                >
                  <a data-testid="link-article-back">
                    <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
                    Back to Q&A
                  </a>
                </Button>
              </Link>
          </div>

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
      </div>
    </Layout>
  );
}
