---
title: Object Key-Value Pairs
slug: object-key-value-pairs
order: 1
language: javascript
lesson_type: interactive
summary: See how JavaScript objects store named key-value pairs before building a student record.
seo_title: Object Key-Value Pairs | Introduction to JavaScript
seo_description: Learn how JavaScript objects pair property keys with values through a runnable example.
seo_keywords: javascript objects, key value pairs, object properties, beginner javascript
---

# Object Key-Value Pairs

## Mission: Artist Profile Lab

The Starline Awards team needs a compact profile for a producer. An object keeps related facts together without relying on the position of each value.

An object uses a **key** on the left and its **value** on the right:

```javascript
const person = {
  name: "Mina",
  role: "Producer",
  city: "Seoul"
};
```

Here, `name`, `role`, and `city` are keys. Their paired values are strings. A colon connects each key to its value, and commas separate the pairs.

```javascript run
const person = {
  name: "Mina",
  role: "Producer",
  city: "Seoul"
};

console.log(`${person.name} is a ${person.role} from ${person.city}.`);
```

## Checkpoint

Run the code. Dot notation, such as `person.name`, reads the value paired with the `name` key. The next lesson uses the same structure for a different problem: a student course record.
