---
title: "Function Inputs And Results"
slug: function-inputs-and-results
order: 3
language: javascript
lesson_type: coding
summary: Write a small reusable calculation before adding branches to supplied functions.
seo_title: Function inputs and results | Introduction to JavaScript
seo_description: Write a small reusable calculation before adding branches to supplied functions.
seo_keywords: [javascript, function inputs and results, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---

# Function inputs and results

The next lesson puts decisions inside reusable functions. Write a small calculation first so its punctuation does not compete with the branch rules.

```javascript run
function totalMinutes(sessions, minutesEach) {
  return sessions * minutesEach;
}
const duration = totalMinutes(3, 20);
console.log(duration);
console.log(totalMinutes(2, 15));
```

`function` declares the function named `totalMinutes`. The parentheses name two **parameters**; commas separate them. The braces contain its body. Declaring it does not run the body. A call such as `totalMinutes(3, 20)` supplies two **arguments**, in matching order. Each call gets its own parameter values.

`return` sends one value back and ends that call. It does not print. `console.log()` displays the returned value. Keep the return expression on the same line as `return`; a newline immediately after the keyword can return `undefined` instead.

For the exercise, all quantities and fees are nonnegative numbers. Use the supplied function declaration rather than adding another function with the same name. The later Functions section explores scope, alternate function syntax, and remembered state.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Complete `supplyCost(count, unitCost, delivery)` to return their product plus delivery.
2. Set `orderCost` by calling `supplyCost(4, 5, 2)`.
