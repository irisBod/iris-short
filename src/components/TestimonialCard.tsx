import { useState } from "react";

export default function TestimonialCard({
  quote,
  author,
  role,
  lang,
}: {
  quote: string[];
  author: string;
  role?: string;
  lang: "he" | "en";
}) {
  const [open, setOpen] = useState(false);
  const isLong = quote.length > 1;
  const visible = open || !isLong ? quote : [quote[0]];
  const more = lang === "he" ? "קרא עוד" : "Read more";
  const less = lang === "he" ? "הצג פחות" : "Show less";

  return (
    <figure className="flex h-full flex-col bg-background p-8 md:p-12">
      <span aria-hidden className="font-serif text-5xl leading-none text-gold">
        {lang === "he" ? "״" : "\u201C"}
      </span>
      <blockquote className="mt-4 space-y-4 text-[16px] leading-loose text-ink/85">
        {visible.map((p, i) => (
          <p key={i} className={!open && isLong && i === 0 ? "line-clamp-5" : ""}>
            {p}
          </p>
        ))}
      </blockquote>
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-4 self-start border-b border-gold/60 pb-0.5 text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-bordeaux"
        >
          {open ? less : more}
        </button>
      )}
      <figcaption className="mt-8 pt-8">
        <span className="rule-gold block" />
        <p className="mt-5 font-serif text-lg text-ink">{author}</p>
        {role && <p className="mt-1 text-sm text-muted-foreground">{role}</p>}
      </figcaption>
    </figure>
  );
}
