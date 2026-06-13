import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/LegalPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | עו״ד איריס בודנהיימר" },
      {
        name: "description",
        content:
          "הצהרת הנגישות של אתר משרד עו״ד איריס בודנהיימר — מחויבות לתקן הישראלי ת״י 5568 ולתקני WCAG 2.1 ברמה AA.",
      },
      { property: "og:title", content: "הצהרת נגישות | עו״ד איריס בודנהיימר" },
      {
        property: "og:description",
        content: "מחויבות להנגשת האתר לאנשים עם מוגבלויות.",
      },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <LegalPage eyebrow="הצהרה משפטית" title="הצהרת נגישות">
      <LegalH2>מחויבות לנגישות</LegalH2>
      <p>
        משרד עו״ד איריס בודנהיימר מחויב להנגשת האתר לאנשים עם מוגבלויות, ופועל
        ליישום הנחיות הנגישות של התקן הישראלי (ת״י 5568) ותקני WCAG 2.1 ברמה AA.
      </p>

      <LegalH2>פעולות שבוצעו</LegalH2>
      <ul className="list-disc space-y-2 pr-6">
        <li>התאמת האתר לגלישה באמצעות מקלדת</li>
        <li>שימוש בניגודיות צבעים מתאימה</li>
        <li>תיוג תמונות בטקסט חלופי (Alt Text)</li>
        <li>מבנה כותרות היררכי ותקני</li>
        <li>תאימות לקוראי מסך</li>
      </ul>

      <LegalH2>יצירת קשר בנושא נגישות</LegalH2>
      <p>אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו ונשמח לסייע:</p>
      <ul className="list-disc space-y-2 pr-6">
        <li>
          טלפון:{" "}
          <a href="tel:+97236919101" className="text-bordeaux hover:underline" dir="ltr">
            +972-3-691-9101
          </a>
        </li>
        <li>
          דוא״ל:{" "}
          <a href="mailto:iris@iblaw.co.il" className="text-bordeaux hover:underline">
            iris@iblaw.co.il
          </a>
        </li>
      </ul>
    </LegalPage>
  );
}
