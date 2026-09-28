---
title: "Fluid sizing demo"
slug: fluid-sizing-demo
order: 3
language: css
lesson_type: coding
runtime: srcdoc
summary: "Explore min(), minmax(), and clamp() in a fluid forecast layout."
seo_title: "Fluid sizing demo | Intro to CSS"
seo_description: "Inspect a fluid-width page, an auto-fit grid, and bounded padding."
seo_keywords:
  - CSS
  - fluid sizing demo
  - CSS demo
---

# Fluid sizing demo

A breakpoint can flip a grid at a chosen width. This park forecast instead lets available space determine the layout between sizes.

In `style.css`, `.page-shell` uses `width: min(90%, 46rem)`: it takes the smaller of 90% of its container or 46rem, keeping a margin on narrow screens and a readable limit on wide ones. `.bulletin` uses `repeat(auto-fit, minmax(12rem, 1fr))`. Each card column needs at least 12rem; when there is room, the columns expand and another card fits beside the first. `gap` keeps them apart. `.card` uses `clamp(.75rem, 2vw, 1.5rem)` for padding: the middle value follows viewport width but never goes below or above the limits. These are three independent sizing decisions; no media query is needed here.

## Try the demo

Resize the preview from narrow to wide and watch the cards move from a stack to a row. Change `12rem` to `16rem` briefly; the cards need more room before sharing a row. Restore the original value afterward.

**Checkpoint:** You can point to the width cap, the column minimum, and the padding bounds in the stylesheet. Next you will make similar choices for a different forecast.
