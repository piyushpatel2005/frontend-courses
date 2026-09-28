---
title: 'Exercise: label every trail stop'
slug: exercise-select-all
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Select every trail stop and update each one using forEach.
seo_title: 'Exercise: label every trail stop | Beginner JavaScript DOM'
seo_description: Select every trail stop and update each one using forEach. Practice
  in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- querySelectorAll exercise
- NodeList forEach
- DOM list
---

The market demo selected *all* `.stall` elements and used `forEach` to update each one. Your trail page has three `.stop` list items. Each should gain the suffix ** — marked**. The CSS already styles the list; your job is in `script.js`.

The same shape works on a different page, a craft fair:

```javascript
const booths = document.querySelectorAll(".booth");
booths.forEach((booth) => {
  booth.textContent += " — checked in";
});
```

The selector produces a NodeList; each callback receives one element. Do not write to the NodeList as if it were one element, and do not use `querySelector`, which would change only the first stop. Run to see three marked stops, then Submit.

## Your Tasks

1. Use `querySelectorAll(".stop")` and `forEach` to append ` — marked` to the text of each of the three trail stops.
