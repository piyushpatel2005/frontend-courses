---
title: "Pseudo Elements Practice"
slug: pseudo-elements-practice
order: 6
language: css
lesson_type: coding
runtime: srcdoc
summary: "Use `::before` and `content` for a small decorative detail that belongs to CSS."
seo_title: "Add a Book-Quote Mark | Introduction to CSS"
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

Add a decorative opening quote to the featured reader note. The second card should stay plain. Both notes and their dark backgrounds are supplied; edit only `style.css`.

The demo combined two ideas: `:first-child` chooses the first card, and `::before` creates a piece before its text. Add the content first so there is a mark to inspect, then give that piece its own color.

## Your Tasks

1. Add `.card:first-child::before` with `content: "“"` to place an opening quote before the first note.
2. In that same rule, set `color: #fbbf24` to distinguish the quote from the note text.

Run after task 1: a quote should appear in the inherited light text color. After task 2, it should be gold. Submit to check each change. Leave the note text in HTML; the quote is only decoration.
