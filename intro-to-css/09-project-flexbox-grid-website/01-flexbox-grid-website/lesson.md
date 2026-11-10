---
title: "Flexbox Grid Website"
slug: flexbox-grid-website
order: 1
language: css
summary: Combine flexbox and grid for a one-page River Radio schedule.
seo_title: River radio schedule | Intro to CSS
seo_description: Learn using flexbox for controls and grid for cards by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - using flexbox for controls and grid for cards
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

River Radio needs a title and listening button above its daily shows. This is a new page, not the completed workshop grid from the previous module. It reuses your Flexbox and Grid skills; it does not inherit that page's media query.

In `style.css`, `.schedule-head` is the flex container. `display: flex` puts its two children in a row. `justify-content: space-between` pushes them to opposite ends, and `align-items: center` aligns them vertically. The button is a visual placeholder; it does not play audio.

The separate `.show-grid` container uses `display: grid`. `grid-template-columns: repeat(3, 1fr)` creates three equal tracks, and `gap: 1rem` separates them. Use Flexbox for the header row and Grid for the show columns; they do not need to share a container.

## Try the demo

Run Preview. Change only `repeat(3, 1fr)` to `repeat(2, 1fr)` in `style.css` and run again. The third show should move to the next row while the header stays unchanged. Restore three columns before continuing.

The supplied overflow-wrap: anywhere lets long show names break instead of forcing one automatic track minimum wider than the others.

This example deliberately keeps three columns at every width. The responsive design module will show how to change a layout when those columns become cramped.
