---
title: "Dataset Conditional Content"
slug: dataset-conditional-content
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read a data attribute to choose the garden availability message.
seo_title: Data attributes and conditional text | DOM Manipulation with JavaScript
seo_description: Read a data attribute to choose the garden availability message.
seo_keywords:
- JavaScript DOM
- dataset and conditional content
- browser preview
- data attributes
---

The garden card stores its availability in `data-status`. Read that value to choose the message inside the card.

`data-*` attributes hold small pieces of page metadata. JavaScript exposes them through `dataset`: `data-status` becomes `dataset.status`, and `data-session-state` becomes `dataset.sessionState`. Values are strings, so compare with `"open"`, not `true`. Writing a dataset property updates the corresponding attribute too.

```javascript
const gardenCard = document.querySelector("#garden-card");
const gardenMessage =
  document.querySelector("#garden-message");
if (gardenCard.dataset.status === "open") {
  gardenMessage.textContent =
    "Garden visits are open today.";
} else {
  gardenMessage.textContent =
    "Garden visits are closed today.";
}
```

Run: the message says visits are open. Change `data-status` in `index.html` to `closed` and Run again to see the other branch. Restore `open` afterward. The script reads the attribute when it runs; changing metadata alone does not automatically rerun this condition.

Page metadata is visible to anyone who inspects the page. Do not put secrets in it. In the next exercise, a supplied function lets you repeat the update after the value changes.
