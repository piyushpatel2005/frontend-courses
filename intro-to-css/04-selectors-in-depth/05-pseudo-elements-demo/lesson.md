---
title: "Pseudo-Elements Demo"
slug: pseudo-elements-demo
order: 5
language: css
lesson_type: coding
runtime: srcdoc
summary: "A pseudo-element such as `::before` can create a presentational piece attached to a selected element."
seo_title: "Pseudo-Elements Demo | Introduction to CSS"
seo_description: "A pseudo-element such as `::before` can create a presentational piece attached to a selected element. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - pseudo elements demo
  - CSS demo
hints:
  - Change one CSS value, then run the preview.
  - Restore the original value before continuing.
---

# Pseudo-elements: a note in the margin

The Moonlit Book Cart puts a decorative opening quote before its featured reader note. The quote is presentation, not part of the note text in `index.html`.

In `style.css`, `.card:first-child::before` selects a generated piece *before the content* of the first card. `content: "“"` creates it; without `content`, `::before` has nothing to display. The gold `color` makes the new mark easy to spot. The second card stays unmarked.

**Checkpoint:** one gold opening quote appears on the first dark card, not on the second.

Change the quote's `color` to another visible color and run Preview; restore `#fbbf24` before the exercise.
