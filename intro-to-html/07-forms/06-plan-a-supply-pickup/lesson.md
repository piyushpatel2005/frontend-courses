---
title: "Plan a Supply Pickup"
slug: plan-a-supply-pickup
order: 6
language: html
summary: Use checkboxes for several supplies and radios for one delivery window.
seo_title: "Plan a Supply Pickup | Introduction to HTML"
seo_description: Use checkboxes for several supplies and radios for one delivery window.
seo_keywords:
  - HTML exercise
  - HTML forms
  - exercise-choice-controls
lesson_type: coding
validationRules: []
hints:
  - "Radio buttons become one group only when their name values match."
---

Use the choice patterns for a supply pickup: request several supplies, but choose only one delivery window. `index.html` supplies a heading and an empty form. Add visible wrapping labels and distinct `value` attributes so each option is recognizable. Leave the radio `name` values for task 3.

## Your Tasks

1. Add at least three labeled supply checkboxes with `name="supplies"` and distinct non-empty `value` attributes.
2. Add at least three labeled delivery-window radios with distinct non-empty `value` attributes.
3. Give all the delivery-window radios one non-empty shared `name`.
4. Preselect exactly one delivery window using `checked`.
5. Wrap the supply checkboxes in their own `<fieldset>` with a first-child `<legend>` describing the supplies.
6. Wrap the delivery radios in a separate `<fieldset>` with a first-child `<legend>` describing the windows.

## Check your page

Run the page. More than one checkbox can be on at once, but selecting a second radio option turns off the first.

Submit to check each group after trying it in the preview. The crew can now select several supplies and one pickup time without JavaScript; this practice form does not place an order.
