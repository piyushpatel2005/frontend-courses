---
title: "Sizing Overflow Practice"
slug: sizing-overflow-practice
order: 8
language: css
lesson_type: coding
runtime: srcdoc
summary: "Use a width, max-width, and overflow rule to make a component resilient."
seo_title: "Size a Seed-Swap Notice | Introduction to CSS"
seo_description: "Use a width, max-width, and overflow rule to make a component resilient. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - exercise sizing overflow
  - CSS exercise
hints:
  - Use the preceding demo as your reference.
  - Run Preview before submitting your tests.
---

# Contain the longer seed notice

The demo showed a short note beside a scrollable one. This new storage notice has more words. Its card already has `box-sizing: border-box`, padding, and a `7rem` height limit. The row layout is supplied too.

Add the missing settings to `.card` in `style.css`. Width chooses its preferred size; max-width caps it in a narrow row; overflow decides what happens to extra content.

## Your Tasks

1. Set `.card`'s `width` to `14rem`.
2. Set `.card`'s `max-width` to `100%`.
3. Set `.card`'s `overflow` to `auto`.

## Test the cramped case

Run and Submit after each task. At the end, scroll the long card until you can read the last sentence. Narrow the preview to see both cards stay inside the row. The short card should not be forced to the maximum height.

The next lesson keeps a heading visible inside a scrolling notice before the layout quiz. Then you will return to selectors to target elements by their relationships and states.
