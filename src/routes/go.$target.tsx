import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

const destinations = {
  whatsapp: { label: "WhatsApp", url: "https://wa.me/972544924054" },
  waze: { label: "Waze", url: "https://waze.com/ul?ll=32.071389,34.787222&navigate=yes" },
  maps: { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=HaArba%27a+28+Tel+Aviv" },
  website: { label: "Website", url: "https://www.iblaw.co.il" },
  linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/iris-bodenheimer-44734/" },
  facebook: { label: "Facebook", url: "https://www.facebook.com/iris.bodenheimer.lawyer" },
} as const;

export const Route = createFileRoute("/go/$target")({
  component: ExternalLinkFallback,
});

function ExternalLinkFallback() {
  const { target } = Route.useParams();
  const destination = destinations[target as keyof typeof destinations];

  useEffect(() => {
    if (!destination) {
      return;
    }

    window.location.replace(destination.url);
  }, [destination]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-ink">
      <div>
        <p className="font-serif text-2xl">
          {destination ? `פותח את ${destination.label}…` : "הקישור לא נמצא"}
        </p>
        {destination ? (
          <a
            href={destination.url}
            className="mt-4 inline-block text-bordeaux underline"
          >
            אם הקישור לא נפתח, לחצו כאן
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