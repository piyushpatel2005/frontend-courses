---
title: "Find One Element"
slug: find-one-element
order: 8
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

Changing the entire body was safe on a blank tab. On this garden board, we want to update just a status and one note. First, JavaScript needs references to those elements.

## Select by id

In `index.html`, find the paragraph with `id="garden-status"`. An id should identify one element in a page. Pass its name to `getElementById`, without a `#`:

```javascript
const status = document.getElementById("garden-status");
status.textContent = "Garden beds open";
```

`getElementById()` is a method: a function called through `document`. The string in parentheses tells it which id to find. The returned element is stored in `status`, so the next line changes that element's text.

## Select the first CSS match

`querySelector()` accepts a CSS selector. A dot means a class, `#` means an id, and a bare tag name such as `p` means that element type.

```javascript
const firstTip = document.querySelector(".tip");
firstTip.textContent = "Bring a watering can.";
```

This page has two paragraphs with class `tip`. `querySelector(".tip")` returns only the first one in document order. It does not return all matching elements.

## Observe a match and a miss

Run the supplied code. The status becomes **Garden beds open**, the first tip changes, and the second tip keeps its original text.

In `script.js`, temporarily replace the string `".tip"` with `".missing"`. Run again and read the error in the course Console. Both selection methods return `null` when no element matches; writing `textContent` on `null` causes a TypeError. Restore `".tip"` and Run again to fix it. We will add checks for missing elements in the next module.
