---
title: Break and Continue
slug: break-continue
order: 9
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `break` to exit the loop immediately when the condition is met."
  - "Use `continue` to skip the current iteration and move to the next."
  - "`continue` is useful for filtering values while looping."
summary: "Stop a search with break and skip non-positive values with continue."
seo_title: Break and Continue | Introduction to JavaScript
seo_description: "Stop a search with break and skip non-positive values with continue."
seo_keywords: javascript, break and continue, beginner javascript, programming practice
---

# Break and Continue


A list scan can stop at the first match or skip entries that should not be collected.

Two statements change a loop while it runs: `break` exits the loop, while `continue` skips only the current iteration. The task uses an array as an input list and a new array as output; use `result.push(value)` to collect accepted numbers. When none is found, return `null` rather than a made-up number.

## `break` — exit the loop early

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0 1 2 3 4
}
```

Useful when you have found what you were looking for and don't need to continue.

## `continue` — skip to the next iteration

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0 1 3 4
}
```

For the search, start a result variable at `null`, meaning “no result.” When you find a negative value, save it and break. Return the saved result after the loop. Without the break, a later negative could replace the first one.

For the filter, start with an empty result array. Place the `continue` check before `push`, so skipped values never enter the result. Zero is not positive: use a condition that excludes it along with negative numbers.

These actions leave the function at different points. `break` ends only the loop, so the return below it still runs. `continue` skips the rest of one iteration, then the loop moves to its next value.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Implement `firstNegative(numbers)` with `break`, returning the first negative value or `null` if there is none. The supplied `First cases` line should show `-2,null,null`.
2. Implement `positiveOnly(numbers)` with `continue` to skip zero and negative values. Return a new list; the supplied `Positive cases` line should show `3,8 | [] | []`.
3. Log `First negative: -5 | Positives: 3,8` by calling both functions on `[-5,3,-2,8,-1]`.
