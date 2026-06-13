import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        דלג לתוכן הראשי
      </a>
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="font-serif text-lg tracking-tight text-ink">
            איריס בודנהיימר
            <span className="mr-2 text-xs font-sans font-normal text-muted-foreground">
              עו״ד · מגשרת · נוטריונית
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition hover:text-bordeaux"
          >
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </header>

      <main id="main-content">

        <section className="paper-texture border-b border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
            <p className="eyebrow">{eyebrow}</p>
            <span className="rule-gold mt-6 mb-6 block" />
            <h1 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
            <div className="legal-prose space-y-6 text-[17px] leading-loose text-ink/85">
              {children}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-serif text-ink">
            איריס בודנהיימר, עו״ד · מגשרת · נוטריונית
          </p>
          <p>© {new Date().getFullYear()} כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-serif text-2xl text-ink md:text-3xl">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 font-serif text-xl text-ink">{children}</h3>
  );
}
