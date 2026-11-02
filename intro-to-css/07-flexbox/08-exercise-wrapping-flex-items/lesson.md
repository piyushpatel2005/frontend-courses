---
title: "Wrapping and Flex Items"
slug: exercise-wrapping-flex-items
order: 8
language: css
summary: "`flex-wrap` allows a flex line to continue on a new row; `flex` gives each item a useful base size."
seo_title: "Wrapping and Flex Items | Introduction to CSS"
seo_description: "Practice wrapping flex items with a nine-rem flexible base size."
seo_keywords: [CSS, exercise-wrapping-flex-items, layout, CSS exercise]
lesson_type: coding
hints:
  - "Use the demo as a reference, but write the rules yourself."
  - "Run Preview before Submit to inspect the visible result."
---

# Make the supply labels flexible

The demo let supply cards wrap and share the available room. Apply that pattern to Water, Batteries, and Bandages here. The starter supplies the card padding and a gap, but no Flexbox layout.

You will edit both the parent `.supply-row` and its child `.card` rule in `style.css`. Wrapping belongs on the parent; growing, shrinking, and the starting size belong on the items.

## Your Tasks

1. Set `.supply-row` to `display: flex`.
2. Set `.supply-row` to `flex-wrap: wrap`.
3. Set `.card` to `flex: 1 1 9rem` so every card can grow and shrink from a 9rem basis.

Run Preview and Submit after each step. Step 2 permits wrapping, but short labels may still fit until you add the basis in step 3. With all three steps complete, narrow the preview: cards should move to another line instead of being forced into one row.
