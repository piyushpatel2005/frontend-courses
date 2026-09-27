---
title: 'Exercise: announce session availability'
slug: exercise-dataset-conditional-content
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice dataset and conditional content in a small browser UI.
seo_title: 'Exercise: announce session availability | DOM Manipulation with JavaScript'
seo_description: Practice dataset and conditional content with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- dataset and conditional content
- browser preview
- exercise
---

# Exercise: announce session availability

The workshop card marks its state in HTML. Read that state and show the correct session message without parsing markup. This follows the **Data attributes and conditional text** demo.

## Recall and transfer

An HTML `data-status` attribute appears as `element.dataset.status`, a string. For multiword names, `data-session-state` becomes `dataset.sessionState`. A condition can compare that string and write one of two messages with `textContent`. `dataset` is for page metadata, not a secret store or a substitute for validated application data.

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
// A parcel card uses a multiword data attribute.
const parcel = document.querySelector("#parcel-card");
const notice = document.querySelector("#parcel-notice");
notice.textContent = parcel.dataset.deliveryState === "ready"
  ? "Parcel ready for collection."
  : "Parcel still on its way.";
```

Which JavaScript name corresponds to `data-session-state`? `dataset.sessionState`. Recall that dataset values are strings, so compare with `"open"`, not a boolean.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. With `data-session-state="full"`, show `This session is full.` as the exact plain text in `#session-message`.
2. Put the condition in a function named `updateSessionMessage`, call it once on load, and read `dataset.sessionState` inside it. When the attribute changes to `open` and the function is called again, show `Places are available.`.
