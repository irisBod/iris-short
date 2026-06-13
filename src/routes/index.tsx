import { createFileRoute } from "@tanstack/react-router";
import irisPortrait from "@/assets/iris-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "עו״ד איריס בודנהיימר | עורכת דין, מגשרת ונוטריונית" },
      { name: "description", content: "כ־38 שנות ניסיון בליווי חברות, בעלי עסקים ומשפחות בסכסוכים מורכבים, גישור, צוואות וייעוץ למעסיקים." },
      { property: "og:title", content: "עו״ד איריס בודנהיימר" },
      { property: "og:description", content: "כשהסכסוך מורכב — הניסיון עושה את ההבדל." },
    ],
  }),
  component: Index,
});

const practiceAreas = [
  {
    n: "01",
    title: "סכסוכים עסקיים",
    lead: "שותפים, בעלי מניות, חברות ובעלי עסקים.",
    items: [
      "סכסוכי שותפים",
      "מחלוקות בין בעלי מניות",
      "סכסוכים חוזיים",
      "משא ומתן עסקי",
      "גישור עסקי",
      "ליטיגציה מסחרית נבחרת",
    ],
  },
  {
    n: "02",
    title: "עסקים משפחתיים והעברה בין־דורית",
    lead: "כאשר משפחה, כסף ועסק נפגשים — נדרש יותר מייעוץ משפטי.",
    items: [
      "העברת עסק לדור הבא",
      "מניעת סכסוכים בין בני משפחה",
      "הסכמים משפחתיים",
      "רציפות עסקית",
      "ליווי משפחות בעלות נכסים ועסקים",
    ],
  },
  {
    n: "03",
    title: "ירושות, צוואות וייפוי כוח מתמשך",
    lead: "תכנון נכון היום מונע מחלוקות מחר.",
    items: [
      "צוואות",
      "צוואות בינלאומיות",
      "ייפוי כוח מתמשך",
      "תכנון בין־דורי",
      "ליווי משפחות במצבי משבר",
    ],
  },
  {
    n: "04",
    title: "ייעוץ למעסיקים",
    lead: "ניהול נכון של יחסי עבודה מפחית סיכונים ומונע מחלוקות.",
    items: [
      "שימועים לפני פיטורים",
      "סיום העסקת בכירים",
      "הסכמי העסקה",
      "ליווי מעסיקים",
      "ייצוג בתביעות נבחרות",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-serif text-lg tracking-tight text-ink">
            איריס בודנהיימר
            <span className="mr-2 text-xs font-sans font-normal text-muted-foreground">
              עו״ד · מגשרת · נוטריונית
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#tchumim" className="transition hover:text-bordeaux">תחומי עיסוק</a>
            <a href="#approach" className="transition hover:text-bordeaux">הגישה</a>
            <a href="#about" className="transition hover:text-bordeaux">אודות</a>
            <a href="#contact" className="transition hover:text-bordeaux">יצירת קשר</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-sm border border-ink bg-ink px-4 py-2 text-xs font-medium tracking-wide text-cream transition hover:bg-bordeaux hover:border-bordeaux md:inline-block"
          >
            קביעת פגישת ייעוץ
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="paper-texture relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <div className="md:col-span-7 md:pt-10">
            <p className="eyebrow">עורכת דין · מגשרת · נוטריונית</p>
            <span className="rule-gold mt-6 mb-8" />
            <h1 className="font-serif text-4xl leading-[1.15] text-ink md:text-6xl lg:text-7xl">
              כשהסכסוך מורכב,
              <br />
              <span className="text-bordeaux">הניסיון</span> עושה את ההבדל.
            </h1>

            <div className="mt-10 max-w-xl space-y-2 font-serif text-lg leading-relaxed text-ink/85 md:text-xl">
              <p>סכסוך בין שותפים.</p>
              <p>מחלוקת במשפחה.</p>
              <p>סכסוך ירושה.</p>
              <p>פרישת מנהל בכיר.</p>
              <p>מחלוקת עסקית המאיימת על העסק.</p>
            </div>

            <p className="mt-10 max-w-xl text-base leading-loose text-muted-foreground">
              לאחר קרוב לארבעה עשורים של ניסיון משפטי, אני מסייעת ללקוחות לקבל החלטות נכונות,
              לנהל משא ומתן אפקטיבי ולפתור סכסוכים בדרך המתאימה להם — בגישור, בהסכמה או בהליך משפטי.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-sm bg-ink px-7 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
              >
                קביעת פגישת ייעוץ
                <span aria-hidden className="text-gold">←</span>
              </a>
              <a href="#tchumim" className="text-sm text-ink underline-offset-4 hover:underline">
                תחומי העיסוק
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border border-gold/50 md:block" />
            <img
              src={irisPortrait}
              alt="עו״ד איריס בודנהיימר"
              width={1024}
              height={1280}
              className="relative h-full w-full object-cover grayscale-[15%]"
            />
            <div className="absolute bottom-0 right-0 m-6 bg-cream/95 px-5 py-3 text-right shadow-sm md:m-8">
              <p className="font-serif text-sm text-ink">איריס בודנהיימר, עו״ד</p>
              <p className="mt-1 text-[11px] tracking-widest text-muted-foreground">
                כ־38 שנות ניסיון
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="tchumim" className="border-t border-border/60 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">תחומי עיסוק</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                איך אני יכולה לסייע
              </h2>
            </div>
            <p className="text-base leading-loose text-muted-foreground md:col-span-5">
              ארבעה תחומים מרכזיים בהם מצטבר הניסיון המשפטי לכדי מענה אישי, מדויק ומחויב לכל לקוח.
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
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-3 flex-shrink-0 bg-gold"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / MANIFESTO */}
      <section id="approach" className="bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-36">
          <p className="eyebrow" style={{ color: "var(--color-gold)" }}>
            הגישה
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-cream md:text-5xl lg:text-6xl">
            לא כל סכסוך צריך להגיע
            <br />
            <span className="text-gold">לבית המשפט.</span>
          </h2>

          <span className="mx-auto mt-10 block h-px w-12 bg-gold" />

          <div className="mx-auto mt-12 max-w-2xl space-y-6 font-serif text-lg leading-relaxed text-cream/85 md:text-xl">
            <p>
              במהלך השנים ייצגתי חברות, מנהלים, בעלי עסקים ומשפחות במאות מצבים מורכבים.
            </p>
            <p>
              הניסיון מלמד כי לעיתים הפתרון הנכון הוא משא ומתן.
              <br />
              לעיתים גישור.
              <br />
              ולעיתים דווקא פעולה משפטית נחושה.
            </p>
            <p className="text-cream">
              האתגר הוא לבחור את הדרך הנכונה בזמן הנכון.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <div className="sticky top-10">
              <p className="eyebrow">אודות</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                עו״ד איריס
                <br />
                בודנהיימר
              </h2>
              <span className="rule-gold mt-8 block" />
              <p className="mt-6 font-serif text-lg text-bordeaux">
                למעלה מ־35 שנות ניסיון<br />במשפט המסחרי והעסקי.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-[17px] leading-loose text-ink/85 md:col-span-7">
            <p>
              עו״ד איריס בודנהיימר היא בעלת ניסיון של למעלה מ־35 שנים בתחום המשפט
              המסחרי והעסקי, וליוותה לאורך שנותיה מאות חברות, בעלי עסקים ומשפחות
              בקבלת החלטות מורכבות, ניהול משברים ופתרון סכסוכים.
            </p>
            <p>
              לשעבר היועצת המשפטית, מזכירת החברה וחברת ההנהלה של קבוצת הריבוע
              הכחול.
            </p>
            <p>
              בעלת תארי LL.B ו־B.A מאוניברסיטת תל אביב, ו־MBA מתוכנית
              Kellogg–Recanati המשותפת לאוניברסיטת Northwestern ולאוניברסיטת תל
              אביב.
            </p>
            <p>
              מגשרת מוסמכת משנת 2003 ונוטריונית. ניסיונה משלב עבודה עם חברות, בעלי
              עסקים, משפחות ויחידים במצבי קבלת החלטות מורכבים ומשברים — מתוך
              הקשבה, שיקול דעת והבנה עסקית רחבה.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {[
                { k: "ניסיון", v: "35+ שנים" },
                { k: "הסמכת גישור", v: "2003" },
                { k: "תארים", v: "LL.B · B.A · MBA" },
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
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <div className="text-center">
            <p className="eyebrow">פגישת ייעוץ</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              אם הגעתם לכאן — כנראה שיש סיבה.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground">
              פגישת ייעוץ ראשונה היא הזדמנות להבין את התמונה במלואה ולבחון יחד את
              הדרך המתאימה ביותר עבורכם — בדיסקרטיות מלאה.
            </p>
            <a
              href="mailto:office@bodenheimer-law.co.il"
              className="mt-10 inline-flex items-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
            >
              קביעת פגישת ייעוץ
              <span aria-hidden className="text-gold">←</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
