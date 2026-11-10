---
title: "Main Axis"
slug: main-axis
order: 3
language: css
summary: "`justify-content` distributes items along the main axis."
seo_title: "Main-Axis Spacing | Introduction to CSS"
seo_description: "See justify-content distribute three trail tools across the main axis."
seo_keywords: [CSS, main-axis-demo, layout, beginner CSS]
lesson_type: coding
hints:
  - "Open style.css and change one declaration at a time."
  - "Run Preview after each change; restore the value before the exercise."
---

The dashed `.tool-row` is wider than its three cards. The room left after the cards and any gaps take their space is **free space**. `justify-content` decides where to put that remaining room along the main axis.

Here `display: flex` uses the default `row` direction. `justify-content: space-between` puts free space between the cards. The first and last cards sit against the inside edges of the row's padding, not against its outer border.

Run Preview, then change `space-between` to `flex-start` in `style.css`. The cards gather at the start and the unused room moves to the end. Try `center` as well: it keeps the cards together and shares the unused room between the two ends. Restore `space-between`.

Narrow the preview and notice that the spaces get smaller. This property does not promise a fixed gap; it distributes only the space that is left. If the cards fill the row, there may be no extra room to distribute. For a flex column, the same property works vertically, and the container needs spare height for the effect to show.
