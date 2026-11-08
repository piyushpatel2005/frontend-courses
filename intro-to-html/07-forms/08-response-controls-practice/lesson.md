---
title: "Response Controls Practice"
slug: response-controls-practice
order: 8
language: html
summary: Use a textarea, select menu, and datalist to report an incident, choose urgency, and suggest a rendezvous point.
seo_title: "Build a Rescue Dispatch Report | Introduction to HTML"
seo_description: Use a textarea, select menu, and datalist to report an incident, choose urgency, and suggest a rendezvous point.
seo_keywords:
  - HTML exercise
  - HTML forms
  - exercise-response-controls
lesson_type: coding
validationRules: []
hints:
  - "The input list value must match the datalist id."
---

# Build a Rescue Dispatch Report

Build a rescue dispatch report with incident notes, one urgency level, and a suggested rendezvous point. The form and labels are already in `index.html`. Match the Notes and Urgency labels with `id="brief"` and `id="role"` on their controls, and give each a non-empty `name`.

## Your Tasks

1. Add a named `<textarea id="brief">` with at least four rows after the Incident notes label.
2. Add a named `<select id="role">` after the Urgency label, with at least four non-empty options with distinct values.
3. Preselect exactly one urgency option using `selected`.
4. Add a `<datalist>` with a unique `id` and at least three distinct non-empty rendezvous suggestions.
5. Add a named text input with `id="base"` after the supplied label; set its `list` to the datalist’s `id`.

## Check your page

Run the page. The incident-notes field should accept multiple lines, the default urgency should show in the menu, and typing in the linked input should reveal rendezvous suggestions.

Run to compare the three kinds of answer, then Submit. Try typing a rendezvous point that is not suggested: a datalist permits it. This practice page collects input locally but has no service to send a report.
