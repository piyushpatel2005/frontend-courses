---
title: "Exercise: Resolve Specificity"
slug: exercise-specificity
order: 8
language: html
summary: Practice element, class, and ID specificity rules on one exhibit note.
seo_title: "Exercise: Resolve Specificity | Introduction to CSS"
seo_description: Practice element, class, and ID specificity rules on one exhibit note.
seo_keywords: [CSS exercise, exercise-specificity]
lesson_type: coding
validationRules: []
hints:
  - "ID selectors outrank class selectors, which outrank element selectors."
---

# Exercise: Resolve Specificity

## Mission

The demo's `#intro` note was green. Here a different gallery notice carries the class `alert` and ID `opening`; use those selectors to see the same priority rule in action.

## What you'll build

A note where the ID selector wins the cascade.

## Your Tasks

1. Add `p { color: gray; }`.
2. Add `.alert { color: orange; }`.
3. Add `#opening { color: green; }` so the ID wins over the earlier two rules.

## Checkpoint

Run the page. The note is green even though all three rules match it.

## Payoff

You have seen the cascade choose the more specific selector.
