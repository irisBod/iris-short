import { createFileRoute, Link } from "@tanstack/react-router";
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        דלג לתוכן הראשי
      </a>
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
            <a href="#about" className="transition hover:text-bordeaux">אודות</a>
            <a href="#tchumim" className="transition hover:text-bordeaux">תחומי עיסוק</a>
            <a href="#mediation" className="transition hover:text-bordeaux">גישורים ויישוב סכסוכים</a>
            <a href="#articles" className="transition hover:text-bordeaux">מאמרים ותובנות</a>
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

      <main id="main-content">


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

            <figure className="mt-10 max-w-xl border-r-2 border-gold pr-6">
              <blockquote className="font-serif text-lg leading-loose text-ink md:text-xl">
                <p className="whitespace-nowrap text-gold text-2xl md:text-3xl lg:text-4xl leading-tight">
                  לא כל סכסוך צריך להגיע לבית המשפט.
                </p>

                <p className="mt-6 text-ink/80">
                  במהלך השנים ייצגתי חברות, מנהלים, בעלי עסקים ומשפחות במאות מצבים מורכבים.
                </p>
                <p className="mt-4 text-ink/80">
                  הניסיון מלמד כי לעיתים הפתרון הנכון הוא משא ומתן.
                  <br />
                  לעיתים גישור.
                  <br />
                  ולעיתים דווקא פעולה משפטית נחושה.
                </p>
                <p className="mt-4 text-ink">
                  האתגר הוא לבחור את הדרך הנכונה בזמן הנכון.
                </p>
              </blockquote>
            </figure>


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

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 bg-background">
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
              ניסיונה משלב עבודה עם חברות, בעלי עסקים, משפחות ויחידים במצבי
              קבלת החלטות מורכבים ומשברים — מתוך הקשבה, שיקול דעת והבנה עסקית
              רחבה.
            </p>
            <p>
              בנוסף לפעילותה המקצועית, משמשת עו״ד איריס בודנהיימר כמגשרת
              מתנדבת במרכז לגישור ובניית הסכמות בגבעתיים, וכן כמגשרת קבועה
              ביחידת הגישור של בית משפט השלום תל אביב (שוקן).
            </p>


            <div className="mt-12">
              <p className="eyebrow">הסמכות</p>
              <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "עורכת דין", v: "1987" },
                  { k: "מגשרת", v: "2002" },
                  { k: "נוטריונית", v: "2007" },
                  { k: "ייפוי כוח מתמשך", v: "2019" },
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
                        className="mt-1 flex-shrink-0 text-gold"
                      >✦</span>
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
            <div className="md:col-span-7">
              <p className="eyebrow">גישור ויישוב סכסוכים</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                גישור — הדרך של הצדדים
                <br />
                לעצב את ההסכמות בעצמם.
              </h2>
              <span className="rule-gold mt-8 block" />
            </div>
            <p className="text-base leading-loose text-muted-foreground md:col-span-5">
              גישור הוא הליך רצוני שבו הצדדים הם אלו שמגבשים את ההסכמות ביניהם.
              בניגוד להליך משפטי, שבו ההכרעה מועברת לבית המשפט, הגישור מאפשר
              לצדדים לבחון את מכלול האינטרסים, הצרכים והחלופות העומדים בפניהם
              ולנסות להגיע להסכמות המתאימות להם.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-12">
            <div className="space-y-6 text-[17px] leading-loose text-ink/85 md:col-span-7">
              <p>
                תפקידי כמגשרת אינו לקבל החלטות או לכפות פתרונות, אלא לסייע
                לצדדים לנהל שיח ענייני, לבחון אפשרויות שונות ולהבין את
                המשמעויות של כל אחת מהן.
              </p>
              <p>
                לאורך שנות עבודתי כעורכת דין, כמנהלת משא ומתן וכמגשרת, ליוויתי
                חברות, בעלי עסקים, מנהלים ומשפחות במצבים מורכבים של מחלוקת
                ומשבר. ניסיון זה מאפשר לי להבין לא רק את הנאמר סביב שולחן
                הגישור, אלא גם את ההיבטים העסקיים, המשפחתיים והמשפטיים העומדים
                ברקע המחלוקת.
              </p>

              <h3 className="pt-6 font-serif text-2xl text-ink md:text-3xl">
                ניסיון משפטי — יתרון בחדר הגישור
              </h3>
              <span className="rule-gold block" />
              <p>גישור אינו מתקיים בחלל ריק.</p>
              <p>
                במקרים רבים מבקשים הצדדים להבין לא רק כיצד ניתן להגיע להסכם,
                אלא גם מה צפוי אם לא יצליחו לעשות זאת. הניסיון שצברתי לאורך
                שנים רבות בליטיגציה, בניהול משא ומתן ובפתרון מחלוקות מאפשר לי
                לסייע לצדדים לבחון את הסכסוך באופן רחב ומציאותי, להבין את
                הסיכונים וההזדמנויות ולקבל החלטות מושכלות.
              </p>
              <p>
                יחד עם זאת, איני מכריעה בסכסוך ואיני מייצגת מי מהצדדים. תפקידי
                הוא לסייע לצדדים לבחון את האפשרויות העומדות בפניהם, לנהל
                דיאלוג אפקטיבי ולבדוק האם ניתן להגיע להסכמות שייתנו מענה
                לאינטרסים החשובים להם.
              </p>

              <h3 className="pt-6 font-serif text-2xl text-ink md:text-3xl">
                כל מחלוקת היא ייחודית
              </h3>
              <span className="rule-gold block" />
              <p>אין פתרון אחד המתאים לכל מקרה.</p>
              <p>
                לעיתים ניתן להגיע להסכם בתוך זמן קצר. לעיתים נדרש תהליך ממושך
                יותר. ולעיתים מתברר כי גישור אינו המסלול המתאים.
              </p>
              <p>
                מטרת הגישור אינה להגיע להסכם בכל מחיר, אלא לאפשר לצדדים לבחון
                באופן מושכל את האפשרויות העומדות בפניהם ולנסות להגיע לפתרון
                נכון, מעשי ויציב ככל שניתן.
              </p>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-10 border border-border bg-cream p-8 md:p-10">
                <p className="eyebrow">פעילות גישור ציבורית</p>
                <span className="rule-gold mt-5 block" />
                <p className="mt-6 text-[17px] leading-loose text-ink/85">
                  לצד פעילותי כמגשרת פרטית, אני משמשת כמגשרת מתנדבת:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                    <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                    המרכז לגישור ובניית הסכמות בגבעתיים
                  </li>
                  <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                    <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                    מגשרת קבועה ביחידת הגישור של בית משפט השלום תל אביב (שוקן)
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 bg-background">
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
              ניסיונה משלב עבודה עם חברות, בעלי עסקים, משפחות ויחידים במצבי
              קבלת החלטות מורכבים ומשברים — מתוך הקשבה, שיקול דעת והבנה עסקית
              רחבה.
            </p>


            <div className="mt-12">
              <p className="eyebrow">הסמכות</p>
              <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "עורכת דין", v: "1987" },
                  { k: "מגשרת", v: "2002" },
                  { k: "נוטריונית", v: "2007" },
                  { k: "ייפוי כוח מתמשך", v: "2019" },
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

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <div className="text-center">
            <p className="eyebrow">פגישת ייעוץ</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              אם הגעתם לכאן — מוזמנים ליצור קשר.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground">
              פגישת ייעוץ ראשונה היא הזדמנות להבין את התמונה במלואה ולבחון יחד את
              הדרך המתאימה ביותר עבורכם — בדיסקרטיות מלאה.
            </p>
            <a
              href="mailto:iris@iblaw.co.il"
              className="mt-10 inline-flex items-center gap-3 rounded-sm bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
            >
              קביעת פגישת ייעוץ
              <span aria-hidden className="text-gold">←</span>
            </a>
          </div>

          <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
            <div className="bg-cream p-8 text-center">
              <p className="eyebrow">משרד</p>
              <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                רחוב הארבעה 28
                <br />
                תל אביב, קומה 5
              </p>
            </div>
            <div className="bg-cream p-8 text-center">
              <p className="eyebrow">טלפון</p>
              <p className="mt-4 font-serif text-lg text-ink leading-relaxed" dir="ltr">
                <a href="tel:+972544924054" className="block transition hover:text-bordeaux">
                  +972-54-492-4054
                </a>
                <a href="tel:+97236919101" className="mt-1 block transition hover:text-bordeaux">
                  +972-3-691-9101
                </a>
              </p>
            </div>
            <div className="bg-cream p-8 text-center">
              <p className="eyebrow">דוא״ל ואתר</p>
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
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-serif text-ink">
            איריס בודנהיימר, עו״ד · מגשרת · נוטריונית
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/accessibility" className="transition hover:text-bordeaux">
              הצהרת נגישות
            </Link>
            <Link to="/privacy" className="transition hover:text-bordeaux">
              מדיניות פרטיות
            </Link>
            <Link to="/terms" className="transition hover:text-bordeaux">
              תנאי שימוש
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
}
