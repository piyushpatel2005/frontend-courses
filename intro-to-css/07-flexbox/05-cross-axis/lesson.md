---
title: "Cross Axis"
slug: cross-axis
order: 5
language: css
summary: "`align-items` aligns items across the cross axis."
seo_title: "Cross-Axis Alignment | Introduction to CSS"
seo_description: "See align-items center line up short and tall trip-briefing cards."
seo_keywords: [CSS, cross-axis-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

The weather card has extra top and bottom padding, so it is taller than its neighbors. In `style.css`, `.card:nth-child(2)` selects that second card; `padding-block` sets its top and bottom padding in this page's writing direction.

The `.briefing-row` is a flex row. Its main axis runs horizontally, so its cross axis runs vertically. `align-items: center` centers each card within the flex line, giving their vertical midpoints the same height. It aligns the boxes, not the text inside them.

The supplied `overflow-wrap: anywhere` lets long words break when the preview is narrow, so the cards can shrink without pushing the whole page sideways.

The pale green row has `min-height: 10rem`, leaving room above and below the cards. Without extra room, a change in alignment can be hard to see. The default alignment would stretch auto-height cards across the line instead.

Run Preview. Change `align-items` to `flex-start`: the top edges now line up. Try `flex-end` to line up the bottom edges, then restore `center`. If you later use `flex-direction: column`, remember that `align-items` will work horizontally instead.
