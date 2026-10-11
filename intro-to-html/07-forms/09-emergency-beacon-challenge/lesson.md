---
title: "Challenge: Send an Emergency Beacon"
slug: emergency-beacon-challenge
order: 9
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

## Mission

Combine the form patterns in one small page for the Meridian crew: a practice destination, a contact email, and one response channel. This is a markup exercise, not an emergency service. Never use it to request real help.

## What you'll build

A concise emergency-beacon form with an action, connected email label, two grouped radio choices, and a submit button.

## Your Tasks

1. Add a form with an illustrative action path such as `/emergency-beacon` or an HTTPS URL. There is no live endpoint in the preview.
2. Inside the form, add an email input with a non-empty `name`, unique `id`, and a visible label whose `for` matches it.
3. Inside the form, add at least two labeled radio inputs sharing a non-empty `name`, with distinct non-empty `value` attributes for the response channels.
4. Add a submit button inside the form.

## Checkpoint

Click the email label and choose a response channel. The label should focus the field, and only one radio choice should stay selected.

## Payoff

Edit `index.html`, Run to try the labels and radio choices, then Submit to check the structure. Nothing here delivers a backup request; checking the markup does not contact a server.
