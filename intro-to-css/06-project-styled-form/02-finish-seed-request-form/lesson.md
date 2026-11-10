---
title: "Finish the Seed Request Form"
slug: finish-seed-request-form
order: 2
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

The garden's seed-request form already has a visible label, stacked controls, and an email field that fits the card. Add the two missing details in `style.css`; leave the HTML unchanged.

The demo used a bottom margin to separate the input from the button. It also used `:focus` to show where typing will go. These are independent changes, so you can check the spacing before adding the outline.

## Your Tasks

1. Add `margin-bottom: .75rem` to `input` to separate it from the button.
2. Add `outline: 3px solid #9a3412` on `input:focus` to mark the focused field.

Run after each change, then Submit. To check focus, click the Reply email label or click blank preview space and press Tab. A dark-orange ring should surround the input. Tab to the button to see the field ring disappear and the supplied button ring appear.

The label and keyboard path matter as much as the spacing. This is a visual form only; no service receives the request.
