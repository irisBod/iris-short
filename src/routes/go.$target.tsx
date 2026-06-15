import { createFileRoute, Link } from "@tanstack/react-router";

const destinations = {
  whatsapp: "https://wa.me/972544924054",
  waze: "https://waze.com/ul?ll=32.071389,34.787222&navigate=yes",
  maps: "https://www.google.com/maps/search/?api=1&query=HaArba%27a+28+Tel+Aviv",
  website: "https://www.iblaw.co.il",
  linkedin: "https://www.linkedin.com/in/iris-bodenheimer-44734/",
  facebook: "https://www.facebook.com/iris.bodenheimer.lawyer",
} as const;

export const Route = createFileRoute("/go/$target")({
  component: ExternalRedirect,
});

function ExternalRedirect() {
  const { target } = Route.useParams();
  const destination = destinations[target as keyof typeof destinations];

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-ink">
      <div>
        <p className="font-serif text-2xl">פתיחת קישור חיצוני</p>
        {destination ? (
          <a href={destination} target="_top" className="mt-4 inline-block text-bordeaux underline">
            פתיחה ב־WhatsApp
          </a>
        ) : (
          <Link to="/" className="mt-4 inline-block text-bordeaux underline">
            חזרה לאתר
          </Link>
        )}
      </div>
    </main>
  );
}