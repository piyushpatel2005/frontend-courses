---
title: "Number Guess"
slug: number-guess
order: 14
language: javascript
lesson_type: coding
summary: "Search guesses for a match and return a fallback only after the scan."
seo_title: "Challenge: Number Guess Referee | Introduction to JavaScript"
seo_description: "Search guesses for a match and return a fallback only after the scan."
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Keep the no-match return after the entire loop, so later guesses get a turn.
---

# Challenge: Number Guess Referee

The ticket-scan demo stopped at the first matching ID. Apply the same search to guesses in `findGuess(secret, guesses)`, returning a match message immediately. If the loop ends without a match, return `"No match"`. Keep all work in `script.js`; the supplied logs display the checkpoints.

## Worked example

A loop can return as soon as it finds the first matching item:

```javascript run
function firstEven(values) {
  for (const value of values) {
    if (value % 2 === 0) return value;
  }
  return null;
}
console.log(firstEven([3, 8, 10]));
```

The function has two inputs separated by a comma: one secret number and a list of guesses. On each pass, `guess` holds one entry from that list. Compare it with `secret` using `===`.

Put the failure return after the loop, not in an `else` attached to the first comparison. A wrong first guess does not mean every later guess is wrong. A successful `return` exits the whole function, so it already stops the loop; no separate `break` is needed.

The first probe tries different secrets and match positions. The second checks both an unsuccessful scan and an empty list, where the loop never starts.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Add a loop that returns `Correct: <number>` immediately when a guess matches the secret. The supplied `Matches` line should show `Correct: 2 | Correct: 7 | Correct: 4`.
2. Replace the fallback after the loop with `"No match"`. Both the missing and empty-list probes should return it.
