import type { MouseEvent } from "react";

export function openExternal(url: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (cmd/ctrl/shift/middle) behave natively
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
      return;
    }
    try {
      const win = window.open(url, "_blank");
      if (win) {
        event.preventDefault();
        win.opener = null;
        win.focus();
      }
    } catch {
      // If the preview sandbox blocks window.open, let the native anchor try.
    }
  };
}
