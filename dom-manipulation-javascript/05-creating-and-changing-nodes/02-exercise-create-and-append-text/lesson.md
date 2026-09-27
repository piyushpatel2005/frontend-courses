---
title: 'Exercise: Add a Reading List Item'
slug: exercise-create-and-append-text
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add a new book as a real list item using createElement, textContent and append.
seo_title: 'Exercise: Add a Reading List Item | DOM Manipulation with JavaScript'
seo_description: 'Practice adding a DOM list item safely: create an li, set its textContent, and append it to a
  reading list.'
seo_keywords:
- DOM append exercise
- JavaScript list item
- safe textContent
hints:
- Set textContent before calling append on the list.
---

# Exercise: Add a Reading List Item

Use the garden demo as your model, but work on a library reading list. The starter already has a list and one book; your script will add a second book without editing the HTML list by hand.

## How it works

Notice the order in the example below: first make the node, then set its text, then connect it to the parent. A new `li` created in JavaScript does not appear just because you put it in a variable. `textContent` is the right choice for book titles, including titles containing `<` or `&`, because titles are data rather than markup.

```javascript
// Different example: a cafe menu, not your reading list.
const dessert = document.createElement("li");
dessert.textContent = "Pear tart";
document.querySelector("#desserts").append(dessert);
```

## Try the preview

After your changes, the preview should show The Secret Garden followed by The Hobbit. If nothing appears, check that you appended the node to `#books`, not to a variable that still holds `null`.

## Remember

Recall the garden board: `createElement` gives you a node, `textContent` fills it safely, and `append` places it. This exercise changes the setting and the data, not that three-step sequence.

## Your Tasks

1. Create an `li` in `script.js` and set its `textContent` to `The Hobbit` (not HTML markup).
2. Append that new item as the last child of `#books`, after The Secret Garden.
