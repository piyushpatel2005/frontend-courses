---
title: "Demo: Student Register with map"
slug: register-pipeline
order: 4
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript demo before attempting the related practical challenge.
seo_title: "Demo: Student Register with map | Introduction to JavaScript"
seo_description: Inspect a runnable JavaScript demonstration before the practical coding challenge.
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Student Register with map

This is the worked run before your practical challenge. `filter` selects active records and `map` converts each selected record into a display-ready entry.

```javascript run
const students = [
  { name: "Ari", course: "JavaScript", active: true },
  { name: "Bea", course: "CSS", active: false }
];

const register = students
  .filter((student) => student.active)
  .map((student) => `${student.name}: ${student.course}`);

console.log(register.join(" | "));
```

## What to notice

Run the example once, then trace the first two steps by hand. The next lesson gives you the same idea with a fresh problem to solve.
