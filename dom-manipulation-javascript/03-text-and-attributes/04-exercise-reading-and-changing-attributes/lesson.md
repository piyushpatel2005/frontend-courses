---
title: 'Exercise: update an accessible link'
slug: exercise-reading-and-changing-attributes
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice getAttribute, setAttribute, and removeAttribute in a small browser UI.
seo_title: 'Exercise: update an accessible link | DOM Manipulation with JavaScript'
seo_description: Practice getAttribute, setAttribute, and removeAttribute with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- getAttribute, setAttribute, and removeAttribute
- browser preview
- exercise
---

# Exercise: update an accessible link

The reading club link is still a placeholder. Update its address and accessible name, and clear its draft marker. This follows the **Read and change link attributes** demo.

## Recall and transfer

`getAttribute(name)` returns the stored attribute string or `null` when absent. `setAttribute(name, value)` creates or replaces an attribute. `removeAttribute(name)` deletes it. An anchor needs a real `href`; its visible wording should identify the destination. `aria-label` is useful when the visible label is too short, but it should also name the destination clearly. Never replace a descriptive visible label with vague “click here.”

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
// An exhibit link has a short visible name but a fuller accessible name.
const exhibit = document.querySelector("#exhibit-link");
const oldHref = exhibit.getAttribute("href"); // A string, or null.
exhibit.setAttribute("href", "https://example.org/exhibits");
exhibit.setAttribute("aria-label", "Browse the museum exhibits");
exhibit.removeAttribute("data-draft");
```

Recall the three attribute actions: `getAttribute` reads (or returns `null`), `setAttribute` writes, and `removeAttribute` deletes.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. Read the original `href` with `getAttribute` before changing it; display `Previous destination: #` in `#destination`.
2. Set `#club-link`’s `href` to `https://example.org/reading-club` and `aria-label` to `View the reading club schedule`; keep its descriptive visible text.
3. Remove the obsolete `data-draft` attribute from `#club-link`.
