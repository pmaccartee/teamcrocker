import type React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  // Helper to construct links. If on home, use hash only (for smooth scroll potentially, though browser handles /#hash too).
  // Actually, standardizing on /#hash is safest for global navigation.
  const getLink = (hash: string) => `/${hash}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="/"
            className="group inline-flex items-center gap-3"
            data-testid="link-home"
          >
            <div className="flex items-center" aria-hidden="true">
               <img src="/images/grubb-logo-g.png" alt="The Grubb Company" className="h-14 w-auto" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-base tracking-tight">
                Crocker Highlands & Trestle Glen
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">The Grubb Company</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="/#neighborhoods"
              className="text-muted-foreground transition-colors hover:text-primary"
              data-testid="link-neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              href="/#team"
              className="text-muted-foreground transition-colors hover:text-primary"
              data-testid="link-team"
            >
              Team
            </a>
            <a
              href="/#community"
              className="text-muted-foreground transition-colors hover:text-primary"
              data-testid="link-community"
            >
              Community
            </a>
            <Link href="/blog">
              <a
                className={`text-muted-foreground transition-colors hover:text-primary ${location.startsWith("/blog") ? "text-primary font-medium" : ""}`}
                data-testid="link-blog"
              >
                Q&A Blog
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/blog">
              <a
                className="hidden text-sm text-muted-foreground transition-colors hover:text-primary md:inline-flex"
                data-testid="link-explore-blog"
              >
                Explore Q&A
              </a>
            </Link>
            <Button className="rounded-none bg-primary text-white hover:bg-primary/90" data-testid="button-contact">
              Contact
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <div className="font-serif text-lg">Crocker Highlands Team</div>
            <div className="text-sm text-muted-foreground">
              Patrick MacCartee · Laura Ziedan · Ilona Campbell
            </div>
            <div className="text-xs text-muted-foreground/60 max-w-sm">
              Affiliated with The Grubb Company. All information deemed reliable but
              not guaranteed. DRE# 01234567
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-6 md:justify-end">
            <Link href="/blog">
              <a
                className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary"
                data-testid="link-footer-blog"
              >
                Read the Q&A Blog
              </a>
            </Link>
            <Button className="rounded-none bg-primary text-white hover:bg-primary/90" data-testid="button-footer-contact">
              Request a consult
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
