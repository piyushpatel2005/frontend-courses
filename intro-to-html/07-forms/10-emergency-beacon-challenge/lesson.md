---
title: "Emergency Beacon Challenge"
slug: emergency-beacon-challenge
order: 10
language: html
summary: Combine an actionable form destination, a labeled email field, a radio group, and a submit button in a fresh emergency-beacon scenario.
seo_title: "Challenge: Send an Emergency Beacon | Introduction to HTML"
seo_description: Combine an actionable form destination, a labeled email field, a radio group, and a submit button in a fresh emergency-beacon scenario.
seo_keywords:
  - HTML exercise
  - HTML forms
  - emergency-beacon-challenge
lesson_type: coding
validationRules: []
hints:
  - "Use a shared name for one-choice radio controls."
---

# Challenge: Send an Emergency Beacon

Combine the form patterns in one small Meridian page: a practice destination, contact email, and one response channel. `index.html` supplies the document shell only. This is a markup exercise, not an emergency service; never use it to request real help.

## Your Tasks

1. Add a form with `method="post"` and an illustrative action path such as `/emergency-beacon` or an HTTPS URL. There is no live endpoint in the preview.
2. Inside the form, add an email input with a non-empty `name`, unique `id`, and a visible label whose `for` matches it.
3. Inside the form, add at least two labeled radio inputs sharing a non-empty `name`, with distinct non-empty `value` attributes for the response channels. Put the choices inside a `<fieldset>` whose first element is a descriptive `<legend>`.
4. Add a submit button inside the form.

## Check your page

Click the email label and choose a response channel. The label should focus the field, and only one radio choice should stay selected.

Edit `index.html`, Run to try the labels and radio choices, then Submit to check the structure. Nothing here delivers a backup request; checking the markup does not contact a server.
