import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/data/blog-posts";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border/50 bg-secondary/50 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Trends & Insights
          </div>
          <h1 className="font-serif text-5xl tracking-tight text-foreground mb-6" data-testid="text-blog-title">
            Real Estate Decoded.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            No fluff, just practical Q&A insights for Crocker Highlands, Trestle Glen, Piedmont, and the greater East Bay.
          </p>
          <div className="w-full max-w-md relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, neighborhoods, or questions..."
              className="h-14 w-full rounded-none pl-12 pr-4 bg-background border-border/80 focus-visible:ring-1 focus-visible:ring-primary shadow-sm"
              data-testid="input-blog-search"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`}>
                <a className="group flex h-full" data-testid={`link-article-${a.slug}`}>
                  <Card className="flex w-full flex-col overflow-hidden rounded-none border-border/40 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                    <div className="flex h-full flex-col p-8">
                      <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Pill>{a.neighborhood}</Pill>
                        <Pill>{a.intent}</Pill>
                      </div>
                      <h3
                        className="mb-4 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-primary"
                        data-testid={`text-article-title-${a.slug}`}
                      >
                        {a.title}
                      </h3>
                      <p
                        className="mb-8 line-clamp-3 flex-grow text-sm leading-relaxed text-muted-foreground"
                        data-testid={`text-article-excerpt-${a.slug}`}
                      >
                        {a.excerpt}
                      </p>
                      <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        Read Insight
                        <ArrowRight
                          className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="font-serif text-2xl mb-2" data-testid="text-blog-empty-title">
                No matching insights found.
              </div>
              <p className="text-muted-foreground" data-testid="text-blog-empty-body">
                Try searching for a different neighborhood or topic.
              </p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-none"
                onClick={() => setQuery("")}
              >
                Clear search
              </Button>
            </div>
          ) : null}
        </motion.div>
      </div>
    </Layout>
  );
}
