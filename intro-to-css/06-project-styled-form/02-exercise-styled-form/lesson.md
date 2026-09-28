---
title: Community garden request card exercise
slug: exercise-styled-form
order: 2
language: html
summary: Style a clear seed-request form for the Community Garden tool shed.
seo_title: Community garden request card exercise | Intro to CSS
seo_description: Learn form controls and focus feedback by building a small, visible CSS interface.
seo_keywords:
  - CSS
  - form controls and focus feedback
  - HTML
  - beginner CSS
lesson_type: coding
hints:
  - Keep the stylesheet linked from the document head.
  - Change one declaration at a time, then use Run Preview to inspect the result.
---

# Finish the seed request card

The demo used block layout to stack controls and a focus pseudo-class for keyboard feedback. The starter already has the associated label, stacked controls, and a responsive-width email input; do not change the HTML. Add just the spacing and focus feedback in `style.css`.

## Your Tasks

1. Add `margin-bottom: .75rem` to `input` to give the button breathing room.
2. Add `outline: 3px solid #f4a261` on `input:focus` so keyboard users can see the focused field.

**Checkpoint:** Preview shows a gap below the email box, and tabbing to the input gives it an orange outline. This is a visual form only; submitting does not send data.
