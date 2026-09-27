---
title: For Loops
slug: for-loops
order: 7
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "A standard for loop: `for (let i = 0; i < arr.length; i++)`."
  - "Use `for...of` to iterate values directly: `for (const item of arr)`."
  - "Accumulate a sum by adding each element to a total variable."
summary: Practice for loops with a focused Starline Awards programming mission.
seo_title: For Loops | Introduction to JavaScript
seo_description: Learn for loops through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, for loops, beginner javascript, programming practice
---

# For Loops

## Mission: Decision Desk

A loop can visit each value in a list, adding to a total or collecting a new order.

Loops let you repeat a block of code. An array such as `[2, 4, 6]` is an ordered list; you will study arrays in depth later, but here you only need to visit its values. `numbers.length` counts entries, `numbers[i]` reads one entry (starting at index 0), and `result.push(value)` adds an entry to a new array. To log a list on one line, `result.join(",")` joins its values with commas.

## Traditional `for` loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // five separate lines: 0 through 4
}
```

Iterating an array:

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

## `for...of` — iterate values

Cleaner syntax when you only need the value, not the index:

```javascript
for (const fruit of fruits) {
    console.log(fruit);
}
```

The `fruits` list here is the same list from the preceding example. If you copy this block into a new script, declare `fruits` first.

For the reverse task, start at `arr.length - 1` (the last index), step backward with `i--`, and push each visited value into a new array. An empty array gives a sum of 0 because the loop runs zero times. Object-key iteration comes in the Objects module; it is not needed here.

## Your Tasks

1. Implement `sumArray(numbers)` with a `for` loop returning the sum (including negative numbers and empty arrays). The provided `Sum one` probe should print `Sum one: 2`.
2. Implement `reverseArray(arr)` with a `for` loop returning a new reversed array. The provided `Reverse one` probe should print `Reverse one: x`.
3. Log `Sums: 15,10,0` from `[1,2,3,4,5]`, `[10,-5,5]`, and `[]`.
4. Log `Reversals: 3,2,1 | c,b,a` from `[1,2,3]` and `["a","b","c"]`.
5. Log `Sum: 15` from `sumArray([1,2,3,4,5])`.
