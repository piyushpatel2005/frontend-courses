---
title: "Record Beacon Maintenance"
slug: record-beacon-maintenance
order: 4
language: html
summary: Use text, email, number, date, and color inputs in a beacon maintenance record after exploring the profile demo.
seo_title: "Record Beacon Maintenance | Introduction to HTML"
seo_description: Use text, email, number, date, and color inputs in a beacon maintenance record after exploring the profile demo.
seo_keywords:
  - HTML exercise
  - HTML forms
  - exercise-input-types
lesson_type: coding
validationRules: []
hints:
  - "The type attribute controls the browser UI."
---

After exploring the profile controls, build a beacon maintenance record with different details. The form and labels are supplied in `index.html`; add each input after its label. Match the label’s `for` with the input’s `id`, and give each input a `name` so its answer has a submission key.

## Your Tasks

1. Add a named text input with `id="technician"` after its label.
2. Add a named email input with `id="backup"` after its label.
3. Add a named number input with `id="battery"` for battery level, with `min="1"`, `max="100"`, and `step="1"`.
4. Add a named date input with `id="service"` after its label.
5. Add a named color input with `id="beacon-light"` after its label.
6. Add a submit button to save the maintenance record.

## Check your page

Run the page. The number field should use numeric controls, the date field should offer a picker in supporting browsers, and the color field should open a color picker.

Run to inspect the controls, then Submit to check the markup. The Save button only demonstrates form submission; this preview does not store a maintenance record.
