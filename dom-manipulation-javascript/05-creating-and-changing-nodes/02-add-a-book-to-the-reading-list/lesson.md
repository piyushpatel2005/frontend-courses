---
title: "Add a book to the reading list"
slug: add-a-book-to-the-reading-list
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add a new book as a real list item using createElement, textContent and append.
seo_title: "Add a book to the reading list | JavaScript DOM"
seo_description: "Add a new book as a real list item using createElement, textContent and append."
seo_keywords:
- DOM append patterns
- JavaScript list item
- safe textContent
hints:
- Set textContent before calling append on the list.
---

The library list already contains The Secret Garden. Your JavaScript will prepare a second book and then insert it. Leave the supplied HTML and CSS in place; edit `script.js`.

The garden demo performed creation and insertion together. Here the supplied `makeBook(title)` function separates them so you can check the invisible step first. `return` hands the created element back to its caller; it does not insert it. For example, a menu helper could return a prepared `li` to whichever menu needs it.

The supplied `window.makeBook = makeBook` makes the helper available to the checks. Leave that line in place. It stores the function reference without calling the function.

## Your Tasks

1. Complete `makeBook(title)` so it returns a detached `li` whose `textContent` is the supplied title. A title such as `<em>River</em>` must remain plain text.
2. Append `makeBook("The Hobbit")` to `#books`, after The Secret Garden.

Run after each step. After step 1 the page still has one book, but Submit can check the returned element. After step 2, the preview should contain exactly two books in the requested order. Submit again to check insertion.
