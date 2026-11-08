---
title: "Dataset Conditional Content Practice"
slug: dataset-conditional-content-practice
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Choose a workshop message from its current data attribute.
seo_title: 'Exercise: announce session availability | DOM Manipulation with JavaScript'
seo_description: Choose a workshop message from its current data attribute.
seo_keywords:
- JavaScript DOM
- dataset and conditional content
- browser preview
- exercise
---

A workshop card stores availability in `data-session-state`. Complete the supplied `updateSessionMessage()` function so its message follows that value.

The function already reads `sessionCard.dataset.sessionState`. If it equals `"open"`, the first branch runs. Otherwise the `else` branch runs. This small example treats every non-open value as full. Use `textContent` for both messages.

Edit `script.js`. Start with the `else` branch because the supplied HTML says `full`. Run to see This session is full. Then complete the open branch, change the HTML value to `open`, and Run again. Restore `full` before Submit. The tests also change the data attribute and call the function again, so a fixed message outside the function will not work.

## Your Tasks

1. In `updateSessionMessage()`'s `else` branch, show `This session is full.` as plain text in `#session-message`.
2. In its `open` branch, show `Places are available.` when `dataset.sessionState` is `open`.
