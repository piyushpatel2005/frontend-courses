---
title: "Challenge: Student Register"
slug: student-register
order: 5
language: javascript
lesson_type: coding
summary: Solve a practical JavaScript programming challenge using the preceding worked demo.
seo_title: "Challenge: Student Register | Introduction to JavaScript"
seo_description: Practice JavaScript with a focused, testable programming challenge.
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start with the smallest function signature, then test one case at a time.
---

# Challenge: Student Register

You have seen the pattern in the demo. Now write the program yourself in `script.js`. Keep the focus on values, conditions, loops, arrays, or functions—not page elements.

## Worked example

A different register combines a filter with a map:

```javascript
const books = [{ title: "Atlas", ready: true }, { title: "Drift", ready: false }];
const readyTitles = books.filter(book => book.ready).map(book => book.title);
console.log(readyTitles.join(", ")); // Atlas
```

## Your Tasks

1. Replace the empty `students` array with Ari (JavaScript, active), Bea (CSS, inactive), and Chen (JavaScript, active) records.
2. Complete `activeRegister(records)` using `filter` and `map` to return active students as `"Name: Course"` strings.
3. Log the joined register as its own `Ari: JavaScript | Chen: JavaScript` line.

## Checkpoint

Run your code after each small change. The Console should show one clear summary once all checks pass.
