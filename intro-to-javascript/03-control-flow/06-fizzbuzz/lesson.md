---
title: "FizzBuzz"
slug: fizzbuzz
order: 6
language: javascript
lesson_type: coding
summary: "Return the FizzBuzz label for each rule with independent supplied probes."
seo_title: "Challenge: FizzBuzz Announcer | Introduction to JavaScript"
seo_description: "Return the FizzBuzz label for each rule with independent supplied probes."
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Complete one branch in the supplied function, then check its labeled probe.
---


The preceding carton demo checked the combined case before the individual cases. Apply that branch order to one number at a time in `fizzBuzz(number)`. `%` returns the remainder, so `number % 15 === 0` detects a multiple of both 3 and 5. Use `return` to send a value back from the function. The supplied logs display the calls in `script.js`.

## Worked example

Before building FizzBuzz, trace a smaller rule that checks the special case first:

```javascript run
function signal(value) {
  if (value % 4 === 0) return "Quad";
  return "Ordinary";
}
console.log(signal(8));
```

The inputs in this exercise are positive whole numbers. `=== 0` checks that the remainder is exactly zero. A `return` ends the call, so testing 3 before 15 would send 15 down the wrong path before the combined rule could run.

The probes are supplied. Add one branch at a time and Run; the first completed line is `Both`, followed by `Threes`, `Fives`, and `Ordinary`. Leave the unfinished fallback as `undefined` until task 4. You do not need an array method or a loop to test these individual calls.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Return `"FizzBuzz"` for multiples of 15 before checking the individual divisors. The `Both` probe should show `FizzBuzz,FizzBuzz`.
2. Add the multiple-of-3 branch returning `"Fizz"`. The `Threes` probe should show `Fizz,Fizz`.
3. Add the multiple-of-5 branch returning `"Buzz"`. The `Fives` probe should show `Buzz,Buzz`.
4. Replace the fallback with the original `number`. The `Ordinary` probe should show `2,7`.
