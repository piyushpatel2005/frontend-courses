---
title: Data attributes and conditional text
slug: dataset-conditional-content
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read a data-* value with dataset and choose a safe text message from it.
seo_title: Data attributes and conditional text | DOM Manipulation with JavaScript
seo_description: Learn dataset and conditional content through a runnable browser preview.
seo_keywords:
- JavaScript DOM
- dataset and conditional content
- browser preview
- demo
---

# Data attributes and conditional text

A notice card carries a small bit of state in `data-status`. Read it in JavaScript to choose the message shown on the page.

## What the code does

An HTML `data-status` attribute appears as `element.dataset.status`, a string. For multiword names, `data-session-state` becomes `dataset.sessionState`. A condition can compare that string and write one of two messages with `textContent`. `dataset` is for page metadata, not a secret store or a substitute for validated application data.

In `script.js`, this is the important part of the already-working preview:

```javascript
const gardenCard = document.querySelector("#garden-card");
const gardenMessage = document.querySelector("#garden-message");
if (gardenCard.dataset.status === "open") {
  gardenMessage.textContent = "Garden visits are open today.";
} else {
  gardenMessage.textContent = "Garden visits are closed today.";
}
```

## Try it in the preview

The preview reports that visits are open. Change `data-status` in `index.html` to `closed` and Run: the other branch appears. Restore `open` to see the first branch again.

Which JavaScript name corresponds to `data-session-state`? `dataset.sessionState`. Recall that dataset values are strings, so compare with `"open"`, not a boolean.

The next lesson gives you a different page to build from a starter.
