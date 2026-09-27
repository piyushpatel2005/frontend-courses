---
title: 'Exercise: select a notice and label'
slug: exercise-find-one-element
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use getElementById and querySelector to update two different parts of an
  event page.
seo_title: 'Exercise: select a notice and label | Beginner JavaScript DOM'
seo_description: Use getElementById and querySelector to update two different parts
  of an event page. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- getElementById exercise
- querySelector exercise
- DOM textContent
---

The garden demo used an id for its one status and a class selector for its first tip. Now work on a lantern walk listing. It already contains a notice with `id="walk-status"` and two paragraphs with class `detail`. The first detail is the meeting place; the second is deliberately left alone.

Here is a separate pattern from a library display, not the answer to this page:

```javascript
const hours = document.getElementById("opening-hours");
const firstShelf = document.querySelector(".shelf-label");
hours.textContent = "Open until 6";
firstShelf.textContent = "New arrivals";
```

In `script.js`, select `walk-status` by its id (omit the `#` for `getElementById`) and set its text to **Walk confirmed**. Then select the first `.detail` (include the dot for `querySelector`) and set it to **Meet at the bridge**. Run to see the page change; Submit verifies the two distinct elements. You do not need to edit the HTML.

## Your Tasks

1. Select `#walk-status` with `document.getElementById` and change its text to `Walk confirmed`.
2. Select the first `.detail` with `document.querySelector` and change its text to `Meet at the bridge`, leaving the second detail unchanged.
