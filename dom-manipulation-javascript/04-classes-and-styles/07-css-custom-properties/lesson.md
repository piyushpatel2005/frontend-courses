---
title: Change a CSS custom property from JavaScript
slug: css-custom-properties
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Set and remove an element's CSS custom property to change a card accent without duplicating style rules.
seo_title: JavaScript and CSS Custom Properties | DOM Manipulation Course
seo_description: Learn style.setProperty and removeProperty with CSS variables in a live JavaScript DOM card-theme example.
seo_keywords:
  - JavaScript CSS custom properties
  - style.setProperty
  - style.removeProperty
  - CSS variables DOM
---

# Change a CSS custom property from JavaScript

A night-market stall card needs an alternate accent color. Keep the border, badge, and other design rules in CSS; JavaScript should change just the shared color value.

## One value, several CSS uses

In `style.css`, the card defines `--accent` and two declarations use `var(--accent)`. A custom property name keeps its leading `--` and hyphens in JavaScript: `card.style.setProperty("--accent", "#b54435")` sets an **inline** value that overrides the CSS default on that card. `card.style.removeProperty("--accent")` removes only that inline override; the default from `.stall-card` applies again. This is different from assigning an empty color to every individual rule. `getComputedStyle(card).getPropertyValue("--accent").trim()` can read the effective value when debugging; `card.style.getPropertyValue` reads only the inline override.

The completed script wires two buttons:

```javascript
const card = document.querySelector("#stall-card");
const status = document.querySelector("#accent-status");
document.querySelector("#warm-accent").addEventListener("click", () => {
  card.style.setProperty("--accent", "#b54435");
  status.textContent = "Warm accent selected.";
});
document.querySelector("#default-accent").addEventListener("click", () => {
  card.style.removeProperty("--accent");
  status.textContent = "Default accent restored.";
});
```

The property is inherited by descendants, so the badge uses the card's current accent without any extra JavaScript. Unlike a class for a fixed theme, this technique also works when the accent value comes from a bounded, validated palette. Do not inject untrusted arbitrary CSS strings.

## Try it in the preview

Run: the card border and badge start blue. Press Warm accent: both become brick red. Press Default accent: the inline override disappears and CSS's blue returns. Inspect the stylesheet to find both `var(--accent)` uses. Change the warm color to another valid hex color and Run to see both update, then restore it. Next, build a separate card with the same set/reset pattern.
