---
title: "Flexbox Navigation"
slug: flexbox-navigation
order: 9
language: css
summary: "Combining flex direction, main-axis spacing, alignment, and gaps creates a dependable one-dimensional layout."
seo_title: "Flexbox Navigation | Introduction to CSS"
seo_description: "Inspect a two-group expedition header built with Flexbox spacing and alignment."
seo_keywords: [CSS, flexbox-navigation-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

This header combines the Flexbox properties you have just used. Inspect `index.html`: `.nav-row` has two direct children, a `<strong>` title and a `.nav-actions` group. The two links are inside that group. Flexbox arranges the title and the group, not all three pieces separately.

In `style.css`, `display: flex` makes those two children share a row. `justify-content: space-between` moves spare room between the groups. `align-items: center` lines up their vertical centers even though the padded links are taller than the title.

The supplied `gap: 1rem` keeps some space between the groups when little free room remains. The links use `inline-block` so they can sit beside one another with visible padding; they are not separate items in the outer flex row.

Run Preview and change `justify-content` to `flex-start`. The groups move together, but the gap stays. Restore `space-between`, then change `align-items` to `flex-start` and compare their top edges. Restore `center`.

This is a compact header, not a complete mobile navigation pattern. Very long labels can still need wrapping or a different arrangement; a gap cannot create unlimited room.
