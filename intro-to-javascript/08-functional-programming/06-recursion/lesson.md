---
title: Recursion
slug: recursion
order: 6
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Every recursive function needs a base case that stops the recursion."
  - "For power, return 1 when exp is zero; otherwise multiply by power(base, exp - 1)."
  - "For flatten, visit each item; recurse into arrays and keep ordinary values."
summary: Practice recursion with a focused Starline Awards programming mission.
seo_title: Recursion | Introduction to JavaScript
seo_description: Learn recursion through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, recursion, beginner javascript, programming practice
---

# Recursion

Some data nests inside more data. In `script.js`, write functions that solve a smaller version of the problem until they reach a stopping case; inspect the Console to check each result.

**Recursion** is when a function calls itself to solve a smaller version of the same problem. Every recursive solution needs:

1. **Base case** — the simplest input that can be answered directly (stops the recursion).
2. **Recursive case** — breaks the problem into a smaller sub-problem.

## A base case in a nested structure

```javascript
function countBoxes(box) {
  if (!box.children) return 1;
  return 1 + box.children.reduce((total, child) => total + countBoxes(child), 0);
}

console.log(countBoxes({ children: [{}, { children: [{}] }] }));
```

The object with no `children` stops the calls; each parent counts itself and its children. For a simpler linear example, a sum removes one item at a time:

```javascript
function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}
```

For `power(base, exp)`, stop at exponent `0`; otherwise multiply by the result for `exp - 1`. For `flatten(arr)`, walk each item: recurse only when that item is an array, and append plain values to the result. An empty array returns an empty result. These are the two distinct base cases you will need below.

## Your Tasks

1. Complete recursive `power(base, exp)` for nonnegative integer exponents; exponent zero returns 1.
2. Complete recursive `flatten(arr)` to return a flat array, including for empty input.
3. Log the standalone combined result `2^10 = 1024 | flatten: 1,2,3,4,5`.
