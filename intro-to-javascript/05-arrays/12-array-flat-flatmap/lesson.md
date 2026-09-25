---
title: Array Flat and FlatMap
slug: array-flat-flatmap
order: 12
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use flat() to collapse one level of nested arrays."
  - "Use flatMap() with split(' ') to turn phrases into words."
summary: Practice array flat and flatmap with a focused Starline Awards programming mission.
seo_title: Array Flat and FlatMap | Introduction to JavaScript
seo_description: Learn array flat and flatmap through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array flat and flatmap, beginner javascript, programming practice
---

# Array Flat and FlatMap

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Some arrays contain arrays, and sometimes each string needs to turn into multiple pieces. flat() and flatMap() help with those two related problems.

## Example

```javascript
const supplyBins = [["paper", "pens"], ["tape"]];
const sessions = ["morning workshop", "evening lab"];
console.log(supplyBins.flat());
console.log(sessions.flatMap((session) => session.split(" ")));
```

## Your Task

1. Create flatNumbers from [[1, 2], [3, 4]] using flat().
2. Create splitWords with flatMap() and display [1,2,3,4] | ["hello","world","js"] in #output.
