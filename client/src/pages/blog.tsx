import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/contact-dialog";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/data/blog-posts";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter((a) =>
      [a.title, a.excerpt, a.neighborhood, a.intent, a.slug]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <Card className="rounded-3xl border bg-card p-6">
              <div className="text-sm font-medium">Search the library</div>
              <div className="mt-3 flex items-center gap-2">
                <div className="grid size-10 place-items-center rounded-2xl border bg-background">
                  <Search className="size-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try: 'Trestle Glen', 'pricing', 'PTA'…"
                  className="h-10 rounded-2xl"
                  data-testid="input-blog-search"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground" data-testid="text-blog-hint">
                Each post is structured like a buyer/seller conversation: direct questions,
                direct answers, and local nuance.
              </p>

              <Separator className="my-5" />

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  What you’ll find
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li data-testid="text-blog-bullet-1">
                    • Neighborhood feel, blocks, and micro-markets
                  </li>
                  <li data-testid="text-blog-bullet-2">
                    • Pricing, prep, and negotiation strategy
                  </li>
                  <li data-testid="text-blog-bullet-3">
                    • School proximity + lifestyle considerations
                  </li>
                  <li data-testid="text-blog-bullet-4">• Market explainers in plain English</li>
                </ul>
              </div>

              <div className="mt-6">
                <ContactDialog>
                  <Button className="w-full rounded-2xl" data-testid="button-blog-contact">
                    Ask us a question
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Button>
                </ContactDialog>
              </div>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4">
              {filtered.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`}>
                  <a className="group" data-testid={`link-article-${a.slug}`}>
                    <Card className="hover-elevate rounded-3xl border bg-card p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <Pill>{a.neighborhood}</Pill>
                        <Pill>{a.intent}</Pill>
                        <Pill>Updated {a.updated}</Pill>
                      </div>
                      <div
                        className="mt-3 font-serif text-2xl leading-tight"
                        data-testid={`text-article-title-${a.slug}`}
                      >
                        {a.title}
                      </div>
                      <div
                        className="mt-2 text-sm text-muted-foreground"
                        data-testid={`text-article-excerpt-${a.slug}`}
                      >
                        {a.excerpt}
                      </div>
                      <div className="mt-4 inline-flex items-center text-sm font-medium">
                        Read post
                        <ArrowRight
                          className="ml-2 size-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </Card>
                  </a>
                </Link>
              ))}

              {filtered.length === 0 ? (
                <Card className="rounded-3xl border bg-card p-10 text-center">
                  <div className="font-serif text-2xl" data-testid="text-blog-empty-title">
                    No matches.
                  </div>
                  <div
                    className="mt-2 text-sm text-muted-foreground"
                    data-testid="text-blog-empty-body"
                  >
                    Try searching a neighborhood name ("Crocker Highlands") or an intent
                    ("Seller").
                  </div>
                </Card>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
