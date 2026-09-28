---
title: Community garden request card demo
slug: styled-form-demo
order: 1
language: html
summary: Style a clear seed-request form for the Community Garden tool shed.
seo_title: Community garden request card demo | Intro to CSS
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

# Seed request form demo

A community garden volunteer needs a short reply form that is easy to read and navigate. The finished card places a label above the email input, leaves space before the button, and highlights the field when it has focus.

The HTML already connects `label for="email"` to `input id="email"`. In `style.css`, the label and input use `display: block` to sit on separate lines; the input has `width: 100%` with `box-sizing: border-box` so its border fits inside the card. The input's bottom margin separates it from the button. When you tab into the input, `input:focus` adds an orange outline. This uses the block layout taught earlier—not Grid, which comes after Flexbox.

**Checkpoint:** the email field fills the card width, the button sits below it, and tabbing into the field shows an orange ring.

Change the input's `margin-bottom` to `2rem`, run Preview and observe the added space; restore `.75rem` before the exercise. The submit button is only a visual example; no server handles the request.
