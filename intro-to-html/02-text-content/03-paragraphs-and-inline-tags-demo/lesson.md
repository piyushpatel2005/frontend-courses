---
title: "Paragraphs and Inline Tags Demo"
slug: paragraphs-and-inline-tags-demo
order: 3
language: html
summary: See common HTML text tags render in a completed mission-log preview before using them in an exercise.
seo_title: "Paragraphs and Inline HTML Tags Demo | Introduction to HTML"
seo_description: See emphasis, bold, underline, small text, superscript, subscript, and other inline HTML text tags in a working preview.
seo_keywords: [HTML text tags, inline tags, bold tag, italic tag, underline tag, small tag]
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then inspect each inline tag in the source."
---

# Paragraphs and Inline Tags Demo

## Mission

The Meridian crew is logging a short survey update. Run the completed log to see how inline tags change the meaning or presentation of selected words within a paragraph.

## What you'll see

A mission log using paragraphs plus `<em>`, `<strong>`, `<b>`, `<i>`, `<u>`, `<small>`, `<mark>`, `<del>`, `<ins>`, `<sub>`, and `<sup>`.

## Read the code

```html
<p><strong>Priority:</strong> keep the <em>survey channel</em> open.</p>
<p>Keyword: <b>beacon</b>. Vessel: <i>Meridian</i>. Spelling to review: <u>recieve</u>.</p>
<p><small>Sensor note:</small> H<sub>2</sub>O and E = mc<sup>2</sup>.</p>
<p><mark>Review this reading.</mark> <del>Old course</del> <ins>New course</ins></p>
```

`<em>` marks stress emphasis and `<strong>` marks importance. They usually look italic and bold. `<b>` draws attention without adding importance, `<i>` sets off text such as a technical term or a ship name, and `<u>` marks an annotation such as a spelling error. These tags have meanings too; use CSS when you only want a visual effect.

`<small>`, `<sub>`, and `<sup>` still express useful text relationships: a note, subscript, and superscript. `<mark>`, `<del>`, and `<ins>` show highlighted, removed, and added text.

## Try the preview

Run the page. Notice that every example remains inside an ordinary paragraph; the inline tag changes only the selected phrase instead of creating a new block.

## Checkpoint

Try removing the `<br>` from the first paragraph and rerun to see how the lines flow, then restore it. The `<br>` creates a line break inside the paragraph; it has no closing tag. The other tags wrap the exact words whose meaning you want to mark.

## Next

Continue to **Exercise: Write Meridian's Survey Notes** and use paragraphs, emphasis, strong text, a line break, and a divider yourself.
