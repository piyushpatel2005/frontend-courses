---
title: 'Exercise: initialize a deferred script'
slug: exercise-deferred-script
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add defer to a head script and initialize a visible page-ready state after
  parsing.
seo_title: 'Exercise: initialize a deferred script | Beginner JavaScript DOM'
seo_description: Add defer to a head script and initialize a visible page-ready state
  after parsing. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- defer attribute
- head script
- document.body
---

In the workshop demo, `defer` let a script written in the head safely use `document.body`. The seed-library page also links `script.js` in the head, but the starter tag has no `defer`, and the script has no initialization. The waiting badge should become **Seed library ready** once HTML parsing finishes.

For comparison, a museum guide could use this *different* page-ready attribute:

```html
<script src="script.js" defer></script>
```
```javascript
document.body.dataset.guide = "open";
```

The museum CSS could watch `[data-guide="open"]`. Here the existing CSS watches `[data-ready="yes"]` instead. Add the `defer` attribute in `index.html`, then set `document.body.dataset.ready` to `"yes"` in `script.js`. Try Run to see the badge, and Submit to check both the loading setup and the resulting DOM state.

## Your Tasks

1. Give the external `script.js` tag in the document head a `defer` attribute so it waits until the HTML has been parsed.
2. Set `document.body.dataset.ready` to `"yes"` in `script.js` to reveal the seed-library ready badge.
