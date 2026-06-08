---
title: Array Flat and FlatMap
slug: array-flat-flatmap
order: 11
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use flat() to collapse one level of nested arrays."
  - "Use flatMap() with split(' ') to turn phrases into words."
---

# Array Flat and FlatMap

Some arrays contain arrays, and sometimes each string needs to turn into multiple pieces. flat() and flatMap() help with those two related problems.

## Example

```javascript
const nested = [[1, 2], [3, 4]];
const flatNumbers = nested.flat();
const words = ['hello world', 'js'].flatMap((item) => item.split(' '));
```

## Your Task

1. Create flatNumbers from [[1, 2], [3, 4]] using flat().
2. Create splitWords with flatMap() and display [1,2,3,4] | ["hello","world","js"] in #output.
