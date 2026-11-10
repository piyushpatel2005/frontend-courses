---
title: "Borders Shadows"
slug: borders-shadows
order: 7
language: css
lesson_type: coding
runtime: srcdoc
summary: "Borders define an edge; border radius softens it; a box shadow gives an element visual elevation."
seo_title: "Borders and Shadows | Introduction to CSS"
seo_description: "Borders define an edge; border radius softens it; a box shadow gives an element visual elevation. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - borders shadows demo
  - CSS demo
hints:
  - Change one CSS value, then run the preview.
  - Restore the original value before continuing.
---

The night-market cards already sit in a supplied two-column layout. Their borders and shadows make each boundary visible without changing the text.

`border: 2px solid #f59e0b` is a shorthand: it sets the width, line style, and color of all four edges. `border-radius: 1rem` rounds all four corners. A `rem` is based on the root element's font size; with this page's default 16px root text, `1rem` is 16px.

```css
box-shadow: 0 0.5rem 1rem rgb(120 53 15 / 20%);
```

Read the shadow values in order: no horizontal offset, a half-rem downward offset, a one-rem blur, then brown at 20% opacity. The shadow is painted outside the card without reserving extra layout space. The border does take space in the box.

## Compare corners and shadows

Run. Change `border-radius` to `0` to see square corners, then restore `1rem`. Temporarily set `box-shadow: none` and compare, then restore the declaration above. Leave the supplied Grid layout alone; its rules come later in the course.

## Learn more

MDN's [box-shadow reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow) explains offsets, blur, and optional spread values.
