---
title: "Confirm the Lantern Walk"
slug: confirm-the-lantern-walk
order: 9
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Use getElementById and querySelector to update two different parts of an
  event page.
seo_title: "Confirm the Lantern Walk | JavaScript DOM"
seo_description: Use getElementById and querySelector to update two different parts
  of an event page. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- getElementById
- querySelector
- DOM textContent
---

The lantern-walk page has a status paragraph and two detail paragraphs. Update the status and the meeting place without changing the reminder about bringing a lantern.

Open `index.html` to locate `id="walk-status"` and both elements with `class="detail"`. You only need to edit `script.js`.

The garden demo used `getElementById("garden-status")` for one named element and `querySelector(".tip")` for the first class match. Apply those methods to this page's different names. Remember that `getElementById` takes an id without `#`, while the class selector passed to `querySelector` starts with a dot.

Run after completing the first change: you should see **Walk confirmed** while the meeting place is still pending. Complete the second change and Run again. Submit checks each update separately.

## Your Tasks

1. Select `#walk-status` with `document.getElementById` and change its text to `Walk confirmed`.
2. Select the first `.detail` with `document.querySelector` and change its text to `Meet at the bridge`, leaving the second detail unchanged.
