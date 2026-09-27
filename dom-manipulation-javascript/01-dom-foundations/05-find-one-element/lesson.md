---
title: Find one element by id or CSS selector
slug: find-one-element
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Select a unique element with getElementById and the first CSS match with
  querySelector.
seo_title: Find one element by id or CSS selector | Beginner JavaScript DOM
seo_description: Select a unique element with getElementById and the first CSS match
  with querySelector. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- getElementById
- querySelector
- CSS selector
---

The page is ready; now we can reach a specific piece of it. On a community garden board, an **id** names one element. `document.getElementById("garden-status")` returns that element (without `#`). `document.querySelector(".tip")` uses a CSS selector and returns the *first* matching element; a class selector begins with a dot. Both methods return an element or `null` if no match exists.

```javascript
const status = document.getElementById("garden-status");
const firstTip = document.querySelector(".tip");
status.textContent = "Garden beds open";
firstTip.textContent = "Bring a watering can.";
```

Look at `index.html`: the status has an id, while **two** notes have the `.tip` class. Run the preview. Only the first tip changes; the second stays untouched. That is the key difference between *one match* and *all matches*, which you will meet in the next module. Try swapping `.tip` for `".missing"` and observe the error when writing through `null`; restore the selector. In the exercise, you will select different elements in a fresh page.
