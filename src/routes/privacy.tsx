import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2, LegalH3 } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | עו״ד איריס בודנהיימר" },
      {
        name: "description",
        content:
          "מדיניות הפרטיות של אתר משרד עו״ד איריס בודנהיימר — איסוף מידע, שימוש בקובצי Cookie ואבטחת מידע.",
      },
      { property: "og:title", content: "מדיניות פרטיות | עו״ד איריס בודנהיימר" },
      {
        property: "og:description",
        content: "כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="הצהרה משפטית" title="מדיניות פרטיות">
      <p>
        משרד עו״ד איריס בודנהיימר מכבד את פרטיות המבקרים באתר ומחויב להגנה על
        המידע האישי שלהם.
      </p>

      <LegalH2>איסוף מידע</LegalH2>
      <p>
        אנו אוספים מידע שאתם מספקים לנו באופן ישיר, כגון שם, כתובת דוא״ל ומספר
        טלפון בעת מילוי טופס יצירת קשר. בנוסף, האתר אוסף מידע טכני באמצעות
        קובצי Cookie.
      </p>

      <LegalH2>שימוש במידע</LegalH2>
      <p>
        המידע שנאסף משמש ליצירת קשר עמכם בהתאם לפנייתכם, לשיפור חוויית הגלישה
        באתר ולמטרות סטטיסטיות.
      </p>

      <LegalH2>קובצי Cookie</LegalH2>
      <p>
        אתר זה משתמש בקובצי Cookie כדי לספק לכם חוויית גלישה מיטבית. קובצי
        Cookie הם קבצים קטנים המאוחסנים בדפדפן שלכם ומשמשים לזיהוי חוזר, שמירת
        העדפות ולניתוח סטטיסטי של השימוש באתר.
      </p>

      <LegalH3>קובצי Cookie הכרחיים</LegalH3>
      <p>נדרשים לפעולה תקינה של האתר. לא ניתן לבטלם.</p>

      <LegalH3>קובצי Cookie לניתוח וסטטיסטיקה</LegalH3>
      <p>מסייעים לנו להבין כיצד מבקרים משתמשים באתר.</p>

      <LegalH3>קובצי Cookie לשיווק</LegalH3>
      <p>משמשים להצגת תוכן ופרסומות רלוונטיים.</p>

      <LegalH2>אבטחת מידע</LegalH2>
      <p>
        אנו נוקטים באמצעי אבטחה מקובלים כדי להגן על המידע האישי שלכם מפני גישה
        בלתי מורשית, שימוש לרעה או חשיפה.
      </p>

      <LegalH2>יצירת קשר</LegalH2>
      <p>
        לשאלות בנושא מדיניות הפרטיות, ניתן לפנות אלינו בדוא״ל:{" "}
        <a href="mailto:iris@iblaw.co.il" className="text-bordeaux hover:underline">
          iris@iblaw.co.il
        </a>{" "}
        או בטלפון:{" "}
        <a href="tel:+97236919101" className="text-bordeaux hover:underline" dir="ltr">
          +972-3-691-9101
        </a>
        .
      </p>
    </LegalPage>
  );
}
