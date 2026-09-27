---
title: Toggle a panel accessibly
slug: toggle-and-aria-expanded
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Toggle a panel class while keeping the button’s expanded state in sync.
seo_title: Toggle a panel accessibly | DOM Manipulation with JavaScript
seo_description: Learn classList.toggle and aria-expanded through a runnable browser preview.
seo_keywords:
- JavaScript DOM
- classList.toggle and aria-expanded
- browser preview
- demo
---

# Toggle a panel accessibly

A route details button reveals or hides a panel. Keep what sighted users see and what assistive technology reads in agreement.

## What the code does

`classList.toggle("is-open")` adds the class if absent and removes it if present, returning the new boolean state. The button’s `aria-expanded` must be the string `"true"` when the panel is shown and `"false"` when hidden. `aria-controls` identifies the panel. Use the native `hidden` property to make a collapsed panel actually unavailable, not merely visually faded. Initialize all three states consistently.

In `script.js`, this is the important part of the already-working preview:

```javascript
const routeToggle = document.querySelector("#route-toggle");
const routeDetails = document.querySelector("#route-details");
routeToggle.addEventListener("click", () => {
  const isOpen = routeDetails.classList.toggle("is-open");
  routeDetails.hidden = !isOpen;
  routeToggle.setAttribute("aria-expanded", String(isOpen));
});
```

## Try it in the preview

The panel starts hidden and the button says `aria-expanded="false"`. Click once: details appear, the class exists, and the button state becomes `true`. Click again: all three return to the closed state.

Recall the three linked states: `is-open` class, panel `hidden`, button `aria-expanded`. When open they are present, false, and `"true"`; when closed they are absent, true, and `"false"`.

The next lesson gives you a different page to build from a starter.
