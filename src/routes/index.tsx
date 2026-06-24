import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Menu, X } from "lucide-react";
import irisPortrait from "@/assets/iris-portrait.webp.asset.json";
import ibLogo from "@/assets/ib-logo-navy-uniform.png.asset.json";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "עו״ד איריס בודנהיימר | עורכת דין, מגשרת ונוטריונית" },
      { name: "description", content: "כ־35 שנות ניסיון בליווי חברות, בעלי עסקים ומשפחות בסכסוכים מורכבים, גישור, צוואות ויעוץ בדיני עבודה." },
      { property: "og:title", content: "עו״ד איריס בודנהיימר" },
      { property: "og:description", content: "כשהסכסוך מורכב — הניסיון עושה את ההבדל." },
      { property: "og:url", content: "https://www.iblaw.co.il/" },
      { property: "og:image", content: `https://www.iblaw.co.il${ibLogo.url}` },
      { name: "twitter:image", content: `https://www.iblaw.co.il${ibLogo.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://www.iblaw.co.il/" },
      { rel: "alternate", hrefLang: "he", href: "https://www.iblaw.co.il/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.iblaw.co.il/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.iblaw.co.il/" },
    ],
  }),
  component: Index,
}));

const practiceAreas = [
  {
    n: "01",
    title: "ייעוץ וליווי משפטי לעסקים וחברות",
    lead: "לרבות טיפול במחלוקות וסכסוכים עסקיים.",
    items: [
      "ייעוץ משפטי שוטף לעסקים וחברות",
      "ליווי עסקאות והסכמים מסחריים",
      "ניהול סיכונים ומניעת מחלוקות",
      "משא ומתן עסקי",
      "סכסוכי שותפים ובעלי מניות",
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
      "גישור בינדורי",
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

const testimonials = [
  {
    quote: [
      "ברצוני לציין לשבח את השירות המסור שקיבלתי מעורכת הדין איריס בודנהיימר.",
      "איריס עזרה לקבוצה שלנו לרכוש עסק בשנת 2016, עת היינו חסרי ניסיון וידע בנושא. היא טיפלה בנו במסירות תוך הכוונה ושמירה הדוקה על האינטרסים שלי ושל שותפי, ודאגה להגן עלינו בנושאים מהותיים לעסק. עשתה ימים כלילות לפעול לטובתנו.",
      "הליווי המסור שקיבלנו ממנה כעורכת דין, וגם מהצד המוכר אותו ״הכריחה״ ללוות את העסקה עד להשלמתה — גרמו לי לשביעות רצון, עשו את העסקה לקלה הרבה יותר, ולראיה איריס הייתה ותישאר עורכת הדין שלי גם בעתיד.",
      "יישר כוח איריס, ואני ממליץ בחום לכל מי שזקוק לעורך דין ענייני, בקיא ומקצוען.",
    ],
    author: "עידו פרידריך וסיימון סויסה",
    role: "I & S",
  },
  {
    quote: [
      "לפני יותר מעשור, אחרי סקר טלפוני ומספר פגישות היכרות במשרדי עו״ד אחרים, חיפשתי עורך דין שייתן לי הרגשת ביטחון — שיאפשר לי להתנהל בראש שקט, בידיעה שיש על מי לסמוך בכל ההיבטים המשפטיים הכרוכים בניהול חברה.",
      "כבר בפגישה הראשונה הופתעתי עד כמה החיבור המקצועי והאנושי היה מיידי. איריס, בשפה פשוטה וברורה, שאלה את השאלות הנכונות, הסבירה את המשמעויות, והרכיבה תמונת מצב משפטית ממוקדת ובהירה והשפעותיה העסקיות.",
      "יכולת הלימוד והניתוח המעמיקה של איריס בתחומים המקצועיים, יחד עם תרגומם לשפה משפטית תוך סינון ״רעשים״, מסייעת למצוא את הדרך המשפטית הנכונה להשגת היעדים, באופן ענייני ובתוצאות אופטימליות.",
      "במקרים בהם ייצגה אותי איריס מול שותפים ומתחרים, ראיתי אותה מתנהלת בצורה עניינית אך אסרטיבית בבית המשפט ומחוצה לו. בקיאותה בפרטים ומיקודה ביעדים תרמו רבות להכרעות שהובילו להצלחות.",
      "השילוב של מקצועיות, ניסיון עשיר ויחס אישי — מומלץ בחום.",
    ],
    author: "אבי איכר",
    role: "",
  },
  {
    quote: [
      "עו״ד איריס בודנהיימר ייצגה אותי בהליך משפטי מורכב שכלל תביעה נגדי ותביעה שכנגד מצידי.",
      "נוכחתי לדעת שאיריס עושה את עבודתה ביסודיות והיא ממוקדת מטרה על מנת להשיג ללקוחותיה תוצאה מיטבית.",
      "אני ממליץ להיוועץ עם איריס ולהיעזר בה בהליכים משפטיים.",
    ],
    author: "יאיר יוציס",
    role: "מנכ״ל A.I. Explosive Ltd.",
  },
  {
    quote: [
      "כשעננים של רשע קדרו ממעל וטייקון זר איים לחמוס ממני את אשר שלי — חבר הפנה אותי אל איריס. לא הכרנו לפני כן, ואני מודה שבתחילה חששתי: הטייקון, שאמצעיו אין סופיים, העמיד מולי סוללת עורכי דין בחליפות של שלושה חלקים, ממשרד של שלושה שמות.",
      "המשימה לא הייתה פשוטה. סיפור העלילה כלל הסכמים בעל פה והבנות שהושגו ביבשות רחוקות. החליפות עשו ככל יכולתם לערער את אמינות טענותיי, ואף איימו לגרור אותי לבתי משפט בארצות בהן אין דין ובוודאי לא דיין.",
      "מול ההתקפה המשפטית הזו, שרק מי שהממון בידו יכול לייצר — איריס, בדרכה הנעימה, חיוכה התמידי וטיעוניה המושחזים, הובילה אותנו צעד אחר צעד אל הניצחון המיוחל.",
      "ממליץ בחום.",
    ],
    author: "אלי פומרנץ",
    role: "",
  },
  {
    quote: [
      "עורכת הדין איריס בודנהיימר שימשה כיועצת המשפטית (ריטיינר) של חברת אר.סי.אי ישראל בע״מ, בשנים בהן שימשתי כמנכ״לית החברה.",
      "אר.סי.אי ישראל בע״מ הינה זכיינית של RCI מקבוצת Wyndham Destinations העולמית, ובבעלות ״גול פרטנרס״ שעד לאחרונה הייתה חברה בורסאית. מורכבות זו מחייבת טיפול משפטי של עו״ד שיודע היטב את מלאכתו, ומגיע ליעדים שהוצבו בפניו, תוך שמירה מלאה על האינטרסים של החברה ועל יחסי עבודה טובים בין כל הצדדים.",
      "עו״ד בודנהיימר טיפלה בשוטף בכל הנושאים המשפטיים: דיני עבודה, לקוחות, ספקים, חוקים ותקנות שירותי תיירות, סוגיות מסחריות, הסכמים וייצוג בבתי משפט בעת הצורך. המומחיות והמקצועיות בתחום הקמעונאות סייעו רבות בתהליכי העבודה ובכתיבת התקנונים השונים.",
      "העבודה התבצעה לשביעות רצוננו המלאה, מתוך גישה מקצועית, מסירות ויסודיות, וליווי אדיב בזמינות גבוהה לכל פניותינו. ממליצה בחום על שירותיה.",
    ],
    author: "אולגה סופר",
    role: "מנכ״לית אר.סי.אי ישראל בע״מ עד אוגוסט 2020",
  },
];


const LINKEDIN_URL = "https://www.linkedin.com/in/iris-bodenheimer-44734/";
const FACEBOOK_URL = "https://www.facebook.com/iris.bodenheimer.lawyer";

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  


  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        דלג לתוכן הראשי
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-10 md:py-5">
          <a href="#top" className="flex min-w-0 items-center gap-3 font-serif tracking-tight text-ink">
            <img src={ibLogo.url} alt="לוגו IB" width={56} height={56} className="h-10 w-10 shrink-0 object-contain md:h-14 md:w-14" />
            <span className="inline-flex min-w-0 flex-col leading-tight">
              <span className="truncate text-base md:text-2xl">איריס בודנהיימר</span>
              <span className="mt-1 hidden w-full justify-between text-sm md:flex md:text-base font-sans font-normal text-muted-foreground">
                <span>עו״ד</span>
                <span>מגשרת</span>
                <span>נוטריונית</span>
              </span>
              <span className="mt-0.5 text-xs font-sans font-normal text-muted-foreground md:hidden">
                עו״ד · מגשרת · נוטריונית
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-base text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-bordeaux">אודות</a>
            <a href="#tchumim" className="transition hover:text-bordeaux">תחומי עיסוק</a>
            <a href="#mediation" className="transition hover:text-bordeaux">גישורים ויישוב סכסוכים</a>
            <a href="#testimonials" className="transition hover:text-bordeaux">המלצות</a>
            <a href="#contact" className="transition hover:text-bordeaux">יצירת קשר</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="text-sm tracking-wide text-ink">HE</span>
            <span aria-hidden className="text-muted-foreground/40">|</span>
            <Link to="/en" className="text-sm tracking-wide text-muted-foreground transition hover:text-bordeaux">
              EN
            </Link>
            <a
              href="#contact"
              className="rounded-sm border border-ink bg-ink px-5 py-2.5 text-base font-medium tracking-wide text-cream transition hover:bg-bordeaux hover:border-bordeaux"
            >
              קביעת פגישת ייעוץ
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
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
                { href: "#about", label: "אודות" },
                { href: "#tchumim", label: "תחומי עיסוק" },
                { href: "#mediation", label: "גישורים ויישוב סכסוכים" },
                { href: "#testimonials", label: "המלצות" },
                { href: "#contact", label: "יצירת קשר" },
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
                <Link to="/en" className="block py-1 text-sm text-muted-foreground transition hover:text-bordeaux">
                  English
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
                כשהסכסוך מורכב,
                <br />
                <span className="text-bordeaux">הניסיון</span> עושה את ההבדל.
              </h1>

              <figure className="mt-10 max-w-xl border-r-2 border-gold pr-6">
                <blockquote className="font-serif text-lg leading-loose text-ink md:text-xl">
                  <p className="text-gold text-xl leading-snug sm:text-2xl md:whitespace-nowrap md:text-3xl lg:text-4xl">
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
                src={irisPortrait.url}
                alt="עו״ד איריס בודנהיימר"
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
            <div className="mb-16 max-w-3xl">
              <p className="eyebrow">תחומי עיסוק</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                איך אני יכולה לסייע
              </h2>
              <p className="mt-6 text-base leading-loose text-muted-foreground">
                ארבעה תחומים מרכזיים בהם מצטבר הניסיון המשפטי לכדי מענה אישי, מדויק ומחויב לכל לקוח.
              </p>
              <span className="rule-gold mt-8 block" />
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
                      <li key={it} className="flex items-start gap-3 text-[15px] text-ink/85">
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
                <p className="eyebrow">גישור ויישוב סכסוכים</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                  גישור — הדרך של הצדדים
                  <br />
                  לעצב את ההסכמות בעצמם.
                </h2>
                <span className="rule-gold mt-8 block" />
              </div>
            </div>

            <div className="grid gap-16 md:grid-cols-12">
              <div className="space-y-6 text-[17px] leading-loose text-ink/85 md:col-span-7">
                <p>
                  גישור הוא הליך רצוני שבו הצדדים הם אלו שמגבשים את ההסכמות
                  ביניהם. בניגוד להליך משפטי, שבו ההכרעה מועברת לבית המשפט,
                  הגישור מאפשר לצדדים לבחון את מכלול האינטרסים, הצרכים והחלופות
                  העומדים בפניהם ולנסות להגיע להסכמות המתאימות להם.
                </p>
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
                <div className="sticky top-10 space-y-6">
                  <div className="border border-gold/40 bg-cream p-8 md:p-10">
                    <p className="eyebrow">יתרונות הגישור</p>
                    <span className="rule-gold mt-5 block" />
                    <ul className="mt-6 space-y-4">
                      {[
                        "הצדדים מעצבים בעצמם את ההסכמות",
                        "חיסכון בזמן ובעלויות מול הליך משפטי",
                        "פתרון דיסקרטי ושמירה על מערכת היחסים",
                      ].map((it) => (
                        <li key={it} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                          <span aria-hidden className="mt-1 flex-shrink-0 text-gold">✦</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-border bg-cream p-8 md:p-10">
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
                </div>
              </aside>
            </div>

            {/* Court appreciations */}
            <div className="mt-20 border-t border-border/60 pt-16">
              <div className="mb-12 max-w-3xl">
                <p className="eyebrow">מתוך פסקי דין</p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-ink md:text-4xl">
                  דברי הוקרה משופטי בית משפט השלום
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
                  ציטוטים מתוך פסקי דין שניתנו בעקבות גישורים שהסתיימו בהסכמה,
                  ביחידת הגישור של בית משפט השלום בתל אביב.
                </p>
                <span className="rule-gold mt-8 block" />
              </div>

              <div className="grid gap-px bg-border/60 md:grid-cols-3">
                {[
                  { q: "יישר כוח למגשרת, עו״ד איריס בודנהיימר ולצדדים.", a: "שופטת בכירה רונית פינצ׳וק אלט", d: "19.05.2026" },
                  { q: "ניתן בזאת תוקף של פסק דין להסדר הגישור. בית המשפט מודה למגשרת.", a: "שופטת, סגנית הנשיאה אפרת בוסני", d: "11.05.2026" },
                  { q: "תודה למגשרת איריס. ניתן תוקף של פסק דין להסדר הגישור המצורף.", a: "שופטת צפורה אחונה קפש", d: "07.05.2026" },
                  { q: "בית המשפט מברך את הצדדים על סיום המחלוקת בדרך של הסכמות. התודה נתונה למגשרת על סיועה.", a: "שופטת נורית טביב מזרחי", d: "10.02.2026" },
                  { q: "אני מברכת את הצדדים על שהגיעו להבנות מחוץ לכותלי בית המשפט ומודה למגשרת על סיועה.", a: "רשמת בכירה איריס ענבי-אוזצקיר", d: "10.02.2026" },
                  { q: "בית המשפט מודה לצדדים וכן למגשרת שסיימו את העניין בדרכי שלום.", a: "רשם בכיר רונן פוליאק", d: "02.01.2026" },
                ].map((item, i) => (
                  <figure key={i} className="bg-background p-8 md:p-10">
                    <span aria-hidden className="font-serif text-5xl leading-none text-gold">״</span>
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
                  להורדת פסקי הדין המלאים (PDF)
                  <span aria-hidden className="text-gold">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* TESTIMONIALS */}
        <section id="testimonials" className="border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="mb-16 max-w-3xl">
              <p className="eyebrow">המלצות לקוחות</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl">
                מה אומרים הלקוחות
              </h2>
              <p className="mt-6 text-base leading-loose text-muted-foreground">
                מקבץ המלצות מלקוחות שליוויתי לאורך השנים — חברות, מנהלים ובעלי עסקים.
              </p>
              <span className="rule-gold mt-8 block" />
            </div>

            <div className="grid gap-px bg-border/70 md:grid-cols-2">
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} lang="he" />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border/60 bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
            <ContactForm lang="he" />


            <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">משרד</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  רחוב הארבעה 28
                  <br />
                  תל אביב, קומה 5
                </p>
                <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
                  <a href="https://waze.com/ul?ll=32.071389,34.787222&navigate=yes" target="_blank" rel="noopener noreferrer" className="text-bordeaux transition hover:underline">
                    ניווט ב-Waze
                  </a>
                  <span aria-hidden className="text-muted-foreground/40">·</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=HaArba%27a+28+Tel+Aviv" target="_blank" rel="noopener noreferrer" className="text-bordeaux transition hover:underline">
                    Google Maps
                  </a>
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
                <p className="eyebrow">שעות פעילות</p>
                <p className="mt-4 font-serif text-lg text-ink leading-relaxed">
                  ימים א'–ה'
                  <br />
                  9:00–18:00
                </p>
                <p className="mt-2 text-sm text-muted-foreground">פגישות בתיאום מראש</p>
              </div>
              <div className="bg-cream p-8 text-center">
                <p className="eyebrow">דוא״ל ואתר</p>
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
            איריס בודנהיימר, עו״ד · מגשרת · נוטריונית
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-bordeaux">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-bordeaux">
              <Facebook className="h-4 w-4" />
            </a>
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

      <a
        href="#contact"
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream shadow-lg shadow-ink/30 transition hover:bg-bordeaux md:hidden"
      >
        קביעת פגישה
      </a>
    </div>
  );
}
