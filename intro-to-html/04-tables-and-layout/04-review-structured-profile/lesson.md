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

`<main>` names the page's central content; you will study semantic landmarks in detail later. Here it lets one profile have a unique `id`, while the repeated skill labels share a `class`. Unlike a `div`, the main landmark also tells readers what part of the document is primary. Keep just one `<main>` on this page.

## Checkpoint

Run the starter: it is empty except for a source comment. After your edits you should see a profile heading, a description, and two skill tags. The class names will not make the tags look different until you add CSS later.

## Your Tasks

1. Add one `<main>` element with `id="profile"`.
2. Inside it, add an `<h1>` with the volunteer’s name.
3. Add a non-empty `<p>` describing their role inside the profile.
4. Inside the profile, add at least two non-empty skill labels with `class="tag"`.

## Payoff

The schedule now has a focused volunteer profile with a unique page landmark and reusable skill labels.
