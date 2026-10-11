---
title: Background Layer Demo
slug: background-layer-demo
order: 3
language: html
summary: See how a CSS linear gradient layers color over a night-market hero panel.
seo_title: CSS Background Gradient Demo | Visual Style
seo_description: Inspect a CSS linear-gradient and background color working together in a night-market hero panel.
seo_keywords:
  - CSS backgrounds
  - linear gradient
  - background image
  - CSS demo
lesson_type: coding
hints:
  - "`background-image` can hold a gradient without an image file."
---

# Paint a gradient behind the welcome message

A gradient blends colors across a surface. CSS can generate that image directly, so the market welcome panel does not need an image file.

```css
.hero {
  background-color: #7c3aed;
  background-image: linear-gradient(135deg, #7c3aed, #ec4899);
}
```

`background-image` places the gradient above the solid `background-color`. In `linear-gradient(...)`, the first value sets its direction: `135deg` runs diagonally toward the lower right. The comma-separated colors are the start and end of the blend. The opaque gradient covers the solid color; removing the image declaration reveals the violet fallback.

The dark backing behind the text is supplied so the small white text remains readable over the pink area. Sizing and centering are also supplied; focus on the background declarations.

## Compare the layers

Run. Change `135deg` to `90deg` and Run again: the blend now runs left to right. Restore `135deg`. Temporarily remove `background-image`, Run to see the solid violet layer, then undo that removal before moving on.
