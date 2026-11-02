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
summary: "A recursive call asks the same function to solve a smaller input. The original call pauses until that smaller call returns. A stopping rule, or base case, must return without making another recursive call."
seo_title: Recursion | Introduction to JavaScript
seo_description: "A recursive call asks the same function to solve a smaller input. The original call pauses until that smaller call returns. A stopping rule, or base case, must return without making another recursive call."
seo_keywords: javascript, recursion, beginner javascript, programming practice
---

# Recursion

A recursive call asks the same function to solve a smaller input. The original call pauses until that smaller call returns. A stopping rule, or base case, must return without making another recursive call.

Start with the sum example below. `sum([2, 3])` waits for `2 + sum([3])`; that call waits for `3 + sum([])`. The empty array returns 0, then the waiting calls return 3 and 5. These unfinished calls occupy the call stack. Missing the base case, or failing to move toward it, keeps adding calls until the stack overflows.

For `power`, the supported exponents are nonnegative integers. Each recursive call reduces the exponent by one. For `flatten`, the input is a finite nested array without circular references. Visit each element; if `Array.isArray(item)` is true, flatten that smaller array, otherwise keep the plain value. `concat` returns a new array with the supplied values appended. An empty input has no elements to visit and returns `[]`.


![sum([2, 3]) waits for sum([3]), which waits for sum([]); returns unwind from 0 to 3 to 5.](recursive-sum-call-stack.svg)

## Trace a smaller input

```javascript run
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([2, 3]));
```

This trace favors clarity over efficiency: each `slice(1)` copies the remaining entries, so the total copying grows quadratically with the list length. An iterative sum avoids those copies and deep call stacks. `slice(1)` returns a new array without the first item, so the input gets shorter on each call. Your power function reduces an exponent instead; your flatten function descends into nested arrays.

Edit `script.js`, Run the checkpoints, then Submit after each task.

## Your Tasks

1. Implement recursive `power(base, exp)` for nonnegative integer exponents, returning 1 when `exp` is zero.
2. Implement recursive `flatten(arr)` for finite nested arrays; an empty input returns `[]`.
3. Log `2^10 = 1024 | flatten: 1,2,3,4,5` using calls to your functions.
