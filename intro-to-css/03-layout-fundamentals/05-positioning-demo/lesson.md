---
title: "Positioning Demo: Pickup Pin"
slug: positioning-demo
order: 5
language: css
lesson_type: coding
runtime: srcdoc
summary: See relative and absolute positioning place a pickup pin at the corner of a seed swap map card.
seo_title: CSS Positioning Demo | Pickup Pin
seo_description: Inspect relative and absolute CSS positioning with a pickup pin attached to a seed swap map card.
seo_keywords:
  - CSS positioning
  - position relative
  - position absolute
  - CSS inset
  - layout demo
hints:
  - An absolutely positioned child uses the nearest positioned ancestor.
---

# Positioning: pickup pin

The seed swap map card needs a small “Today” pin that stays in its upper-right corner. The completed styles create a positioning context on the card and then place the pin inside it.

## Read the anchor

`.map-card` has `position: relative`, which makes it the reference box. `.pickup-pin` has `position: absolute` with `top` and `right` offsets, so it leaves normal flow and hugs that corner.

**Checkpoint:** the orange pin appears over the upper-right edge of the map card.

## Try it safely

Change `.pickup-pin` `right` from `12px` to `48px`, preview the move, then restore `12px`. Continue to the exercise when the pin is back at the corner.
