---
title: "Exercise: Pin the Pickup Location"
slug: exercise-positioning
order: 6
language: css
lesson_type: coding
runtime: srcdoc
summary: Use relative and absolute positioning to attach a pickup pin to a seed swap map card.
seo_title: CSS Positioning Exercise | Pin the Pickup Location
seo_description: Practice relative and absolute CSS positioning by pinning a label to a Riverside Seed Swap map card.
seo_keywords:
  - CSS positioning exercise
  - position relative CSS
  - position absolute CSS
  - top right CSS
  - layout fundamentals
hints:
  - Position the card before positioning the pin.
  - Put both offsets in the `.pickup-pin` rule.
---

# Pin the pickup location

The positioning demo anchored a “Today” label to a map card. Recreate that relationship here so the event status stays with its location.

**Checkpoint:** the orange label should sit at the upper-right of the bordered card rather than taking up a line of text.

## Your Tasks

1. Set `.map-card` to `position: relative;` to make it the pin’s reference box.
2. Set `.pickup-pin` to `position: absolute;` to remove it from normal flow.
3. Set `.pickup-pin` to `top: 12px;` and `right: 12px;` to place it in the upper-right corner.
