---
title: 'Exercise: Search the Recipe Box'
slug: exercise-keyboard-and-defaults
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Make Enter search a recipe field without submitting the page or intercepting other keys.
seo_title: 'Exercise: Search the Recipe Box | DOM Manipulation with JavaScript'
seo_description: Practice a focused keydown Enter shortcut and conditional preventDefault in an accessible recipe
  search form.
seo_keywords:
- keydown Enter exercise
- preventDefault selective
- keyboard accessible search
hints:
- Return for non-Enter keys before calling preventDefault.
---

# Search the recipe box

The recipe box provides a labeled field, Search button, and `showRecipe()` function. That function reads the current field value, trims it, and displays `Finding: ` followed by the term as text. Your job is to connect two ways of requesting it.

Edit `script.js`. Each event path needs its own listener: `keydown` on the field and `submit` on the form. The first listener must ignore every key except Enter. Canceling all key defaults would break typing and Tab navigation.

## Your Tasks

1. On Enter `keydown` in `#recipe`, cancel that key's default and call the supplied `showRecipe()`. Leave other keys uncanceled.
2. On `#recipe-form` submission, prevent navigation and call `showRecipe()`.

After step 1, type `  Bread  ` and press Enter: the output should be Finding: Bread. After step 2, the Search button should work too. Run with a fresh preview between checks, then Submit.

Test Tab from the field and Space on the focused button. The button's native activation already submits the form; do not attach another keyboard-click handler. This is a local demonstration, not a request to a recipe service.
