---
title: "Apply CSS Demo: Three Sources"
slug: apply-css-demo
order: 5
language: html
summary: See inline, internal, and external CSS sources working together in one exhibit card.
seo_title: "Apply CSS Demo: Three Sources | Introduction to CSS"
seo_description: See inline, internal, and external CSS sources working together in one exhibit card.
seo_keywords: [CSS demo, CSS preview, apply-css-demo]
lesson_type: coding
hints:
  - "This completed example is for reading and previewing before the exercise."
---

# Apply CSS Demo: Three Sources

## Mission

The museum team inherited a card with three CSS sources. Run the example to see the scope of each source before choosing one in the exercise.

## What you'll see

An exhibit card with a locally colored heading, an internal paragraph-size rule, and an external page background.

## Read the code

```html
<h1 style="color: #7a1fa2;">Three CSS Sources</h1>
<style>p { font-size: 18px; }</style>
<link rel="stylesheet" href="style.css">
```

## Try the preview

Run the completed page. Change the inline heading color, then the `p` font size in the internal `<style>` block, then the `body` background in `style.css`. Notice which part of the page each source controls; restore the original values before continuing.

## Checkpoint

Identify the selector, property, and value that created the visible change. Nothing needs editing in this demo.

## Next

Continue to **Exercise: Apply CSS Three Ways** and reproduce the idea from a starter file.
