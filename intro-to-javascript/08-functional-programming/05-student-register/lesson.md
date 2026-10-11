---
title: "Challenge: Student Register"
slug: student-register
order: 5
language: javascript
lesson_type: coding
summary: "Build a register from student records. Keep the `name`, `course`, and `active` keys shown in the preceding demo: the transformation reads those exact keys."
seo_title: "Challenge: Student Register | Introduction to JavaScript"
seo_description: "Build a register from student records. Keep the `name`, `course`, and `active` keys shown in the preceding demo: the transformation reads those exact keys."
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start with the smallest function signature, then test one case at a time.
---

# Challenge: Student Register

Build a register from student records. Keep the `name`, `course`, and `active` keys shown in the preceding demo: the transformation reads those exact keys.

First supply the records. Then implement `activeRegister(records)` so it uses its parameter rather than always reading the outer `students` variable. This makes the function reusable for another class list. Return an array of labels; the supplied probe joins them only for display.

## Worked example

A different register combines a filter with a map:

```javascript
const books = [{ title: "Atlas", ready: true }, { title: "Drift", ready: false }];
const readyTitles = books.filter(book => book.ready).map(book => book.title);
console.log(readyTitles.join(", ")); // Atlas
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Fill `students` with Ari (JavaScript, active), Bea (CSS, inactive), and Chen (JavaScript, active), using the keys `name`, `course`, and `active`.
2. Return active records as `"Name: Course"` strings from `activeRegister(records)`, using `filter` followed by `map`.
3. Log the joined register as the standalone line `Ari: JavaScript | Chen: JavaScript`.

## Checkpoint

Run your code after each small change. The Console shows supplied CHECK lines as you work and a separate joined register when you finish task 3.
