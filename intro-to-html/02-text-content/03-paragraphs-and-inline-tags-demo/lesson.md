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
<p><b>Legacy bold</b>, <i>legacy italic</i>, and <u>underlined text</u> are available.</p>
<p><small>Sensor note:</small> H<sub>2</sub>O and E = mc<sup>2</sup>.</p>
<p><mark>Review this reading.</mark> <del>Old course</del> <ins>New course</ins></p>
```

`<em>` and `<strong>` describe emphasis and importance. `<b>`, `<i>`, and `<u>` are presentation-oriented tags retained from older HTML; they remain valid, but modern pages normally use **CSS** when the goal is purely visual bold, italic, or underlined styling. Use semantic tags when the text itself is important or emphasized.

`<small>`, `<sub>`, and `<sup>` still express useful text relationships: a note, subscript, and superscript. `<mark>`, `<del>`, and `<ins>` show highlighted, removed, and added text.

## Try the preview

Run the page. Notice that every example remains inside an ordinary paragraph; the inline tag changes only the selected phrase instead of creating a new block.

## Checkpoint

You should be able to identify which tags carry meaning (`<em>`, `<strong>`, `<del>`, `<ins>`) and which visual effects are usually better controlled with CSS (`<b>`, `<i>`, `<u>`).

## Next

Continue to **Exercise: Write a Mission Log** and use paragraphs, emphasis, strong text, a line break, and a divider yourself.
