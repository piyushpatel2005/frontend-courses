---
title: "Review: Structured Profile"
slug: review-structured-profile
order: 4
language: html
summary: Practice HTML structure and selectors by building a compact profile card.
seo_title: HTML Structured Profile Review
seo_description: Practice using main, headings, paragraphs, IDs, and reusable classes in a compact HTML profile card.
seo_keywords: [HTML review, HTML profile card, HTML main element, HTML IDs, HTML classes]
lesson_type: coding
hints:
  - Use a main container, then give it a unique id and reusable class.
---

# Review: Structured Profile

## Mission

The repair café needs a compact volunteer profile beside its schedule. Turn the empty starter into one clear card: a named main region, a short description, and repeatable skill tags. The preview should make all three pieces easy to spot.

## What you'll build

A profile card with a unique `id` on its `<main>` container, a heading and description inside, and at least two reusable `tag` class elements for skill labels.

The repair café needs a compact volunteer profile beside its schedule. Turn the empty starter into one clear card: a named main region, a short description, and repeatable skill tags. The preview should make all three pieces easy to spot.

## Your target

Use `<main>` for the page's central content. Give that one region the unique `profile` ID. Add a heading and description inside it, then reuse the `tag` class for more than one small skill label.

```html
<main id="profile">
    <h1>Aria, tool librarian</h1>
    <p>Helps visitors find the right repair guide.</p>
    <span class="tag">Bicycles</span>
    <span class="tag">Small appliances</span>
</main>
```

An ID names one destination; a class labels a group. That distinction keeps the profile ready for anchor links and future styling.

## Checkpoint

Run the starter. You should see one profile heading, its description, and at least two tag labels. If a tag is missing from the tests, check that its `class` value is exactly `tag`.

## Your Tasks

1. Add one `<main>` element with `id="profile"`.
2. Inside it, add an `<h1>` and a non-empty `<p>`.
3. Add at least two elements with the class `tag`.

The schedule now has a focused volunteer profile with a unique page landmark and reusable skill labels.