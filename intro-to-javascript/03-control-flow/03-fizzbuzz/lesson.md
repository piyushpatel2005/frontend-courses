---
title: "Challenge: FizzBuzz Announcer"
slug: fizzbuzz
order: 3
language: javascript
lesson_type: coding
summary: Solve a practical JavaScript programming challenge using the preceding worked demo.
seo_title: "Challenge: FizzBuzz Announcer | Introduction to JavaScript"
seo_description: Practice JavaScript with a focused, testable programming challenge.
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start with the smallest function signature, then test one case at a time.
---

# Challenge: FizzBuzz Announcer

The preceding carton demo checked the combined case before the individual cases. Apply that branch order to one number at a time in `fizzBuzz(number)`. `%` returns the remainder, so `number % 15 === 0` detects a multiple of both 3 and 5. Use `return` to send a value back from the function, then log calls in `script.js`.

## Worked example

Before building FizzBuzz, trace a smaller rule that checks the special case first:

```javascript
function signal(value) {
  if (value % 4 === 0) return "Quad";
  return "Ordinary";
}
console.log(signal(8)); // Quad
```

## Your Tasks

1. Implement `fizzBuzz(number)` to return `"FizzBuzz"` for multiples of 15, `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 5, and the original number otherwise. The provided `Ordinary 2` probe should print `Ordinary 2: 2`.
2. Log `Multiples: Fizz,Buzz,FizzBuzz` from calls with 3, 5, and 15.
3. Log `Ordinary 7: 7` from `fizzBuzz(7)`.
4. Log `FizzBuzz` on its own line from `fizzBuzz(15)`.

## Checkpoint

Run after each change; the Console should show each requested line on its own.
