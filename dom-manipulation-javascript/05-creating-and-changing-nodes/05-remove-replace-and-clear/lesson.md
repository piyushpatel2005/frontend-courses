---
title: "Remove Replace And Clear"
slug: remove-replace-and-clear
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Remove one node, replace another, and clear children with replaceChildren instead of parsing HTML.
seo_title: Remove, Replace, and Clear Safely | DOM Manipulation with JavaScript
seo_description: Learn remove, replaceWith and replaceChildren for safe DOM cleanup without unsafe innerHTML string
  parsing.
seo_keywords:
- DOM remove
- replaceWith JavaScript
- replaceChildren safe clearing
---

The community notice board has three different problems: an expired announcement, an incorrect market day, and scratch notes that are no longer needed. Each calls for a different-sized change.

- `element.remove()` detaches that element from its parent.
- `oldElement.replaceWith(newElement)` puts a replacement in the old element's position. Its neighbors stay where they were.
- `parent.replaceChildren()` with no arguments removes every child while keeping the parent itself. With node arguments, it replaces the children with those nodes.

```javascript
const current = document.createElement("li");
current.textContent = "Market on Friday";
document.querySelector("#outdated").replaceWith(current);
```

Use `textContent` for the replacement label. There is no need to construct HTML strings for this cleanup. A removed node can still exist in a variable; removing it does not erase the JavaScript reference.

## Try the preview

Run the finished example. Old meeting should disappear, Market on Friday should replace Market on Tuesday, and Scratch notes should have no items. Volunteer picnic must remain.

Temporarily add another `li` inside `#scratch` in the HTML and run again. Both scratch items disappear, but the list stays. Restore the markup before refreshing the museum display.
