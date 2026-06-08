---
title: Closures
slug: closures
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Return an inner function that updates count each time it runs."
  - "Call the returned function three times and join the results with |."
---

# Closures

A closure lets an inner function remember the variables around it. A counter is the clearest beginner example because each call proves the function kept its previous state.

## Example

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
```

## Your Task

1. Write makeCounter() so it returns a function that increases and returns a private count value.
2. Display 1 | 2 | 3 in #output by calling the same counter three times.
