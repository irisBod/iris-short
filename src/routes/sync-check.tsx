import { createFileRoute } from "@tanstack/react-router";

// סמן אימות לסנכרון דו-כיווני Lovable ↔ GitHub
// עדכן את MARKER מ-Lovable וודא שהוא מופיע ב-GitHub (ולהפך).
const MARKER = "SYNC-CHECK-001";
const UPDATED_AT = "2026-06-15T00:00:00Z";
const UPDATED_FROM = "Lovable";

export const Route = createFileRoute("/sync-check")({
  head: () => ({
    meta: [
      { title: "בדיקת סנכרון | GitHub ↔ Lovable" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: SyncCheck,
});

function SyncCheck() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-xl w-full border border-border rounded-lg p-8 bg-card shadow">
        <p className="eyebrow mb-3">Sync Verification</p>
        <h1 className="text-3xl font-serif mb-6">בדיקת סנכרון דו-כיווני</h1>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-border pb-2">
            <dt className="text-muted-foreground">Marker</dt>
            <dd className="font-mono">{MARKER}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border pb-2">
            <dt className="text-muted-foreground">Updated at</dt>
            <dd className="font-mono">{UPDATED_AT}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border pb-2">
            <dt className="text-muted-foreground">Updated from</dt>
            <dd className="font-mono">{UPDATED_FROM}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Rendered at</dt>
            <dd className="font-mono">{new Date().toISOString()}</dd>
          </div>
        </dl>

        <div className="mt-6 text-sm text-muted-foreground leading-relaxed">
          <p className="mb-2">איך לבדוק:</p>
          <ol className="list-decimal pr-5 space-y-1">
            <li>פתחו את הקובץ <code className="font-mono">src/routes/sync-check.tsx</code> ב-GitHub וודאו שה-MARKER זהה.</li>
            <li>שנו את ה-MARKER מ-GitHub (commit ל-main), חזרו לדף — הערך אמור להתעדכן.</li>
            <li>שנו אותו מ-Lovable, בדקו ב-GitHub שה-commit הגיע.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
