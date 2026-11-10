---
title: "Class List Methods"
slug: class-list-methods
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add and remove a highlight class with a supplied click callback.
seo_title: Add, remove, and check classes | DOM Manipulation with JavaScript
seo_description: Add and remove a highlight class with a supplied click callback.
seo_keywords:
- JavaScript DOM
- classList.add, remove, and contains
- browser preview
- classList methods
---

The programme card needs a highlight that can be switched on and off. Keep the styling in CSS and change only the relevant class from JavaScript.

`classList.add("active")` adds a class while preserving the others. `remove("active")` removes only that class. `contains("active")` asks whether it is present and returns a boolean. Pass the class name without a dot; the dot belongs in CSS selectors, not in these method arguments.

## Run this code when the button is clicked

The checkbox demo passed a named function to `addEventListener`. Here the callback is an arrow function written in place:

```javascript
document.querySelector("#mark-programme")
  .addEventListener("click", () => {
    programme.classList.add("active");
  });
```

The selector finds the button. `"click"` names the event. `() => { ... }` defines the function the browser should run for each click; it does not run the body when the listener is registered. The empty parentheses mean this callback does not name any parameters. A native button also produces a click when activated from the keyboard.

The completed script has a second listener to clear the class and a status line that reports `contains("active")`. Its template string inserts that boolean as text. The supplied `aria-live="polite"` status lets assistive technology announce updates without interrupting the current announcement.

Run, click Mark, then Clear. The highlight changes, the status changes from true to false, and the original `note` class remains. Change the programme's words in HTML and Run again; the same behavior still works. Restore them afterward. The following exercise supplies the empty callbacks so you can focus on class changes.
