import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

// סמן אימות לסנכרון דו-כיווני Lovable ↔ GitHub
// עדכן את MARKER מ-Lovable וודא שהוא מופיע ב-GitHub (ולהפך).
const MARKER = "SYNC-CHECK-001";
const UPDATED_AT = "2026-06-15T00:00:00Z";
const UPDATED_FROM = "Lovable";
const FILE_PATH = "src/routes/sync-check.tsx";
const DEFAULT_BRANCH = "main";

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
  const [repoInput, setRepoInput] = useState("");
  const [branch, setBranch] = useState(DEFAULT_BRANCH);
  const [status, setStatus] = useState<"idle" | "checking" | "match" | "mismatch" | "error">("idle");
  const [message, setMessage] = useState("הכניסו כתובת GitHub כדי להתחיל בדיקה אוטומטית.");
  const [remoteMarker, setRemoteMarker] = useState<string | null>(null);
  const [remoteCommit, setRemoteCommit] = useState<string | null>(null);

  useEffect(() => {
    const savedRepo = window.localStorage.getItem("sync-check-repo") ?? "";
    const savedBranch = window.localStorage.getItem("sync-check-branch") ?? DEFAULT_BRANCH;
    setRepoInput(savedRepo);
    setBranch(savedBranch);
  }, []);

  const repo = useMemo(() => parseGithubRepo(repoInput), [repoInput]);

  useEffect(() => {
    if (!repo) return;

    const currentRepo = repo;
    let cancelled = false;
    const controller = new AbortController();

    async function checkGithub() {
      setStatus("checking");
      setMessage("בודק את העדכון האחרון ב-GitHub...");
      setRemoteMarker(null);
      setRemoteCommit(null);

      try {
        window.localStorage.setItem("sync-check-repo", repoInput);
        window.localStorage.setItem("sync-check-branch", branch || DEFAULT_BRANCH);

        const activeBranch = branch.trim() || DEFAULT_BRANCH;
        const commitsUrl = `https://api.github.com/repos/${currentRepo.owner}/${currentRepo.name}/commits/${activeBranch}`;
        const rawUrl = `https://raw.githubusercontent.com/${currentRepo.owner}/${currentRepo.name}/${activeBranch}/${FILE_PATH}`;

        const [commitResponse, fileResponse] = await Promise.all([
          fetch(commitsUrl, { signal: controller.signal }),
          fetch(rawUrl, { signal: controller.signal }),
        ]);

        if (!commitResponse.ok || !fileResponse.ok) {
          throw new Error("לא ניתן למשוך נתונים. ודאו שה-repo ציבורי, שהענף נכון, ושהקובץ קיים.");
        }

        const commit = await commitResponse.json();
        const fileText = await fileResponse.text();
        const markerMatch = fileText.match(/const MARKER = ["']([^"']+)["']/);
        const githubMarker = markerMatch?.[1] ?? null;

        if (cancelled) return;

        setRemoteMarker(githubMarker);
        setRemoteCommit(commit.sha?.slice(0, 7) ?? null);

        if (githubMarker === MARKER) {
          setStatus("match");
          setMessage("הסנכרון נראה תקין: ה-MARKER ב-GitHub זהה לשינוי שמופיע כאן.");
        } else {
          setStatus("mismatch");
          setMessage("נמצא פער: ה-MARKER ב-GitHub שונה מהערך שמופיע ב-Lovable.");
        }
      } catch (error) {
        if (cancelled || controller.signal.aborted) return;
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "אירעה שגיאה בבדיקת GitHub.");
      }
    }

    checkGithub();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [repo, repoInput, branch]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-xl w-full border border-border rounded-lg p-8 bg-card shadow">
        <p className="eyebrow mb-3">Sync Verification</p>
        <h1 className="text-3xl font-serif mb-6">בדיקת סנכרון דו-כיווני</h1>

        <div className="mb-6 grid gap-3 text-sm">
          <label className="grid gap-1">
            <span className="text-muted-foreground">GitHub repo</span>
            <input
              value={repoInput}
              onChange={(event) => setRepoInput(event.target.value)}
              placeholder="owner/repo או https://github.com/owner/repo"
              className="h-10 rounded-md border border-input bg-background px-3 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              dir="ltr"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-muted-foreground">Branch</span>
            <input
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
              className="h-10 rounded-md border border-input bg-background px-3 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              dir="ltr"
            />
          </label>
        </div>

        <div className="mb-6 rounded-md border border-border bg-background p-4 text-sm">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-muted-foreground">GitHub status</span>
            <strong className="font-mono">{status}</strong>
          </div>
          <p className="leading-relaxed">{message}</p>
        </div>

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
          <div className="flex justify-between gap-4 border-t border-border pt-2">
            <dt className="text-muted-foreground">GitHub marker</dt>
            <dd className="font-mono">{remoteMarker ?? "—"}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">GitHub commit</dt>
            <dd className="font-mono">{remoteCommit ?? "—"}</dd>
          </div>
        </dl>

        <div className="mt-6 text-sm text-muted-foreground leading-relaxed">
          <p className="mb-2">איך לבדוק:</p>
          <ol className="list-decimal pr-5 space-y-1">
            <li>הכניסו כתובת repo ציבורי והמסך ימשוך לבד את <code className="font-mono">{FILE_PATH}</code>.</li>
            <li>שנו את ה-MARKER מ-GitHub, חזרו לדף — הערך אמור להתעדכן.</li>
            <li>שנו אותו מ-Lovable, בדקו ב-GitHub שה-commit הגיע.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}

function parseGithubRepo(input: string) {
  const value = input.trim().replace(/\.git$/, "");
  if (!value) return null;

  const urlMatch = value.match(/github\.com\/([^/]+)\/([^/?#]+)/i);
  if (urlMatch) return { owner: urlMatch[1], name: urlMatch[2] };

  const shortMatch = value.match(/^([^/\s]+)\/([^/\s]+)$/);
  if (shortMatch) return { owner: shortMatch[1], name: shortMatch[2] };

  return null;
}
