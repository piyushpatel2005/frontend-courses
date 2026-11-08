---
title: "Scoreboard Pattern"
slug: scoreboard-pattern
order: 2
language: javascript
lesson_type: interactive
summary: "An array keeps related scores together. To find their average, add the values and divide by the number of values."
seo_title: "Student Scoreboard | Introduction to JavaScript"
seo_description: "An array keeps related scores together. To find their average, add the values and divide by the number of values."
seo_keywords: javascript, interactive demo, practical programming
---

# student scoreboard

An array keeps related scores together. To find their average, add the values and divide by the number of values.

```javascript run
const practiceScores = [72, 88, 80];
const total = practiceScores[0] + practiceScores[1] + practiceScores[2];
const average = total / practiceScores.length;
console.log(`Average: ${average}`);
```

Run the example: the average is 80. The sum above works for exactly three values. A loop handles a list whose length may change:

```javascript run
const practiceScores = [72, 88, 80];
let total = 0;
for (const score of practiceScores) {
  total += score;
}
console.log(`Average: ${total / practiceScores.length}`);
```

`for...of` gives `score` each array value in turn, not its index. Both blocks produce the same result, but the second keeps working if a fourth score is added. The next lesson asks you to put that calculation in a function so it works on different nonempty lists.
