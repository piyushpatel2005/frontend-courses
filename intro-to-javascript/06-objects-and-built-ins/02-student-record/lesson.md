---
title: Student Course Record
slug: student-record
order: 2
language: javascript
lesson_type: coding
summary: Build a student record object from explicit key-value pairs and update one property.
seo_title: Student Course Record Objects | Introduction to JavaScript
seo_description: Practice creating and updating a JavaScript object with explicit student-record key-value pairs.
seo_keywords: javascript objects, key value pairs, student record, object properties
hints:
  - "Write each key, a colon, and its value: name: \"Riley\"."
  - "Use student.score = 92 to replace the original score."
---

# Student course record

A coordinator records Riley's course and score. When Riley improves, update the score inside the existing object rather than creating a second record.

```javascript
const exhibit = { title: "Fossils", visitors: 6 };
exhibit.visitors = 7;
console.log(exhibit.title, exhibit.visitors); // Fossils 7
```

Dot notation reads a property; an assignment to that property replaces its value. Assigning to a new key adds a property. `const` stops you from replacing the whole object with another value, but it does not freeze the object's properties.

The starter already declares `student` and prints three `CHECK` lines. Fill in the object and make each change at its comment, before the corresponding check. Leave those checks in place. Their supplied `try`/`catch` blocks show `pending` if a check cannot run yet; you do not need to write error-handling code here. Edit `script.js`, Run to inspect progress, then Submit to check the tasks.

## Your Tasks

1. Fill `student` with `name: "Riley"`, `course: "JavaScript"`, and `score: 88`.
2. Update `student.score` to `92` with dot notation.
3. Add `student.status` with the value `"enrolled"`.
4. Log `Riley | JavaScript | 92 | enrolled` on its own Console line using the record's properties.

After step 1, only the first check should pass. The final summary belongs after both property changes, so it shows the updated record.
