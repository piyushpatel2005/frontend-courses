---
title: "Exercise: Plan a Supply Pickup"
slug: exercise-choice-controls
order: 6
language: html
summary: Use checkboxes for several supplies and radios for one delivery window.
seo_title: "Exercise: Plan a Supply Pickup | Introduction to HTML"
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

# Exercise: Plan a Supply Pickup

## Mission

After testing the training-choice demo, plan a supply pickup: the crew can request several supplies but must select one delivery window.

## What you'll build

A supply request with three supply checkboxes, three grouped delivery-window radios, a default selection, and fieldset context.

## Your Tasks

1. Add at least three independently selectable checkboxes for supplies.
2. Add at least three radio buttons for delivery windows.
3. Give all the radio buttons one non-empty shared `name`.
4. Preselect exactly one delivery window using `checked`.
5. Wrap each choice set in its own `<fieldset>` with a describing `<legend>`.

## Checkpoint

Run the page. More than one checkbox can be on at once, but selecting a second radio option turns off the first.

## Payoff

The crew can request several supplies and choose one pickup time without JavaScript.
