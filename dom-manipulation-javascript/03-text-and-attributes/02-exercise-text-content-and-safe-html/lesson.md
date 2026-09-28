---
title: 'Exercise: render a safe notice'
slug: exercise-text-content-and-safe-html
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Practice textContent and innerHTML in a small browser UI.
seo_title: 'Exercise: render a safe notice | DOM Manipulation with JavaScript'
seo_description: Practice textContent and innerHTML with a tested JavaScript DOM exercise.
seo_keywords:
- JavaScript DOM
- textContent and innerHTML
- browser preview
- exercise
---

# Exercise: render a safe notice

A museum accepts a visitor caption that happens to contain angle brackets. Render that caption safely in the existing display. This follows the **Safe text and HTML** demo.

## Recall and transfer

`textContent` replaces a node’s children with plain text; angle brackets in the assigned string are displayed literally rather than parsed as tags. `innerHTML` parses the assigned string as HTML and can create elements, including unsafe markup when the string comes from a user. Reserve `innerHTML` for carefully controlled, trusted markup; do not use it for visitor input. Reading `.textContent` returns descendant text, including text in hidden descendants, rather than an HTML source string.

Here is the same technique in a **different setting**; its selectors and data are not the answer to this exercise:

```javascript
// A library label receives a member's plain-text suggestion.
const label = document.querySelector("#library-label");
const suggestion = "Try <poetry>";
label.textContent = suggestion; // The brackets remain text, not an element.
```

When a string comes from a person or remote data, which property keeps it as text? `textContent`. Why not `innerHTML` here? It would parse the string as markup.

In this starter, `index.html` contains the targets, `style.css` holds the visual rules, and `script.js` is where you finish the behavior. Run the preview, make the change, then Submit to check each step. If nothing changes, first check the selector and whether the script is attached at the bottom of the page.

## Your Tasks

1. Set `#caption` to the exact text `A sketch of <clouds>` from `visitorCaption` using `textContent`, so the brackets stay literal and no `<clouds>` element is created.
