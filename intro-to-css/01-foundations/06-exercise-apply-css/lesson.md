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

# Style the gallery notice three ways

The previous demo put declarations in an attribute, a `<style>` block, and a separate file. This gallery notice supplies an empty internal block and `style.css`, but no stylesheet link. Edit both tabs.

For inline CSS, put declarations directly in the heading's `style` attribute. For internal CSS, put a complete selector-and-braces rule inside the supplied `<style>` block in `<head>`. External rules belong in `style.css`.

## Your Tasks

1. Set `color: #7a1fa2;` in an inline `style` attribute on the `<h1>`.
2. Set `font-size: 18px;` in an internal `p` rule.
3. Add `<link rel="stylesheet" href="style.css">` inside `<head>`.
4. Set `background-color: #eef6ff;` in a `body` rule in `style.css`.

## Check each source

Run to inspect the purple heading, larger paragraph, and pale blue background. Submit after each step to check its location as well as its result. The preview injects the stylesheet tab automatically, so the link task will not cause a visible change here; it supplies the connection your HTML needs outside this preview.
