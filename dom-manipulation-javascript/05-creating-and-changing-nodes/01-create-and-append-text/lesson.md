---
title: Create and Append a Text Node
slug: create-and-append-text
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Create a new list item with createElement, give it safe text, and append it to a parent.
seo_title: Create and Append a Text Node | DOM Manipulation with JavaScript
seo_description: See how createElement, textContent and append build a safe new DOM node in a beginner JavaScript
  example.
seo_keywords:
- createElement demo
- append child
- textContent safe text
---

# Create and Append a Text Node

A community garden needs one more item on its supply board. The page already has a list; JavaScript will add a new row after the browser loads.

## How it works

`document.createElement("li")` makes a detached element: it is not visible yet. Assigning `textContent` makes the string plain text, even when it contains characters that look like HTML. `list.append(item)` moves that element into the list as its last child. The script uses `defer` so the existing list is available when these lines run.

```javascript
const item = document.createElement("li");
item.textContent = "Watering cans";
document.querySelector("#supplies").append(item);
```

## Try the preview

Run the preview: Watering cans should appear after Gloves. Change the string to `"<b>Watering cans</b>"` temporarily; you should see the angle brackets, not bold text. Restore the original label before moving on.

## Remember

You previously used selectors to find an existing element and `textContent` to update it. Here the new step is creating an element *before* attaching it to the selected parent.

The following exercise uses the same idea in a different setting.
