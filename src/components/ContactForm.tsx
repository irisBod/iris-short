import { useState, type FormEvent } from "react";

type Lang = "he" | "en";

const WHATSAPP_PHONE = "972544924054";
const EMAIL_TO = "iris@iblaw.co.il";

const t = {
  he: {
    eyebrow: "פגישת ייעוץ",
    title: "אם הגעתם לכאן — מוזמנים ליצור קשר.",
    sub: "פגישת ייעוץ ראשונה היא הזדמנות להבין את התמונה במלואה ולבחון יחד את הדרך המתאימה ביותר עבורכם — בדיסקרטיות מלאה.",
    name: "שם מלא",
    phone: "טלפון נייד",
    email: "דוא״ל",
    subject: "נושא הפנייה",
    desc: "תיאור קצר",
    selectPlaceholder: "בחרו נושא",
    subjects: [
      "ייעוץ וליווי משפטי לעסקים וחברות",
      "גישור עסקי",
      "גישור בסכסוכים משפחתיים (עסקים, נכסים, ירושה)",
      "טיפול משפטי בירושה / צוואה (לרבות הגשת התנגדות)",
      "ייפוי כוח מתמשך",
      "ייעוץ בדיני עבודה",
      "אחר",
    ],
    whatsapp: "שליחה בוואטסאפ",
    mail: "שליחה במייל",
    note: "בחרו ערוץ — הפנייה תיפתח מוכנה עם הפרטים, ללא שמירה באתר",
    errorRequired: "נא למלא שם, טלפון ודוא״ל",
    headline: "פנייה מהאתר",
    lName: "שם",
    lPhone: "טלפון",
    lEmail: "דוא״ל",
    lSubject: "נושא",
    lDesc: "תיאור",
    emailSubjectPrefix: "פנייה מהאתר",
  },
  en: {
    eyebrow: "Consultation",
    title: "If you've reached this point — you're welcome to get in touch.",
    sub: "A first consultation is an opportunity to understand the full picture and to consider together the path that best fits you — in complete discretion.",
    name: "Full name",
    phone: "Mobile phone",
    email: "Email",
    subject: "Subject",
    desc: "Brief description",
    selectPlaceholder: "Choose a subject",
    subjects: [
      "Legal counsel for businesses and companies",
      "Business mediation",
      "Family disputes mediation (business, assets, inheritance)",
      "Estates & wills (including filing objections)",
      "Enduring power of attorney",
      "Employment law counsel",
      "Other",
    ],
    whatsapp: "Send via WhatsApp",
    mail: "Send via email",
    note: "Choose a channel — your inquiry opens ready with your details, nothing stored on the site",
    errorRequired: "Please fill in name, phone and email",
    headline: "Website inquiry",
    lName: "Name",
    lPhone: "Phone",
    lEmail: "Email",
    lSubject: "Subject",
    lDesc: "Description",
    emailSubjectPrefix: "Website inquiry",
  },
} as const;

export default function ContactForm({ lang }: { lang: Lang }) {
  const c = t[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const buildMessage = () => {
    const subj = subject || c.subjects[0];
    const lines = [
      c.headline,
      "",
      `${c.lName}: ${name}`,
      `${c.lPhone}: ${phone}`,
      `${c.lEmail}: ${email}`,
      `${c.lSubject}: ${subj}`,
      "",
      `${c.lDesc}: ${desc}`,
    ];
    return { body: lines.join("\n"), subj };
  };

  const validate = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError(c.errorRequired);
      return false;
    }
    setError("");
    return true;
  };

  const send = (channel: "wa" | "mail") => (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const { body, subj } = buildMessage();
    if (channel === "wa") {
      window.open(
        `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
        `${c.emailSubjectPrefix} — ${subj}`,
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  const inputCls =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-[15px] text-ink outline-none transition focus:border-ink";
  const labelCls = "block text-[13px] font-medium tracking-wide text-ink/80";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          {c.title}
        </h2>
        <span className="rule-gold mx-auto mt-8 block w-24" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-muted-foreground">
          {c.sub}
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-12 space-y-5 border border-border bg-cream p-6 md:p-10"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className={labelCls} htmlFor="cf-name">
              {c.name} *
            </label>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
              className={inputCls}
            />
          </div>
          <div className="space-y-2">
            <label className={labelCls} htmlFor="cf-phone">
              {c.phone} *
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={40}
              required
              className={inputCls}
              dir="ltr"
            />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className={labelCls} htmlFor="cf-email">
              {c.email} *
            </label>
            <input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={120}
              required
              className={inputCls}
              dir="ltr"
            />
          </div>
          <div className="space-y-2">
            <label className={labelCls} htmlFor="cf-subject">
              {c.subject}
            </label>
            <select
              id="cf-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputCls}
            >
              <option value="">{c.selectPlaceholder}</option>
              {c.subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className={labelCls} htmlFor="cf-desc">
            {c.desc}
          </label>
          <textarea
            id="cf-desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            maxLength={2000}
            rows={5}
            className={inputCls}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-bordeaux">
            {error}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            onClick={send("wa")}
            className="inline-flex flex-1 items-center justify-center gap-3 rounded-sm bg-ink px-6 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-bordeaux"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            {c.whatsapp}
          </button>
          <button
            type="button"
            onClick={send("mail")}
            className="inline-flex flex-1 items-center justify-center gap-3 rounded-sm border border-ink bg-transparent px-6 py-4 text-sm font-medium tracking-wide text-ink transition hover:bg-ink hover:text-cream"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
              <path d="M3 6h18v12H3z" />
              <path d="M3 6l9 7 9-7" />
            </svg>
            {c.mail}
          </button>
        </div>

        <p className="pt-2 text-center text-xs text-muted-foreground">{c.note}</p>
      </form>
    </div>
  );
}
