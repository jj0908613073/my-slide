---
name: Clean Tech
description: Light, white-canvas deck for technical talks — dark slate type, one low-saturation blue accent, and content pages built around large framed screenshots.
mode: light
---

# Clean Tech

A calm, professional light theme for engineering and product presentations. White canvas, high-contrast slate text, a single desaturated blue that does all the pointing. Content pages are screenshot-first: a large framed image is the hero and copy stays out of its way. Motion is minimal — a quiet fade-and-lift on entry, nothing that competes with the content.

## Palette

| Role      | Value     | Notes                                             |
| --------- | --------- | ------------------------------------------------- |
| bg        | `#ffffff` | page background — pure white                       |
| text      | `#0f172a` | primary copy, headings (slate 900)                 |
| accent    | `#3b6ea5` | eyebrow, key numbers, underlines, active dot — low-saturation blue |
| muted     | `#64748b` | secondary copy, captions, footer (slate 500)       |
| surface   | `#f4f6f8` | screenshot mat / panel fill behind images          |
| border    | `#e2e8f0` | hairlines, image frame stroke, dividers (slate 200) |
| accentSoft| `#e8eef6` | accent tint for chips, highlight backgrounds        |

Keep it monochrome + one blue. No second hue, no gradients, no dark panels.

## Typography

- Display font: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", system-ui, sans-serif` — weight 700–800 for headlines.
- Body font: same system stack — weight 400–500 for copy.
- Type-scale overrides (only what differs from `slide-authoring` defaults):
  - Hero title: 132 px (below the default 140–200 band — this theme reads quieter than a keynote deck).
  - Page heading: 68 px.
  - Body text: 34 px.
  - Caption / label: 24 px.
  - Eyebrow: 24 px, letter-spacing `0.18em`, uppercase.
- Tighten headline letter-spacing to `-0.02em`; leave body at normal.

## Layout

- Content padding: 120 px from the 1920 × 1080 canvas edges.
- Alignment: left-aligned, single column for text; screenshot pages use a two-region split (narrow text rail + large image) or a full-width framed image with a caption strip.
- Screenshots are the visual subject on content pages: frame them in a `border` hairline over the `surface` mat, rounded 16 px, with a soft shadow. The image should occupy the majority of the visual weight; text is a supporting rail, not a competing block.
- Divider under eyebrows / above footers: 1 px `border`.

## Fixed components

Paste-ready. Copy verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: 132,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#0f172a',
    }}
  >
    {children}
  </h1>
);
```

### Footer

Pull the page number from `useSlidePageNumber()` — never hardcode `pageNum` / `total`.

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 22,
        color: '#64748b',
        borderTop: '1px solid #e2e8f0',
        paddingTop: 20,
      }}
    >
      <span>Clean Tech · 2026</span>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};
```

### Eyebrow

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#3b6ea5',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}
  >
    <span style={{ width: 28, height: 2, background: '#3b6ea5', display: 'inline-block' }} />
    {children}
  </div>
);
```

### Screenshot frame (the content-page hero)

Content pages are built around this. Drop a real screenshot into `slides/<id>/assets/` and import it, or leave an `ImagePlaceholder` for the user to fill.

```tsx
const Shot = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: '#f4f6f8',
      border: '1px solid #e2e8f0',
      borderRadius: 16,
      padding: 12,
      boxShadow: '0 24px 60px -28px rgba(15, 23, 42, 0.28)',
      overflow: 'hidden',
      display: 'flex',
    }}
  >
    {/* an <img style={{ width: '100%', borderRadius: 8, display: 'block' }} /> */}
    {children}
  </div>
);
```

## Motion

- Philosophy: **subtle**. A single quiet fade-and-lift on entering elements, and a shared page transition that rises 6 px. Nothing loops, nothing bounces. Motion signals "next thought," never draws attention to itself.
- Reusable keyframe (paste-ready):

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Apply with staggered `animation-delay` on stacked elements: `animation: fadeUp 520ms cubic-bezier(0, 0, 0.2, 1) both;`.

- Page transition (module-level default — the "RISE" DNA from `slide-authoring`):

```tsx
import type { SlideTransition } from '@open-slide/core';

export const transition: SlideTransition = {
  duration: 200,
  exit:  { duration: 140, easing: 'cubic-bezier(0.4, 0, 1, 1)',
           keyframes: [
             { opacity: 1, transform: 'translateY(0)' },
             { opacity: 0, transform: 'translateY(-4px)' },
           ] },
  enter: { duration: 200, delay: 80, easing: 'cubic-bezier(0, 0, 0.2, 1)',
           keyframes: [
             { opacity: 0, transform: 'translateY(6px)' },
             { opacity: 1, transform: 'translateY(0)' },
           ] },
};
```

## Aesthetic

Clean, editorial-technical, print-adjacent. Think a well-typeset engineering blog or a Stripe/Linear-style product page: generous white space, one accent that earns its place, hairline rules instead of boxes, and real screenshots framed like specimens. Commit to **minimal**. Avoid: dark panels, gradients, drop-shadow-heavy cards, decorative emoji, more than one hue, rounded-everything, and any motion that loops or bounces. The screenshot is the star — every other element defers to it.

## Example usage

```tsx
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: '#ffffff', color: '#0f172a', padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>PLATFORM OVERVIEW</Eyebrow>
    <Title>Ship faster with confidence</Title>
    <p style={{ fontSize: 34, color: '#64748b', maxWidth: 1180, marginTop: 28, lineHeight: 1.55 }}>
      A short subtitle that frames what this deck is about.
    </p>
    <Footer />
  </div>
);
```
