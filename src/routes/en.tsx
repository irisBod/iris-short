import { createFileRoute, Link } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { Linkedin, Facebook } from "lucide-react";
import irisPortrait from "@/assets/iris-portrait.webp.asset.json";
import ibLogo from "@/assets/ib-logo-navy.png.asset.json";

const linkedinUrl = "https://www.linkedin.com/in/iris-bodenheimer-44734";
const facebookUrl = "https://www.facebook.com/iris.bodenheimer.lawyer";

const openSocialLink = (url: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  try {
    (window.top ?? window).location.href = url;
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Iris Bodenheimer, Adv. | Lawyer, Mediator & Notary" },
      { name: "description", content: "Nearly 38 years of experience advising companies, business owners and families in complex disputes, mediation, estate planning and employer counsel." },
      { property: "og:title", content: "Iris Bodenheimer, Adv." },
      { property: "og:description", content: "When the dispute is complex — experience makes the difference." },
    ],
  }),
  component: IndexEn,
});

const practiceAreas = [
  {
    n: "01",
    title: "Legal Counsel for Businesses and Companies",
    lead: "Including business dispute resolution and commercial conflict management.",
    items: [
      "Ongoing legal counsel for businesses and companies",
      "Commercial agreements and transactions",
      "Risk management and dispute prevention",
      "Business negotiations",
      "Partnership and shareholder disputes",
      "Business mediation",
      "Selected commercial litigation",
    ],
  },
  {
    n: "02",
    title: "Family Businesses & Inter-Generational Transitions",
    lead: "When family, money and business meet — more than legal advice is required.",
    items: [
      "Transferring a business to the next generation",
      "Preventing family conflicts",
      "Family agreements",
      "Business continuity",
      "Advising families with assets and businesses",
    ],
  },
  {
    n: "03",
    title: "Estates, Wills & Enduring Power of Attorney",
    lead: "Proper planning today prevents disputes tomorrow.",
    items: [
      "Wills",
      "International wills",
      "Enduring power of attorney",
      "Inter-generational planning",
      "Accompanying families through crisis",
    ],
  },
  {
    n: "04",
    title: "Counsel to Employers",
    lead: "Sound management of employment relations reduces risk and prevents disputes.",
    items: [
      "Pre-termination hearings",
      "Senior executive separations",
      "Employment agreements",
      "Ongoing employer counsel",
      "Representation in selected claims",
    ],
  },
];

function IndexEn() {
  return (
    <div dir="ltr" lang="en" className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      {/* NAV */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-4 font-serif tracking-tight text-ink">
            <img src={ibLogo.url} alt="IB logo" width={56} height={56} className="h-14 w-14 object-contain" />
            <span className="inline-flex flex-col leading-tight">
              <span className="text-xl md:text-2xl">Iris Bodenheimer</span>
              <span className="mt-1 flex w-full justify-between text-sm md:text-base font-sans font-normal text-muted-foreground">
                <span>Lawyer</span>
                <span>Mediator</span>
                <span>Notary</span>
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-base text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-bordeaux">About</a>
            <a href="#tchumim" className="transition hover:text-bordeaux">Practice Areas</a>
            <a href="#mediation" className="transition hover:text-bordeaux">Mediation</a>
            <a href="#contact" className="transition hover:text-bordeaux">Contact</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/"
              className="text-sm tracking-wide text-muted-foreground transition hover:text-bordeaux"
            >
              עברית
            </Link>
            <span aria-hidden className="text-muted-foreground/40">|</span>
            <span className="text-sm tracking-wide text-ink">EN</span>
            <a
              href="#contact"
              className="rounded-sm border border-ink bg-ink px-5 py-2.5 text-base font-medium tracking-wide text-cream transition hover:bg-bordeaux hover:border-bordeaux"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO */}
        <section id="top" className="paper-texture relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
            <div className="md:col-span-7">
              <h1 className="font-serif text-4xl leading-[1.15] text-ink md:text-6xl lg:text-7xl">
                When the Dispute Is Complex,
                <br />
                <span className="text-bordeaux">Experience</span> Makes the Difference.
              </h1>

              <figure className="mt-10 max-w-xl border-l-2 border-gold pl-6">
                <blockquote className="font-serif text-lg leading-loose text-ink md:text-xl">
                  <p className="text-gold text-2xl md:text-3xl lg:text-4xl leading-tight">
                    Not every dispute belongs in court.
                  </p>

                  <p className="mt-6 text-ink/80">
                    Over the years, I have advised and represented companies, executives, business owners, and families in hundreds of complex disputes and negotiations.
                  </p>
                  <p className="mt-4 text-ink/80">
                    Experience teaches that there is no single solution to every conflict.
                  </p>
                  <p className="mt-4 text-ink/80">
                    Sometimes the right path is negotiation.
                    <br />
                    Sometimes mediation.
                    <br />
                    And sometimes, decisive legal action.
                  </p>
                  <p className="mt-4 text-ink">
                    The real challenge is knowing which path to choose — and when.
                  </p>
                </blockquote>
              </figure>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-ink px-7 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
                >
                  Schedule a consultation
                  <span aria-hidden className="text-gold">→</span>
                </a>
                <a href="#tchumim" className="text-sm text-ink underline-offset-4 hover:underline">
                  Practice areas
                </a>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/50 md:block" />
              <img
                src={irisPortrait.url}
                alt="Iris Bodenheimer, Adv."
                width={1024}
                height={1280}
                className="relative h-full w-full object-cover grayscale-[15%]"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-border/60 bg-background">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
            <div className="md:col-span-5">
              <div className="sticky top-10">
                <p className="eyebrow">About</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                  Iris Bodenheimer,
                  <br />
                  Adv.
                </h2>
                <span className="rule-gold mt-8 block" />
                <p className="mt-6 font-serif text-lg text-bordeaux">
                  Over 35 years of experience<br />in commercial and business law.
                </p>
              </div>
            </div>

            <div className="space-y-8 text-[17px] leading-loose text-ink/85 md:col-span-7">
              <p>
                Iris Bodenheimer brings more than 35 years of experience in commercial and business law, advising companies, business owners, executives and families in complex decision-making processes, crisis management and dispute resolution.
              </p>
              <p>
                She previously served as General Counsel, Corporate Secretary and a member of the Executive Management of the Blue Square Israel Group.
              </p>
              <p>
                Adv. Bodenheimer holds an LL.B. and a B.A. from Tel Aviv University, and an MBA from the Kellogg–Recanati International Executive MBA Program of Northwestern University and Tel Aviv University.
              </p>
              <p>
                Her unique background combines extensive legal expertise with deep business understanding, enabling her to guide companies, business owners, families and individuals through complex decisions, negotiations and periods of uncertainty with sound judgment, practical insight and sensitivity.
              </p>
              <p>
                Alongside her professional practice, Adv. Bodenheimer serves as a volunteer mediator at the Givatayim Center for Mediation and Consensus Building and as a court-appointed mediator with the Mediation Unit of the Tel Aviv Magistrates' Court (Shoken).
              </p>

              <div className="mt-12">
                <p className="eyebrow">Qualifications</p>
                <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { k: "Lawyer", v: "1987" },
                    { k: "Mediator", v: "2002" },
                    { k: "Notary", v: "2007" },
                    { k: "Enduring POA", v: "2019" },
                  ].map((s) => (
                    <div key={s.k} className="bg-background p-6 text-center">
                      <dt className="text-[11px] tracking-widest text-muted-foreground uppercase">
                        {s.k}
                      </dt>
                      <dd className="mt-2 font-serif text-xl text-ink">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE AREAS */}
        <section id="tchumim" className="border-t border-border/60 bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="eyebrow">Practice Areas</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                  How I can help
                </h2>
              </div>
              <p className="text-base leading-loose text-muted-foreground md:col-span-5">
                Four core areas in which legal experience translates into personal, precise and committed counsel for every client.
              </p>
            </div>

            <div className="grid gap-px bg-border/70 md:grid-cols-2">
              {practiceAreas.map((area) => (
                <article
                  key={area.n}
                  className="group bg-cream p-8 transition-colors hover:bg-background md:p-12"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-sm text-gold">{area.n}</span>
                    <span className="rule-gold" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl leading-snug text-ink md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {area.lead}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {area.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-[15px] text-ink/85"
                      >
                        <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MEDIATION */}
        <section id="mediation" className="border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-12">
                <p className="eyebrow">Mediation & Dispute Resolution</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                  Mediation — the parties' way
                  <br />
                  to shape their own agreements.
                </h2>
                <span className="rule-gold mt-8 block" />
              </div>
            </div>

            <div className="grid gap-16 md:grid-cols-12">
              <div className="space-y-6 text-[17px] leading-loose text-ink/85 md:col-span-7">
                <p>
                  Mediation is a voluntary process in which the parties themselves shape the agreements between them. Unlike litigation, where the decision is handed to the court, mediation allows the parties to examine the full set of interests, needs and alternatives in front of them and to try to reach the agreements that suit them best.
                </p>
                <p>
                  My role as a mediator is not to decide or to impose a solution, but to help the parties hold a substantive conversation, explore different options and understand the implications of each.
                </p>
                <p>
                  Over the course of my work as a lawyer, negotiator and mediator, I have accompanied companies, business owners, executives and families through complex disputes and crises. This experience allows me to understand not only what is said at the mediation table, but also the business, family and legal dimensions that lie beneath the dispute.
                </p>

                <h3 className="pt-6 font-serif text-2xl text-ink md:text-3xl">
                  Legal experience — an advantage in the mediation room
                </h3>
                <span className="rule-gold block" />
                <p>Mediation does not take place in a vacuum.</p>
                <p>
                  In many cases the parties want to understand not only how an agreement might be reached, but also what is likely to happen if they cannot reach one. The years of experience I bring in litigation, negotiation and dispute resolution help the parties view the conflict broadly and realistically, weigh risks and opportunities, and make informed decisions.
                </p>
                <p>
                  At the same time, I do not decide the dispute and I do not represent either party. My role is to help the parties examine the options before them, hold an effective dialogue and explore whether agreements can be reached that address the interests most important to them.
                </p>

                <h3 className="pt-6 font-serif text-2xl text-ink md:text-3xl">
                  Every dispute is unique
                </h3>
                <span className="rule-gold block" />
                <p>There is no single solution that fits every case.</p>
                <p>
                  Sometimes an agreement can be reached quickly. Sometimes a longer process is required. And sometimes it turns out that mediation is not the right path.
                </p>
                <p>
                  The goal of mediation is not to reach an agreement at any cost, but to allow the parties to weigh their options carefully and try to reach a solution that is sound, practical and as durable as possible.
                </p>
              </div>

              <aside className="md:col-span-5">
                <div className="sticky top-10 border border-border bg-cream p-8 md:p-10">
                  <p className="eyebrow">Public mediation activity</p>
                  <span className="rule-gold mt-5 block" />
                  <p className="mt-6 text-[17px] leading-loose text-ink/85">
                    Alongside my private mediation practice, I serve as a volunteer mediator:
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                      <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                      The Givatayim Center for Mediation and Consensus Building
                    </li>
                    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                      <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                      Permanent mediator at the Mediation Unit of the Tel Aviv Magistrates' Court (Schocken)
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border/60 bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
            <div className="text-center">
              <p className="eyebrow">Consultation</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
                If you've reached this point — you're welcome to get in touch.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground">
                A first consultation is an opportunity to understand the full picture and to consider together the path that best fits you — in complete discretion.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:iris@iblaw.co.il"
                  className="inline-flex items-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
                >
                  Schedule a consultation
                  <span aria-hidden className="text-gold">→</span>
                </a>
                <a
                  href="https://web.whatsapp.com/send?phone=972544924054"
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.href = "whatsapp://send?phone=972544924054";
                    window.setTimeout(() => {
                      window.open("https://web.whatsapp.com/send?phone=972544924054", "_blank", "noopener,noreferrer");
                    }, 650);
                  }}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-sm border border-ink bg-transparent px-8 py-4 text-sm font-medium tracking-wide text-ink transition hover:bg-ink hover:text-cream"
                >
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">Office</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  28 HaArba'a Street
                  <br />
                  Tel Aviv, 5th Floor
                </p>
                <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
                  <a
                    href="https://waze.com/ul?ll=32.071389,34.787222&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bordeaux transition hover:underline"
                  >
                    Open in Waze
                  </a>
                  <span aria-hidden className="text-muted-foreground/40">·</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=HaArba%27a+28+Tel+Aviv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bordeaux transition hover:underline"
                  >
                    Google Maps
                  </a>
                </p>
              </div>
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">Phone</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  <a href="tel:+972544924054" className="block transition hover:text-bordeaux">
                    +972-54-492-4054
                  </a>
                  <a href="tel:+97236919101" className="mt-1 block transition hover:text-bordeaux">
                    +972-3-691-9101
                  </a>
                </p>
              </div>
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">Office Hours</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  Sunday–Thursday
                  <br />
                  9:00–18:00
                </p>
                <p className="mt-2 text-sm text-muted-foreground">By appointment only</p>
              </div>
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">Email & Web</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  <a href="mailto:iris@iblaw.co.il" className="block transition hover:text-bordeaux">
                    iris@iblaw.co.il
                  </a>
                  <a
                    href="https://www.iblaw.co.il"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block transition hover:text-bordeaux"
                  >
                    www.iblaw.co.il
                  </a>
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a
                    href={linkedinUrl}
                    target="_top"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    onClick={openSocialLink(linkedinUrl)}
                    className="text-ink transition hover:text-bordeaux"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={facebookUrl}
                    target="_top"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    onClick={openSocialLink(facebookUrl)}
                    className="text-ink transition hover:text-bordeaux"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-serif text-ink">
            Iris Bodenheimer, Adv. · Mediator · Notary
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/" className="transition hover:text-bordeaux">
              עברית
            </Link>
            <a
              href={linkedinUrl}
              target="_top"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={openSocialLink(linkedinUrl)}
              className="transition hover:text-bordeaux"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={facebookUrl}
              target="_top"
              rel="noopener noreferrer"
              aria-label="Facebook"
              onClick={openSocialLink(facebookUrl)}
              className="transition hover:text-bordeaux"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <Link to="/accessibility" className="transition hover:text-bordeaux">
              Accessibility
            </Link>
            <Link to="/privacy" className="transition hover:text-bordeaux">
              Privacy
            </Link>
            <Link to="/terms" className="transition hover:text-bordeaux">
              Terms
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
