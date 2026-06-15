import type { MouseEvent } from "react";

export function openExternal(url: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (cmd/ctrl/shift/middle) behave natively.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
      return;
    }

    // In Lovable's preview the app is embedded in a sandboxed iframe. Opening
    // external sites in a new popup can inherit that sandbox and trigger
    // ERR_BLOCKED_BY_RESPONSE, so embedded previews should use the link's
    // native target="_top" navigation from the real user click.
    if (window.self !== window.top) {
      return;
    }

    try {
      event.preventDefault();
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (win) {
        win.focus();
      } else {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };
}
