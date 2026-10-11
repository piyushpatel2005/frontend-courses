---
title: "Demo: Student Register with map"
slug: register-pipeline
order: 4
language: javascript
lesson_type: interactive
summary: "A course register should show active students only. The first callback receives a student object and returns its `active` flag. The second receives each retained object and returns a label. `join(\" | \")` combines those labels into one string; it does not decide which students belong in the register."
seo_title: "Demo: Student Register with map | Introduction to JavaScript"
seo_description: "A course register should show active students only. The first callback receives a student object and returns its `active` flag. The second receives each retained object and returns a label. `join(\" | \")` combines those labels into one string; it does not decide which students belong in the register."
seo_keywords: javascript, interactive demo, practical programming
---

# Demo: Student Register with map

A course register should show active students only. The first callback receives a student object and returns its `active` flag. The second receives each retained object and returns a label. `join(" | ")` combines those labels into one string; it does not decide which students belong in the register.

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

Run the example and check `Ari: JavaScript`. Bea is removed by the filter before the label callback runs. Next, supply a larger register and write a reusable transformation.
