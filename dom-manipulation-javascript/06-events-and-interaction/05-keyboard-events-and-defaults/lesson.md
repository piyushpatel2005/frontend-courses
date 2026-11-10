---
title: "Keyboard Events And Defaults"
slug: keyboard-events-and-defaults
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Handle Enter in a focused search field and prevent only its form submission.
seo_title: Keyboard Events Without Trapping Keys | DOM Manipulation with JavaScript
seo_description: Learn keydown and preventDefault with an accessible search field while preserving ordinary typing
  and Tab.
seo_keywords:
- keydown
- preventDefault form
- accessible keyboard behavior
---

The trail finder searches locally. It must not navigate away when someone presses Enter or activates Search. This example demonstrates a field-specific shortcut; an ordinary form usually needs only its submit handler.

`keydown` supplies a `KeyboardEvent`. Its `key` property names the key, such as `"Enter"` or `"Tab"`. Return early for keys you do not handle. `event.preventDefault()` cancels a cancelable browser action for this event; it does not stop the event from bubbling.

```javascript
field.addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showResult();
});
```

The field's `.value` is its current string, not its `textContent`. `.trim()` returns that string without surrounding whitespace. The supplied `showResult` reads it when called and writes a literal text result.

The form also has a `submit` listener. Its `preventDefault()` blocks navigation for Search-button activation. The field's Enter listener cancels implicit submission before calling the same display function, so that path should run only once.

## Try the preview

Run, type Pine trail, and press Enter. Tab should still move focus to Search; pressing Space there should search through the form's submit path. Try a different term with the mouse. No real search or network request is made.
