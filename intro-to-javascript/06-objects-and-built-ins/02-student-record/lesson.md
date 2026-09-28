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

# Student Course Record

## Mission: Artist Profile Lab

A course coordinator needs one clear record for a learner. You will build that record from key-value pairs, then update a value when the student improves.

In an object, the **key** names a fact and the **value** stores that fact. For example, `course: "JavaScript"` pairs the key `course` with the string value `"JavaScript"`.

The interactive walkthrough used a producer profile. This exercise uses a different perspective: a student course record.

## Worked example

An object groups facts under named keys; dot notation updates one fact:

```javascript
const exhibit = { title: "Fossils", visitors: 6 };
exhibit.visitors = 7;
console.log(exhibit.title, exhibit.visitors); // Fossils 7
```

## Your Tasks

1. Create a `student` object with `name: "Riley"`, `course: "JavaScript"`, and `score: 88`.
2. Update `student.score` to `92` with dot notation.
3. Add `student.status` with the value `"enrolled"`.
4. Log `Riley | JavaScript | 92 | enrolled` on its own Console line.

## Checkpoint

Run the script. You should see one line in the Console containing Riley's updated record. The next lesson builds on the same key-value idea with object methods.
