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

In `style.css`, `.page-shell` uses `width: min(90%, 46rem)`. `min()` chooses the smaller value, so the page takes 90% of its container until it reaches the 46rem cap.

`.bulletin` uses `repeat(auto-fit, minmax(12rem, 1fr))` for its columns. A column needs at least 12rem. When two columns and their gap fit, the cards share a row instead of stacking.

The third decision belongs to `.card`: `padding: clamp(.75rem, 2vw, 1.5rem)` makes the inside spacing grow with the viewport, within limits. These rules control page width, column width, and padding separately. None needs a media query.

## Read the units and limits

`rem` follows the root font size: with a 16px root, `12rem` is 192px. A percentage width such as `90%` follows the containing block. `vw` instead follows the preview viewport: `1vw` is one hundredth of its width. Those are different reference sizes.

Read `clamp(minimum, preferred, maximum)` from left to right. Here padding follows `2vw` only while that value sits between `.75rem` and `1.5rem`; outside the range it stays at the nearest bound.

In `repeat(auto-fit, minmax(12rem, 1fr))`, `auto-fit` fits as many tracks as the container can hold and collapses unused ones. `minmax()` gives each track its lower and upper limits; `1fr` shares the remaining space. If the container becomes narrower than even one 12rem track, that minimum can still cause overflow. Fluid sizing is not a promise that any content fits any width.

## Try the demo

Resize the preview from narrow to wide and watch the cards move from a stack to a row. Change `12rem` to `16rem` briefly; the cards need more room before sharing a row. Restore the original value afterward.

**Checkpoint:** You can point to the width cap, the column minimum, and the padding bounds in the stylesheet. Next you will make similar choices for a different forecast.
