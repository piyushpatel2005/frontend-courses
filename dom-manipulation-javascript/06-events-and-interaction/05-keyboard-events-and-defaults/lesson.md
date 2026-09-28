---
title: Keyboard Events Without Trapping Keys
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
- keydown demo
- preventDefault form
- accessible keyboard behavior
---

# Keyboard Events Without Trapping Keys

A trail finder has a search field inside a form. Pressing Enter should show a local result without causing the browser’s usual form submission. Ordinary typing and Tab navigation must keep working.

## How it works

`keydown` reports a `KeyboardEvent`; `event.key` names the key, such as `"Enter"`. Only for Enter do we call `event.preventDefault()` to cancel the form’s default submit action, then update a live status. We also handle the form’s `submit` event for people who activate the Search button; that path has the same result. Do not cancel all keys: blocking Tab would trap keyboard users. A `<label>` gives the field an accessible name; `role="status"` announces a result without stealing focus.

```javascript
field.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showResult();
});
```

## Try the preview

Run the preview. Type a trail name and press Enter to show the result without reloading. Press Tab: focus should move to the Search button. Clicking Search should also show the result.

## Remember

Native buttons already respond to Enter and Space; do not rebuild that behavior with keydown. Keyboard events are useful when a focused text field needs a specific shortcut.

The following exercise uses the same idea in a different setting.
