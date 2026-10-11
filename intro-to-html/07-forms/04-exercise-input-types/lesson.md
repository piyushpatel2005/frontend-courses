---
title: "Exercise: Record Beacon Maintenance"
slug: exercise-input-types
order: 4
language: html
summary: Use text, email, number, date, and color inputs in a beacon maintenance record after exploring the profile demo.
seo_title: "Exercise: Record Beacon Maintenance | Introduction to HTML"
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

# Exercise: Record Beacon Maintenance

## Mission

After exploring the mission-profile demo, the crew needs a beacon maintenance record. Each detail needs a control suited to its value.

## What you'll build

A maintenance record with technician name, email, battery level, service date, beacon color, and a submit button. The form and labels are supplied. Add each input after its label in `index.html`, matching the label’s `for` with the input’s `id`. Give each input a `name` as well, so its answer has a submission key.

## Your Tasks

1. Add a named text input with `id="technician"` after its label.
2. Add a named email input with `id="backup"` after its label.
3. Add a named number input with `id="battery"` for battery level, with `min="1"`, `max="100"`, and `step="1"`.
4. Add a named date input with `id="service"` after its label.
5. Add a named color input with `id="beacon-light"` after its label.
6. Add a submit button to save the maintenance record.

## Checkpoint

Run the page. The number field should use numeric controls, the date field should offer a picker in supporting browsers, and the color field should open a color picker.

## Payoff

Run to inspect the controls, then Submit to check the markup. The Save button only demonstrates form submission; this preview does not store a maintenance record.
