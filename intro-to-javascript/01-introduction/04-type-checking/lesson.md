---
title: Type Checking
slug: type-checking
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use typeof for primitive values like strings."
  - "Use Array.isArray() when you specifically want to detect an array."
---

# Type Checking

Beginners quickly notice that typeof [] is not as useful as they expect. This lesson teaches the practical pair: typeof for primitives and Array.isArray() for arrays.

## Example

```javascript
console.log(typeof "hello");
console.log(Array.isArray([1, 2, 3]));
```

## Your Task

1. Create messageType from typeof 'hello' and isList from Array.isArray([1, 2, 3]).
2. Display string | true in #output.
