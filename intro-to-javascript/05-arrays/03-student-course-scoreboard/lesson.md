---
title: "Student Course Scoreboard"
slug: student-course-scoreboard
order: 3
language: javascript
lesson_type: coding
summary: "Turn a course's scores into an average and a highest score. Your helpers should use the array passed to them, not always read the outer `scores` array."
seo_title: "Challenge: Student Course Scoreboard | Introduction to JavaScript"
seo_description: "Turn a course's scores into an average and a highest score. Your helpers should use the array passed to them, not always read the outer `scores` array."
seo_keywords: javascript, coding challenge, programming practice
hints:
  - Start the maximum at the first array value, not at zero.
---


Turn a course's scores into an average and a highest score. Your helpers should use the array passed to them, not always read the outer `scores` array.

For a different collection, this loop keeps the longest route seen so far:

```javascript run
const miles = [2, 6, 4];
let longest = miles[0];
for (const mile of miles) {
  if (mile > longest) longest = mile;
}
console.log(longest);
```

Starting from the first value makes the pattern work even for all-negative numbers. Starting from zero would invent a maximum that might not be in the list.

For the average, start a total at zero, add each value with `for...of`, then divide by `values.length`. Both helpers receive nonempty numeric arrays in this lesson, so there is always a first value and a nonzero length. Leave empty-list policy for a program that needs one.

Run the route example, then build your score helpers. The probes include shorter lists and negative values to catch assumptions about the demonstration's data.

## Your Tasks

1. Create `scores` containing `84`, `91`, and `76`.
2. Implement `courseAverage(values)` for a nonempty array: total every value, then divide by the array length.
3. Implement `topScore(values)` for a nonempty array. Start with its first value and keep the largest value seen.
4. Log `Average: 83.66666666666667 | Top: 91` using both helpers with `scores`.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
