---
title: "Exercise: Add a Book-Quote Mark"
slug: exercise-pseudo-elements
order: 6
language: css
lesson_type: coding
runtime: srcdoc
summary: "Use `::before` and `content` for a small decorative detail that belongs to CSS."
seo_title: "Exercise: Add a Book-Quote Mark | Introduction to CSS"
seo_description: "Use `::before` and `content` for a small decorative detail that belongs to CSS. Build and inspect the result in a live CSS preview."
seo_keywords:
  - CSS
  - exercise pseudo elements
  - CSS exercise
hints:
  - Use the preceding demo as your reference.
  - Run Preview before submitting your tests.
---

# Add a book-quote mark

The demo created a decorative quote with `::before`. This time, add it only to the featured reader note; the second note should stay plain. `index.html` already supplies both cards, and `style.css` supplies their readable dark backgrounds.

## Your Tasks

1. Add `.card:first-child::before` with `content: "“"` to place an opening quote before the first note.
2. In that same rule, set `color: #fbbf24` to distinguish the quote from the note text.

**Checkpoint:** Preview shows a gold quotation mark on the first card only.
