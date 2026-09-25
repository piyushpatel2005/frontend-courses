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

Three rules target one exhibit note. Add them, then observe which rule controls the final color.

## What you'll build

A note where the ID selector wins the cascade.

## Your Tasks

1. Add `p { color: gray; }`.
2. Add `.highlight { color: orange; }`.
3. Add `#intro { color: green; }`.

## Checkpoint

Run the page. The note is green even though all three rules match it.

## Payoff

You have seen the cascade choose the more specific selector.
