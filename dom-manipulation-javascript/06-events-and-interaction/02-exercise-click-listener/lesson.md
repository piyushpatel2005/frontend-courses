---
title: 'Exercise: Check Library Hours'
slug: exercise-click-listener
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Connect a native button to a named click handler that updates library hours.
seo_title: 'Exercise: Check Library Hours | DOM Manipulation with JavaScript'
seo_description: Practice a named addEventListener click callback by updating a library status only after button
  activation.
seo_keywords:
- click listener exercise
- named JavaScript function
- accessible button
hints:
- Pass showHours rather than showHours() to addEventListener.
---

# Exercise: Check Library Hours

The library page begins with Hours not checked. Add a click listener so its button updates the status only when someone activates it.

## How it works

The park demo used a function reference without parentheses; here is a separate cafe example. Both keep a native button for built-in keyboard activation. If you write `announceHours()` inside `addEventListener`, it runs at setup time and hands the listener its return value instead of waiting for a click.

```javascript
// Different example: a cafe, not your library.
function revealSpecial() {
  document.querySelector("#special").textContent = "Soup today";
}
document.querySelector("#menu-button").addEventListener("click", revealSpecial);
```

## Try the preview

Run the page before and after activating the button. Only the activation should change the status to Open until 6 pm. Keep `role="status"` so the changed message can be announced without moving focus.

## Remember

A listener is registration, not an immediate call. The button supplies keyboard activation automatically; JavaScript only supplies the response.

## Your Tasks

1. Define a named function `showHours` that sets `#hours` text to `Open until 6 pm`.
2. Register `showHours` as the click listener of `#hours-button` without invoking it during page setup.
