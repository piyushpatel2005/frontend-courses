---
title: Community garden request card
slug: styled-form-demo
order: 1
language: css
summary: Style a clear seed-request form for the Community Garden tool shed.
seo_title: Community garden request card | Intro to CSS
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

# Seed request form
A community garden volunteer needs a reply address for seed requests. This completed card puts the label above the field and shows which control has keyboard focus.

The HTML connects `label for="email"` to `input id="email"`. Click Contact email: focus moves to the field. A placeholder is only a typing example, so it does not replace that visible label.

In `style.css`, `display: block` puts the label and input on separate lines. The input uses `width: 100%` and `box-sizing: border-box`, which keeps its padding and border within that width. Its bottom margin creates the gap before the button.

## Inspect space and focus

Run the preview. In `style.css`, change the input's `margin-bottom` from `.75rem` to `2rem`, then run again. The larger gap should be easy to see. Restore `.75rem`.

Click blank preview space and press Tab to reach the email input. `input:focus` draws a dark-orange outline outside the field; `outline-offset: 2px` leaves a small gap between the outline and border. An outline does not push the nearby controls away. Tab again to the button and check its supplied focus ring.

The form is a visual example. There is no service to receive requests, so you do not need to press Send request. The next exercise leaves the layout in place and asks you to add spacing and field feedback.
