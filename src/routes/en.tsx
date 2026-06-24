import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Menu, X } from "lucide-react";
import irisPortrait from "@/assets/iris-portrait.webp.asset.json";
import ibLogo from "@/assets/ib-logo-navy-uniform.png.asset.json";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Iris Bodenheimer, Adv. | Lawyer, Mediator & Notary" },
      { name: "description", content: "Nearly 35 years of experience advising companies, business owners and families in complex disputes, mediation, estate planning and employer counsel." },
      { property: "og:title", content: "Iris Bodenheimer, Adv." },
      { property: "og:description", content: "When the dispute is complex — experience makes the difference." },
      { property: "og:url", content: "https://www.iblaw.co.il/en" },
      { property: "og:image", content: `https://www.iblaw.co.il${ibLogo.url}` },
      { name: "twitter:image", content: `https://www.iblaw.co.il${ibLogo.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://www.iblaw.co.il/en" },
      { rel: "alternate", hrefLang: "he", href: "https://www.iblaw.co.il/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.iblaw.co.il/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.iblaw.co.il/" },
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
    title: "Family Businesses, Estates, Wills & Enduring Power of Attorney",
    lead: "When family, money and business meet — more than legal advice is required.",
    items: [
      "Transferring a business to the next generation",
      "Preventing family conflicts",
      "Family agreements",
      "Wills (including international wills)",
      "International inheritance disputes",
      "Family-business mediation",
      "Inter-generational mediation",
    ],
  },
  {
    n: "03",
    title: "Employment Law Counsel",
    lead: "Sound management of employment relations reduces risk and prevents disputes.",
    items: [
      "Pre-termination hearings",
      "Senior executive separations",
      "Employment agreements",
      "Ongoing employer counsel",
      "Representation in selected claims",
    ],
  },
  {
    n: "04",
    title: "Mediation & Dispute Resolution",
    lead: "Mediation allows the parties to shape their own agreements, saving time and cost.",
    items: [
      "Commercial mediation",
      "Family and business mediation",
      "Inter-generational mediation",
      "Partnership dispute mediation",
      "Inheritance dispute mediation",
      "Dispute resolution outside the courts",
    ],
  },
];

const testimonials = [
  {
    quote: [
      "I would like to commend the dedicated service I received from Adv. Iris Bodenheimer.",
      "Iris helped our group acquire a business in 2016, at a time when we lacked experience and knowledge in the matter. She handled us with great dedication, guiding us closely and carefully safeguarding my interests and those of my partner, making sure to protect us on issues essential to the business. She worked day and night on our behalf.",
      "The dedicated guidance we received from her as our lawyer — and her insistence that the selling side too be accompanied through to completion — left me highly satisfied and made the deal far easier. To this day, Iris has been and will remain my lawyer in the future as well.",
      "Well done, Iris. I warmly recommend her to anyone in need of a no-nonsense, knowledgeable and professional lawyer.",
    ],
    author: "Ido Friedrich & Simon Souissa",
    role: "I & S",
  },
  {
    quote: [
      "More than a decade ago, after a telephone survey and several introductory meetings at other law firms, I was looking for a lawyer who would give me a sense of security — one who would allow me to operate with peace of mind, knowing there was someone to rely on for all the legal aspects involved in running a company.",
      "Already at the first meeting I was struck by how immediate the professional and personal connection was. Iris, in simple and clear language, asked the right questions, explained the implications, and put together a focused and clear legal picture along with its business consequences.",
      "Iris's deep analytical ability in professional matters, combined with her translation of them into precise legal language while filtering out the \"noise,\" helps find the right legal path to achieve objectives — in a businesslike manner and with optimal results.",
      "In cases where Iris represented me against partners and competitors, I saw her conduct herself in a focused yet assertive manner both inside and outside the courtroom. Her command of the details and focus on objectives contributed greatly to the decisions that led to success.",
      "The combination of professionalism, extensive experience and personal attention — highly recommended.",
    ],
    author: "Avi Ikar",
    role: "CEO, A.I. Explosive Ltd.",
  },
  {
    quote: [
      "Adv. Iris Bodenheimer represented me in a complex legal proceeding that involved both a claim against me and a counterclaim on my part.",
      "I found that Iris carries out her work with thoroughness and is goal-oriented in achieving the best possible outcome for her clients.",
      "I recommend consulting with Iris and engaging her services in legal proceedings.",
    ],
    author: "Yair Yotzis",
    role: "",
  },
  {
    quote: [
      "When dark clouds gathered above and a foreign tycoon threatened to take from me what was rightfully mine — a friend referred me to Iris. We had not met before, and I admit that at first I was anxious: the tycoon, whose means are seemingly endless, fielded against me a battery of lawyers in three-piece suits from a firm of three names.",
      "The task was not simple. The story involved oral agreements and understandings reached on distant continents. The suits did everything in their power to undermine the credibility of my claims, and even threatened to drag me into courts in countries where there is no law and certainly no justice.",
      "Faced with this legal onslaught — the kind that only those with money can produce — Iris, with her pleasant manner, her ever-present smile and her sharp arguments, led us step by step to the long-awaited victory.",
      "Highly recommended.",
    ],
    author: "Eli Pomerantz",
    role: "",
  },
  {
    quote: [
      "Adv. Iris Bodenheimer served as legal counsel (retainer) for RCI Israel Ltd. during the years in which I served as CEO of the company.",
      "RCI Israel Ltd. is a franchisee of RCI from the global Wyndham Destinations group, and was owned by \"Goal Partners,\" which until recently was a publicly traded company. This complexity requires legal counsel from a lawyer who thoroughly knows their craft and delivers on the objectives set before them, while fully protecting the company's interests and maintaining good working relations among all parties.",
      "Adv. Bodenheimer handled all legal matters on an ongoing basis: labor law, clients, suppliers, tourism service laws and regulations, commercial issues, agreements and court representation when required. Her expertise and professionalism in the retail sector were of great assistance in our work processes and in drafting the various regulations.",
      "The work was carried out to our complete satisfaction, with a professional approach, dedication and thoroughness, and courteous support with high availability for all our inquiries. Highly recommended.",
    ],
    author: "Olga Sofer",
    role: "CEO, RCI Israel Ltd. until August 2020",
  },
];


const LINKEDIN_URL = "https://www.linkedin.com/in/iris-bodenheimer-44734/";
const FACEBOOK_URL = "https://www.facebook.com/iris.bodenheimer.lawyer";

function IndexEn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div dir="ltr" lang="en" className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-10 md:py-5">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-serif tracking-tight text-ink">
            <img src={ibLogo.url} alt="IB logo" width={56} height={56} className="h-10 w-10 shrink-0 object-contain md:h-14 md:w-14" />
            <span className="inline-flex min-w-0 flex-col leading-tight">
              <span className="truncate text-base md:text-2xl">Iris Bodenheimer</span>
              <span className="mt-1 hidden w-full justify-between text-sm md:flex md:text-base font-sans font-normal text-muted-foreground">
                <span>Lawyer</span>
                <span>Mediator</span>
                <span>Notary</span>
              </span>
              <span className="mt-0.5 text-xs font-sans font-normal text-muted-foreground md:hidden">
                Lawyer · Mediator · Notary
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-base text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-bordeaux">About</a>
            <a href="#tchumim" className="transition hover:text-bordeaux">Practice Areas</a>
            <a href="#mediation" className="transition hover:text-bordeaux">Mediation</a>
            <a href="#testimonials" className="transition hover:text-bordeaux">Testimonials</a>
            <a href="#contact" className="transition hover:text-bordeaux">Contact</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link to="/" className="text-sm tracking-wide text-muted-foreground transition hover:text-bordeaux">
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

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="shrink-0 p-2 text-ink md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4 text-base text-muted-foreground">
              {[
                { href: "#about", label: "About" },
                { href: "#tchumim", label: "Practice Areas" },
                { href: "#mediation", label: "Mediation" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-1 transition hover:text-bordeaux"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-border/60 pt-3">
                <Link to="/" className="block py-1 text-sm text-muted-foreground transition hover:text-bordeaux">
                  עברית
                </Link>
              </li>
            </ul>
          </nav>
        )}
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
                Four core areas — commercial law, family and business counsel, employment law, and mediation & dispute resolution.
              </p>
            </div>

            <div className="grid gap-px bg-border/70 md:grid-cols-2">
              {practiceAreas.slice(0, 3).map((area) => (
                <article key={area.n} className="group bg-cream p-8 transition-colors hover:bg-background md:p-12">
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
                      <li key={it} className="flex items-start gap-3 text-[15px] text-ink/85">
                        <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="group bg-cream p-8 transition-colors hover:bg-background md:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-gold">{practiceAreas[3].n}</span>
                  <span className="rule-gold" />
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-ink md:text-3xl">
                  {practiceAreas[3].title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {practiceAreas[3].lead}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {practiceAreas[3].items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] text-ink/85">
                      <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#mediation"
                  className="mt-8 inline-flex items-center gap-2 border-b border-gold/60 pb-0.5 text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-bordeaux"
                >
                  For enquiries about scheduling a mediation session
                  <span aria-hidden className="text-gold">→</span>
                </a>
              </article>
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
                <div className="sticky top-10 space-y-6">
                  <div className="border border-gold/40 bg-cream p-8 md:p-10">
                    <p className="eyebrow">Advantages of mediation</p>
                    <span className="rule-gold mt-5 block" />
                    <ul className="mt-6 space-y-4">
                      {[
                        "The parties shape their own agreements",
                        "Saves time and cost versus litigation",
                        "A discreet solution that preserves the relationship",
                      ].map((it) => (
                        <li key={it} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                          <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-border bg-cream p-8 md:p-10">
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
                </div>
              </aside>
            </div>

            {/* Court appreciations */}
            <div className="mt-20 border-t border-border/60 pt-16">
              <div className="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <p className="eyebrow">From court rulings</p>
                  <h3 className="mt-5 font-serif text-2xl leading-tight text-ink md:text-4xl">
                    Words of appreciation from Magistrates' Court judges
                  </h3>
                  <span className="rule-gold mt-8 block" />
                </div>
                <p className="text-[15px] leading-relaxed text-ink/70 md:col-span-4">
                  Quotations from rulings issued following mediations concluded by agreement, at the Mediation Unit of the Tel Aviv Magistrates' Court.
                </p>
              </div>

              <div className="grid gap-px bg-border/60 md:grid-cols-3">
                {[
                  { q: "Well done to the mediator, Adv. Iris Bodenheimer, and to the parties.", a: "Senior Judge Ronit Pinchuk-Alt", d: "19.05.2026" },
                  { q: "The mediation agreement is hereby given the force of a judgment. The court thanks the mediator.", a: "Deputy President Efrat Busani", d: "11.05.2026" },
                  { q: "Thank you to the mediator, Iris. The attached mediation agreement is given the force of a judgment.", a: "Judge Zipora Ohana-Kapash", d: "07.05.2026" },
                  { q: "The court commends the parties on resolving the dispute by way of agreement. Thanks are due to the mediator for her assistance.", a: "Judge Nurit Tabib Mizrachi", d: "10.02.2026" },
                  { q: "I commend the parties on reaching understandings outside the walls of the court, and thank the mediator for her assistance.", a: "Senior Registrar Iris Anavi-Ozchakir", d: "10.02.2026" },
                  { q: "The court thanks the parties as well as the mediator for resolving the matter amicably.", a: "Senior Registrar Ronen Polliack", d: "02.01.2026" },
                ].map((item, i) => (
                  <figure key={i} className="bg-background p-8 md:p-10">
                    <span aria-hidden className="font-serif text-5xl leading-none text-gold">&ldquo;</span>
                    <blockquote className="mt-3 text-[16px] leading-loose text-ink/85">
                      {item.q}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border/60 pt-4 text-[13px] leading-relaxed text-ink/70">
                      <span className="block font-semibold text-ink">{item.a}</span>
                      <span className="mt-1 block tabular-nums text-ink/55">{item.d}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <a
                  href="/piskey-din-gishur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b border-gold/60 pb-1 text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-bordeaux"
                >
                  Download the full rulings (PDF)
                  <span aria-hidden className="text-gold">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="eyebrow">Client Testimonials</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                  What clients say
                </h2>
                <span className="rule-gold mt-8 block" />
              </div>
              <p className="text-base leading-loose text-muted-foreground md:col-span-5">
                A selection of testimonials from clients I have accompanied over the years — companies, executives and business owners.
              </p>
            </div>

            <div className="grid gap-px bg-border/70 md:grid-cols-2">
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} lang="en" />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border/60 bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
            <ContactForm lang="en" />


            <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">Office</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  28 HaArba'a Street
                  <br />
                  Tel Aviv, 5th Floor
                </p>
                <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
                  <a href="https://waze.com/ul?ll=32.071389,34.787222&navigate=yes" target="_blank" rel="noopener noreferrer" className="text-bordeaux transition hover:underline">
                    Open in Waze
                  </a>
                  <span aria-hidden className="text-muted-foreground/40">·</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=HaArba%27a+28+Tel+Aviv" target="_blank" rel="noopener noreferrer" className="text-bordeaux transition hover:underline">
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
                  <a href="https://www.iblaw.co.il" target="_blank" rel="noopener noreferrer" className="mt-1 block transition hover:text-bordeaux">
                    www.iblaw.co.il
                  </a>
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink transition hover:text-bordeaux">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink transition hover:text-bordeaux">
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
            <Link to="/" className="transition hover:text-bordeaux">עברית</Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-bordeaux">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-bordeaux">
              <Facebook className="h-4 w-4" />
            </a>
            <Link to="/accessibility" className="transition hover:text-bordeaux">Accessibility</Link>
            <Link to="/privacy" className="transition hover:text-bordeaux">Privacy</Link>
            <Link to="/terms" className="transition hover:text-bordeaux">Terms</Link>
          </nav>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      <a
        href="#contact"
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream shadow-lg shadow-ink/30 transition hover:bg-bordeaux md:hidden"
      >
        Schedule
      </a>
    </div>
  );
}
