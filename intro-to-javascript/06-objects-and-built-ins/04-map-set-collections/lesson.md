---
title: Map and Set Collections
slug: map-set-collections
order: 4
language: javascript
lesson_type: interactive
summary: Learn when keyed Map data and unique Set values fit better than arrays or plain objects.
seo_title: Map and Set Collections | Introduction to JavaScript
seo_description: Run a focused JavaScript walkthrough of Map key-value entries and Set uniqueness.
seo_keywords: javascript map, javascript set, keyed collections, unique values
---

# Map and Set Collections

A plain object is useful for a fixed profile. Use a **Map** when the important operation is looking up a value by a key, and use a **Set** when each value should appear only once.

```javascript run
const badgeByRole = new Map([
  ["host", "gold"],
  ["producer", "silver"]
]);
const citiesOnTour = new Set(["Seoul", "Lisbon", "Seoul"]);

console.log(badgeByRole.get("producer"));
console.log(citiesOnTour.size);
```

## Checkpoint

The Map stores explicit key-value entries. The Set kept only two cities even though `"Seoul"` appeared twice. The next lesson uses these collections for a different task: a playlist lookup and artist roster.

## Learn more

MDN's references for [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) explain their methods and iteration behavior.