---
title: "Properties Attributes And Node Types Practice"
slug: properties-attributes-and-node-types-practice
order: 11
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Change an input's current value while preserving its HTML default, then report element and text node types.
seo_title: 'Exercise: DOM properties, attributes, and node types | Beginner JavaScript DOM'
seo_description: Practice reading a live input property, its original value attribute, and the node types of an element and its text child.
seo_keywords:
- DOM property exercise
- HTML value attribute
- input value
- element and text node types
---

A library meeting has moved from **West room** to **East room**. Update the input's current value, then report it alongside the original HTML default. Finish by inspecting the room-sign element and its text child.

## Use the supplied page

Open `index.html` to find the input and the report fields. The input has `id="room-input"` and `value="West room"`. Leave that markup unchanged and work in `script.js`.

Select the input once and keep its reference in a variable. As in the seed-desk demo, `.value` reads or changes the current value, while `.getAttribute("value")` reads the markup default. Use `textContent` to put each value into its report field.

The span with `id="room-label"` contains `Room sign` directly. Its `nodeType` and `firstChild.nodeType` should produce `1 / 3`. You can build that text with a template literal, as in the demo, or by joining the two values with the string `" / "`.

Run after each task. First the input changes, then each report line replaces its **Pending** text. Submit checks the four outcomes in the same order.

## Your Tasks

1. Set the `value` property of the `#room-input` element to `East room`. The supplied HTML `value` attribute stays `West room`; do not edit the markup.
2. Display the input's current `value` property in `#current-room`.
3. Read the input's original `value` attribute with `getAttribute` and display it in `#default-room`.
4. Display the `nodeType` of `#room-label` and the `nodeType` of its `firstChild` in `#room-node-types` as `1 / 3`.

You can now follow a document reference, select a specific element, and read its properties. The module quiz checks those distinctions before you work with groups of elements.
