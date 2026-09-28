---
title: Inline styles, classes, and hidden
slug: inline-style-and-hidden-state
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use an inline style for one-off color, a class for a reusable look, and hidden for visibility.
seo_title: Inline styles, classes, and hidden | DOM Manipulation with JavaScript
seo_description: Learn element.style, CSS classes, and hidden through a runnable browser preview.
seo_keywords:
- JavaScript DOM
- element.style, CSS classes, and hidden
- browser preview
- demo
---

# Inline styles, classes, and hidden

A notice can change tone without scattering all its design rules through JavaScript. Use the right tool for each change.

## What the code does

`element.style.borderColor` writes an inline CSS property; camelCase corresponds to CSS `border-color`. A CSS class stores reusable styling in `style.css`, so `classList.add("highlight")` is cleaner for a multi-property look. `element.hidden = true` removes an element from layout and the accessibility tree; `false` shows it again. Inline styles can override class styles of the same property, so do not set the same property both ways unless you intend that priority.

In `script.js`, this is the important part of the already-working preview:

```javascript
const weatherNotice = document.querySelector("#weather-notice");
document.querySelector("#accent-notice").addEventListener("click", () => {
  weatherNotice.style.borderColor = "teal";
  weatherNotice.style.borderStyle = "solid";
});
document.querySelector("#feature-notice").addEventListener("click", () => {
  weatherNotice.classList.add("highlight");
});
document.querySelector("#hide-notice").addEventListener("click", () => {
  weatherNotice.hidden = true;
});
document.querySelector("#show-notice").addEventListener("click", () => {
  weatherNotice.hidden = false;
});
```

## Try it in the preview

Accent border applies two inline properties; Feature notice adds the reusable yellow class. Hide removes the paragraph from the layout, and Show restores it. Try Feature before Accent and observe that CSS class styling and inline border color affect different properties.

Recall the split: `style.borderColor` for a one-off property, `classList` for a named reusable appearance, and `hidden` for real visibility. Which CSS property is camel-cased? `border-color` → `borderColor`.

The next lesson gives you a different page to build from a starter.
