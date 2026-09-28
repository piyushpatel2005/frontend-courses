---
title: "Exercise: Apply CSS Three Ways"
slug: exercise-apply-css
order: 6
language: html
summary: Practice inline, internal, and external CSS in an exhibit card.
seo_title: "Exercise: Apply CSS Three Ways | Introduction to CSS"
seo_description: Practice inline, internal, and external CSS in an exhibit card.
seo_keywords: [CSS exercise, exercise-apply-css]
lesson_type: coding
validationRules: []
hints:
  - 'Use <link rel="stylesheet" href="style.css"> for external CSS.'
---

# Exercise: Apply CSS Three Ways

## Mission

The demo showed three CSS locations on a finished card. Here the internal `<style>` block and external `style.css` file are ready, but the new gallery notice has no rules yet.

## What you'll build

An exhibit card with one inline rule, one internal rule, and an external stylesheet.

## Your Tasks

1. Set `color: #7a1fa2;` in an inline `style` attribute on the `<h1>`.
2. Set `font-size: 18px;` in an internal `p` rule.
3. Link `style.css` in `<head>`.
4. Set `background-color: #eef6ff;` on `body` in `style.css`.

## Checkpoint

Run the page. The heading has its local style, the paragraph is larger, and the background color is set in `style.css`. This course's preview injects `style.css` automatically, even before you add the `<link>`; step 3 checks the connection a standalone HTML page needs.

## Payoff

You can now recognize the three common ways CSS reaches HTML.
