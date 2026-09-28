---
title: "Challenge: Number Guess Referee"
slug: number-guess
order: 11
language: javascript
lesson_type: coding
summary: Solve a practical JavaScript programming challenge using the preceding worked demo.
seo_title: "Challenge: Number Guess Referee | Introduction to JavaScript"
seo_description: Practice JavaScript with a focused, testable programming challenge.
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start with the smallest function signature, then test one case at a time.
---

# Challenge: Number Guess Referee

The ticket-scan demo stopped at the first matching ID. Apply the same search to guesses in `findGuess(secret, guesses)`, returning a match message immediately. If the loop ends without a match, return `"No match"`. Keep all work in `script.js` and log each checkpoint separately.

## Worked example

A loop can return as soon as it finds the first matching item:

```javascript
function firstEven(values) {
  for (const value of values) {
    if (value % 2 === 0) return value;
  }
  return null;
}
console.log(firstEven([3, 8, 10])); // 8
```

## Your Tasks

1. Implement `findGuess(secret, guesses)` to return `"Correct: <number>"` on the first match or `"No match"` if none matches. The provided first-guess probe should print `First guess: Correct: 2`.
2. Log `Match: Correct: 7` from `(7, [3,9,7,7])`.
3. Log `Missing: No match` from `(7, [1,2,3])`.
4. Log `Correct: 7` alone from `(7, [3,9,7])`.

## Checkpoint

Run after each change; the Console should show four separate checkpoint lines.
