---
title: "Fluid weather bulletin exercise"
slug: exercise-fluid-sizing
order: 4
language: css
lesson_type: coding
runtime: srcdoc
summary: "Build a fluid forecast with min(), auto-fit minmax(), and clamp()."
seo_title: "Fluid weather bulletin exercise | Intro to CSS"
seo_description: "Practice a fluid-width page, auto-fit grid columns, and bounded card padding."
seo_keywords:
  - CSS
  - exercise fluid sizing
  - CSS exercise
---

# Fluid weather bulletin exercise

The morning and afternoon forecast cards already have a basic grid and colors, but still need fluid sizing. Use the preceding park forecast to guide three independent CSS rules. Work in `style.css`; the supplied markup needs no edits.

`min()` picks the smaller width, `minmax()` gives a grid column a minimum and a flexible maximum, and `clamp()` keeps padding between two bounds. Add the rules in this order and preview after each one.

## Your Tasks

1. Set `.page-shell` width to `min(92%, 48rem)` so the page has breathing room but stops growing beyond 48rem.
2. Set `.bulletin` `grid-template-columns` to `repeat(auto-fit, minmax(14rem, 1fr))` so cards can stack or share a row as space permits.
3. Set `.card` padding to `clamp(1rem, 3vw, 2rem)` so it grows within those bounds.

**Checkpoint:** Resize the preview. The page width and card padding change gradually; the cards fit side by side only when there is room. Next, you will use the same available-space thinking to keep a table usable on a phone.
