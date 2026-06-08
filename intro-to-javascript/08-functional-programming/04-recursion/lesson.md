---
title: Recursion
slug: recursion
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Every recursive function needs a base case that stops the recursion."
  - "Factorial: `factorial(n) = n * factorial(n - 1)`, base case `n <= 1`."
  - "Fibonacci: `fib(n) = fib(n-1) + fib(n-2)`, base cases `n === 0` and `n === 1`."
---

# Recursion

**Recursion** is when a function calls itself to solve a smaller version of the same problem. Every recursive solution needs:

1. **Base case** — the simplest input that can be answered directly (stops the recursion).
2. **Recursive case** — breaks the problem into a smaller sub-problem.

## Factorial

```javascript
function factorial(n) {
    if (n <= 1) return 1;          // base case
    return n * factorial(n - 1);  // recursive case
}

factorial(5); // 5 * 4 * 3 * 2 * 1 = 120
```

## Fibonacci

```javascript
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

fib(10); // 55
```

## Recursive sum

```javascript
function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}
```

## Flatten a nested array

```javascript
function flatten(arr) {
    return arr.reduce((flat, item) =>
        Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item),
    []);
}

flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4]
```

## Your Task

1. Write a recursive function `power(base, exp)` that returns `base` raised to the power `exp` (without using `Math.pow`). Base case: `exp === 0` → return `1`.
2. Write a recursive function `flatten(arr)` that deeply flattens a nested array.
3. Display in `#output`: `"2^10 = 1024 | flatten: 1,2,3,4,5"`.
