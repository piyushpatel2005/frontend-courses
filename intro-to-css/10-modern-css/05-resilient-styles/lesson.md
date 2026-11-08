---
title: "Resilient Styles"
slug: resilient-styles
order: 5
language: css
runtime: srcdoc
lesson_type: coding
summary: Keep a readable base layout and enhance it inside a CSS feature query.
seo_title: Resilient styles | Introduction to CSS
seo_description: Keep a readable base layout and enhance it inside a CSS feature query.
seo_keywords: [CSS, resilient styles]
---

# Leave a usable page beneath the enhancement

A visitor can read these supply stations as ordinary blocks. Grid can improve their arrangement, but the content should not depend on that improvement to exist. This is **progressive enhancement**: start with a usable result, then add capabilities when available.

Browsers generally ignore declarations they do not understand and keep parsing the rule. A fallback can appear first, followed by a newer value for the same property. The later value wins only if it is valid and otherwise has equal cascade priority. A typo is not a fallback strategy; inspect unexpected results in Styles and Computed.

A feature query makes a group conditional:

```css
@supports (display: grid) {
  .notice-list { display: grid; }
}
```

`@supports` tests whether the browser understands that property/value pair. It does not identify a browser brand, guarantee an accessible layout, or test whether there is enough space. That last question belongs to responsive sizing. Supply readable base rules outside the query; put only the enhancement inside it. Grid is used here because you already know it, not because current browsers normally lack it.

The supplied HTML contains all the content. Its base margins keep the stations separated. The feature query already supplies a gap and removes those margins when Grid is available. You will add the layout declarations in `style.css`.

## Your Tasks

1. Add `.supplies { display: block; }` outside the feature query as the explicit base layout.
2. Inside the supplied `@supports (display: grid)`, set `.supplies` to `display: grid`.
3. In that same conditional rule, set `grid-template-columns: repeat(2, minmax(0, 1fr))` for two equally flexible tracks.

Run after each change, then Submit. Temporarily change the query to `(display: not-a-display-value)` and Run: the stations should still be readable as blocks. Restore `(display: grid)`. A false condition skips the enhancement rather than deleting the base page.

Before adding a newer feature to a real project, check its browser-support information against the browsers your audience uses. Container queries, cascade layers, and larger styling systems can wait until a project needs them; none is required to finish this course.
