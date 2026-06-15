import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/github-guide")({
  head: () => ({
    meta: [
      { title: "Connect Lovable to GitHub — Step-by-Step Guide" },
      {
        name: "description",
        content:
          "How to connect your Lovable project to GitHub for two-way sync, on desktop and mobile.",
      },
      { property: "og:title", content: "Connect Lovable to GitHub" },
      {
        property: "og:description",
        content:
          "Step-by-step guide to enable two-way GitHub sync from your Lovable project.",
      },
    ],
  }),
  component: GithubGuidePage,
});

function GithubGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Connect Lovable to GitHub
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Enable two-way sync so you can edit the project locally or hand it
            off to a third party (e.g. Claude Code, another developer).
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">On desktop</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              In the Lovable editor, look at the chat input at the bottom and
              click the <strong>+</strong> (plus) button on the left.
            </li>
            <li>
              Select <strong>GitHub</strong>.
            </li>
            <li>
              Click <strong>Connect to GitHub</strong> and authorize the Lovable
              app in GitHub.
            </li>
            <li>
              Choose the account or organization where the repository should be
              created.
            </li>
            <li>
              Back in Lovable, click <strong>Create Repository</strong>.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">On mobile</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              In <strong>Chat</strong> mode, tap the <strong>…</strong> button
              in the bottom-right corner.
            </li>
            <li>
              Select <strong>GitHub</strong> → <strong>Connect project</strong>.
            </li>
            <li>Authorize the Lovable GitHub app and pick a destination.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What you get</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Every change you make in Lovable is pushed automatically to
              GitHub.
            </li>
            <li>
              Every push to GitHub (from your laptop, Claude Code, or any
              collaborator) syncs back into Lovable automatically.
            </li>
            <li>True two-way sync — no manual import/export.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Other ways to share</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">ZIP download (one-way)</h3>
              <p className="text-muted-foreground">
                Open the Code Editor → <strong>Download codebase</strong>. Send
                the ZIP to a third party. Requires a paid workspace. Changes
                made to the ZIP will <em>not</em> sync back into Lovable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Share preview only</h3>
              <p className="text-muted-foreground">
                <strong>Share → Share preview</strong> creates a public preview
                link that lasts 7 days. No source code is shared.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recommendation</h2>
          <p>
            Use the GitHub connection. It is the only path that gives a third
            party real editing access <em>and</em> keeps changes in sync with
            your Lovable project in both directions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              If the <strong>+</strong> button doesn't open, refresh the page
              (Ctrl/Cmd + R).
            </li>
            <li>
              If GitHub still doesn't appear, sign out of Lovable and sign back
              in.
            </li>
            <li>
              Make sure you're a member (with repo-creation rights) of the
              GitHub account or organization you select.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
