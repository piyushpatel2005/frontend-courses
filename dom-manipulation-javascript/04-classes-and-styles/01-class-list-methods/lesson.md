---
title: Add, remove, and check classes
slug: class-list-methods
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Apply and clear a CSS class, then check its current state with contains.
seo_title: Add, remove, and check classes | DOM Manipulation with JavaScript
seo_description: Learn classList.add, remove, and contains through a runnable browser preview.
seo_keywords:
- JavaScript DOM
- classList.add, remove, and contains
- browser preview
- demo
---

# Add, remove, and check classes

A programme card needs a quick highlight control. Instead of rewriting the whole `class` string, add and remove just the highlight class.

## What the code does

`classList.add("active")` adds a class without removing existing classes. `classList.remove("active")` removes only that class. `classList.contains("active")` returns a boolean so your code can report the current state. CSS defines what `.active` looks like; JavaScript only chooses whether the element has it.

In `script.js`, this is the important part of the already-working preview:

```javascript
const programme = document.querySelector("#programme");
const programmeStatus = document.querySelector("#programme-status");
document.querySelector("#mark-programme").addEventListener("click", () => {
  programme.classList.add("active");
  programmeStatus.textContent = `Marked: ${programme.classList.contains("active")}`;
});
document.querySelector("#clear-programme").addEventListener("click", () => {
  programme.classList.remove("active");
  programmeStatus.textContent = `Marked: ${programme.classList.contains("active")}`;
});
```

## Try it in the preview

Click Mark: the programme turns green and the status says `true`. Click Clear: the green highlight disappears and the status says `false`. The original `note` class remains in both states.

Which method answers a yes/no question about a class? `contains`. Which two methods change it? `add` and `remove`.

The next lesson gives you a different page to build from a starter.
