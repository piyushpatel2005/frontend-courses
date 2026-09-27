---
title: Remove, Replace, and Clear Safely
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
- DOM remove demo
- replaceWith JavaScript
- replaceChildren safe clearing
---

# Remove, Replace, and Clear Safely

A community notice board has an expired item, an outdated item, and a scratch list that needs to start empty. These are three distinct changes, not one string rewrite.

## How it works

`element.remove()` detaches the selected element. `oldElement.replaceWith(newElement)` swaps a *node* into exactly that spot. `parent.replaceChildren()` with no arguments removes all its children; use it when you intend to empty a whole list. Do not use `innerHTML` just to clear a container, and never build HTML strings from user text. `textContent` keeps the replacement label as data rather than executable markup.

```javascript
document.querySelector("#expired").remove();
const current = document.createElement("li");
current.textContent = "Market on Friday";
document.querySelector("#outdated").replaceWith(current);
document.querySelector("#scratch").replaceChildren();
```

## Try the preview

Run the preview: the expired item is gone, Market on Friday occupies the outdated item’s place, and the scratch list is empty. Temporarily add a child to `#scratch` in HTML, rerun, and watch it disappear.

## Remember

You have made and positioned nodes; now you can remove them. Replacing a single child preserves its neighbours, whereas clearing a parent removes every child.

The following exercise uses the same idea in a different setting.
