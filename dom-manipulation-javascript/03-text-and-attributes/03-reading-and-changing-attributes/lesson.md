---
title: Read and change link attributes
slug: reading-and-changing-attributes
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read, set, and remove attributes on a link without losing its accessible label.
seo_title: Read and change link attributes | DOM Manipulation with JavaScript
seo_description: Learn getAttribute, setAttribute, and removeAttribute through a runnable browser preview.
seo_keywords:
- JavaScript DOM
- getAttribute, setAttribute, and removeAttribute
- browser preview
- demo
---

# Read and change link attributes

A neighbourhood guide has a link that starts as a placeholder. Give the link a real destination and a meaningful accessible label, then remove a no-longer-needed marker.

## What the code does

`getAttribute(name)` returns the stored attribute string or `null` when absent. `setAttribute(name, value)` creates or replaces an attribute. `removeAttribute(name)` deletes it. An anchor needs a real `href`; its visible wording should identify the destination. `aria-label` is useful when the visible label is too short, but it should also name the destination clearly. Never replace a descriptive visible label with vague “click here.”

In `script.js`, this is the important part of the already-working preview:

```javascript
const trailLink = document.querySelector("#trail-link");
const linkStatus = document.querySelector("#link-status");
const previousDestination = trailLink.getAttribute("href");
trailLink.setAttribute("href", "https://example.org/trails");
trailLink.setAttribute("aria-label", "Explore the local trail map");
trailLink.removeAttribute("data-placeholder");
linkStatus.textContent = `Link moved from ${previousDestination} to ${trailLink.getAttribute("href")}`;
```

## Try it in the preview

The status reports the old `#` and new address. Inspect the link: its destination and `aria-label` changed; `data-placeholder` is gone. Change the final address, Run, then restore it. You do not need to navigate away.

Recall the three attribute actions: `getAttribute` reads (or returns `null`), `setAttribute` writes, and `removeAttribute` deletes.

The next lesson gives you a different page to build from a starter.
