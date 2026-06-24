## Problem

The testimonials grid uses a "1px divider via container background" trick:

```tsx
<div className="grid gap-px bg-border/70 md:grid-cols-2">
  <TestimonialCard ... />  // <figure class="flex flex-col bg-background p-8 md:p-12">
  ...
</div>
```

The `bg-border/70` on the container is meant to show only through the 1px `gap-px` seams between cards. But cards in the same grid row have different rendered heights (e.g. 423 vs 487 px, 399 vs 463 px), so the shorter card leaves a ~60px tall strip of container background exposed below it — those are the dark tan rectangles the user sees, one under "אבי איכר" and one under "אלי פומרנץ".

Grid items default to `align-self: stretch`, so they should fill the row. They don't here because each `<figure>` is `flex flex-col` with content that doesn't expand — and the recent change from `mt-auto` to `mt-8` on `<figcaption>` removed the spacer that previously pushed the caption to the bottom and effectively stretched the figure.

## Fix options (pick one)

**Option A — make cards fill their grid row (preferred, restores the divider effect):**
Add `h-full` to the `<figure>` in `src/components/TestimonialCard.tsx`. Cards then stretch to the tallest sibling in each row and the container background only shows through the intended 1px seams.

**Option B — keep cards their natural height, drop the seam effect:**
In both `src/routes/index.tsx` and `src/routes/en.tsx`, remove `gap-px bg-border/70` from the testimonials grid (replace with e.g. `gap-8` and no container background). No dark bands possible, but you also lose the thin divider lines between cards.

## Question for you

Which do you want?
- **A** — keep the thin divider lines, just stop the dark gaps (1-line change in TestimonialCard).
- **B** — drop the divider lines entirely and use normal gaps between cards.

I'll implement whichever you pick.
