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

# Exercise: Search the Recipe Box

The recipe box has a labeled search field and a normal Search button. Add a keyboard shortcut for Enter in the field; keep ordinary keys and Tab available.

## How it works

The separate museum-search example only cancels Enter on the field and cancels the form’s submit event for button activation. The early return matters: if you call `preventDefault` for every key, you block normal typing and can interfere with navigation. The form listener also prevents an actual page navigation when someone uses its submit button. Keep the provided `role="status"` element for the result.

```javascript
// Different example: a museum catalogue, not your recipe box.
function showArtwork() { output.textContent = "Find: " + query.value.trim(); }
query.addEventListener("keydown", function (event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  showArtwork();
});
museumForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showArtwork();
});
```

## Try the preview

Type Bread and press Enter: the result should read Finding: Bread, without navigation. Press Tab afterward; focus should still move away from the field. Activating Search with mouse or keyboard should produce the same result.

## Remember

The earlier click and delegation lessons relied on native buttons. This shortcut adds behavior to a text field while preserving the browser’s other keyboard behaviors.

## Your Tasks

1. When `#recipe` receives Enter on `keydown`, prevent only that default and set `#recipe-result` to `Finding: ` followed by the trimmed field value.
2. Leave unrelated keys uncanceled (including Tab); handle `#recipe-form` submit by preventing page navigation and showing the same result for button activation.
