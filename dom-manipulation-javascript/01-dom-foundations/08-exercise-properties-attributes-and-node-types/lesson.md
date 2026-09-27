---
title: 'Exercise: inspect a room input and its nodes'
slug: exercise-properties-attributes-and-node-types
order: 8
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

At the seed desk, setting the input's `value` property changed its current value without changing the HTML default, and `nodeType` distinguished a label element from its text child. Now prepare a room sign for a library meeting. Its input starts with `value="West room"`, but the current assignment is **East room**.

For another setting, a park kiosk could read the markup default and a text child like this:

```javascript
const route = document.getElementById("park-route");
const title = document.getElementById("route-title");
const defaultRoute = route.getAttribute("value");
const headingKind = title.nodeType;
const wordsKind = title.firstChild.nodeType;
```

Edit only `script.js`. Set the room input's current `value` property to **East room** and show that property in `#current-room`. Read the untouched `value` attribute into `#default-room`. Finally, report `#room-label`'s node type and its text child's node type in `#room-node-types` as `1 / 3`. Run the preview before submitting: the input changes, but its original HTML attribute remains **West room**.

## Your Tasks

1. Set `#room-input.value` to `East room` and display the current property value in `#current-room`, leaving its HTML `value` attribute as `West room`.
2. Read the input's `value` attribute with `getAttribute` and display it in `#default-room`.
3. Display `#room-label.nodeType` and its `firstChild.nodeType` in `#room-node-types` as `1 / 3`.
