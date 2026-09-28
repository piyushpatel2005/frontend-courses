---
title: Compare DOM properties, HTML attributes, and node types
slug: properties-attributes-and-node-types
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: See how a live input property differs from its original HTML attribute and identify element and text nodes.
seo_title: DOM properties, HTML attributes, and node types | Beginner JavaScript DOM
seo_description: Compare a live input value with its HTML attribute and inspect element and text node types in a browser preview.
seo_keywords:
- JavaScript DOM
- DOM properties
- HTML attributes
- nodeType
---

A seed desk has an input whose HTML starts with `value="Tomato"`. The `value` **property** describes the input's current value; the `value` **attribute** records the default written in the markup. Changing `input.value` to **Basil** updates what you see in the input but does not rewrite that attribute. If a visitor types a new value, the property changes again. Not every property and attribute behaves this way; this is a useful example, not a universal rule.

The DOM tree also contains more than elements. The `<span>` below contains a text node. An element's `nodeType` is `1`; a text node's is `3`. `firstChild` reaches the text node here, while `children` would include only elements.

```javascript
const seed = document.getElementById("seed-name");
seed.value = "Basil";
const label = document.getElementById("seed-label");
const text = label.firstChild;
document.getElementById("current-value").textContent = seed.value;
document.getElementById("original-value").textContent = seed.getAttribute("value");
document.getElementById("node-kinds").textContent = `${label.nodeType} / ${text.nodeType}`;
```

Run: the input and current-value line show **Basil**, the original-value line stays **Tomato**, and the node kinds read **1 / 3**. Change `seed.value` to another seed in `script.js` and run again, then restore it. Notice that changing the input by typing does not automatically refresh the separate display; this script runs on page load, before that later edit. Next you will report the same differences for a different page.
