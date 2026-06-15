import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { openExternal } from "./external-link";

type AnchorEvt = {
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  button?: number;
  preventDefault: () => void;
};

function makeEvent(overrides: Partial<AnchorEvt> = {}) {
  return {
    metaKey: false,
    ctrlKey: false,
    shiftKey: false,
    button: 0,
    preventDefault: vi.fn(),
    ...overrides,
  } as unknown as Parameters<ReturnType<typeof openExternal>>[0];
}

const URL = "https://wa.me/972544924054";

describe("openExternal", () => {
  let originalOpen: typeof window.open;
  let originalLocation: Location;

  beforeEach(() => {
    originalOpen = window.open;
    originalLocation = window.location;
    // Reset window.top to itself (standalone page).
    Object.defineProperty(window, "top", { value: window, configurable: true, writable: true });
  });

  afterEach(() => {
    window.open = originalOpen;
    Object.defineProperty(window, "location", { value: originalLocation, configurable: true, writable: true });
    vi.restoreAllMocks();
  });

  it("standalone page: opens URL in a new tab via window.open and prevents default", () => {
    const fakeWin = { focus: vi.fn() } as unknown as Window;
    window.open = vi.fn(() => fakeWin) as unknown as typeof window.open;

    const evt = makeEvent();
    openExternal(URL)(evt);

    expect(evt.preventDefault).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(URL, "_blank", "noopener,noreferrer");
    expect((fakeWin as { focus: ReturnType<typeof vi.fn> }).focus).toHaveBeenCalled();
  });

  it("standalone page with popup blocker: falls back to location.href", () => {
    window.open = vi.fn(() => null) as unknown as typeof window.open;
    const loc = { href: "" } as Location;
    Object.defineProperty(window, "location", { value: loc, configurable: true, writable: true });

    openExternal(URL)(makeEvent());
    expect(loc.href).toBe(URL);
  });

  it("embedded preview (iframe): lets the native target=_top click through", () => {
    Object.defineProperty(window, "top", { value: {}, configurable: true, writable: true });
    window.open = vi.fn() as unknown as typeof window.open;

    const evt = makeEvent();
    openExternal(URL)(evt);

    expect(evt.preventDefault).not.toHaveBeenCalled();
    expect(window.open).not.toHaveBeenCalled();
  });

  it("modifier-click (ctrl): allows native behaviour, no preventDefault / open", () => {
    window.open = vi.fn() as unknown as typeof window.open;
    const evt = makeEvent({ ctrlKey: true });
    openExternal(URL)(evt);
    expect(evt.preventDefault).not.toHaveBeenCalled();
    expect(window.open).not.toHaveBeenCalled();
  });

  it("middle-click (button=1): allows native behaviour", () => {
    window.open = vi.fn() as unknown as typeof window.open;
    const evt = makeEvent({ button: 1 });
    openExternal(URL)(evt);
    expect(evt.preventDefault).not.toHaveBeenCalled();
    expect(window.open).not.toHaveBeenCalled();
  });

  it("window.open throws: falls back to location.href", () => {
    window.open = vi.fn(() => {
      throw new Error("blocked");
    }) as unknown as typeof window.open;
    const loc = { href: "" } as Location;
    Object.defineProperty(window, "location", { value: loc, configurable: true, writable: true });

    openExternal(URL)(makeEvent());
    expect(loc.href).toBe(URL);
  });
});
