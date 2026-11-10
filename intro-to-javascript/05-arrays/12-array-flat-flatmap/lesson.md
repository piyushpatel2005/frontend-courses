---
title: "Array Flat Flatmap"
slug: array-flat-flatmap
order: 12
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use flat() to collapse one level of nested arrays."
  - "Use flatMap() with split(' ') to turn phrases into words."
summary: "Some setlist data arrives in groups. `flat()` returns a new array with one level of nested arrays removed. `flatMap()` first transforms each item, then flattens the results by one level."
seo_title: Array Flat and FlatMap | Introduction to JavaScript
seo_description: "Some setlist data arrives in groups. `flat()` returns a new array with one level of nested arrays removed. `flatMap()` first transforms each item, then flattens the results by one level."
seo_keywords: javascript, array flat and flatmap, beginner javascript, programming practice
---


Some setlist data arrives in groups. `flat()` returns a new array with one level of nested arrays removed. `flatMap()` first transforms each item, then flattens the results by one level.

```javascript run
const supplyBins = [
  ["paper", "pens"],
  ["tape"]
];
const sessions = [
  "morning workshop",
  "evening lab"
];
const groupedWords = sessions.map(
  session => session.split(" ")
);
const words = sessions.flatMap(
  session => session.split(" ")
);
console.log(JSON.stringify(supplyBins.flat()));
console.log(JSON.stringify(groupedWords));
console.log(JSON.stringify(words));
```

`split(" ")` is a string method: it cuts the string at each space and returns the pieces as an array. That gives `map()` an array for each phrase. `flatMap()` collects those pieces into one word list instead.

Run the example and compare the nested middle line with the flat last line. These methods leave the original outer arrays unchanged, but do not deep-copy nested data. Use phrases with single spaces in this exercise; text cleanup belongs in the strings section.

## Your Tasks

1. Set `flatNumbers` to `nested.flat()` to remove one level of nesting.
2. Set `splitWords` using `phrases.flatMap()` and `phrase.split(" ")` to collect the words.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
