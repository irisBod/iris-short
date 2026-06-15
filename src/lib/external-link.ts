import type { MouseEvent } from "react";

export function openExternal(url: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (cmd/ctrl/shift/middle) behave natively
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
      return;
    }
    event.preventDefault();
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      try {
        (window.top ?? window).location.href = url;
      } catch {
        window.location.href = url;
      }
    }
  };
}
