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

# Object key-value pairs

A producer profile needs a name, a role, and a city. An array could hold all three, but you would have to remember which position means what. An object gives each value a name.

```javascript run
const person = {
  name: "Mina",
  role: "Producer",
  city: "Seoul"
};
console.log(`${person.name} is a ${person.role} from ${person.city}.`);
```

The braces enclose the object. Each **property** pairs a key on the left of `:` with a value on the right; commas separate properties. Here all three values are strings, but an object can also hold numbers, booleans, arrays, or other objects.

`person.name` reads the property whose key is `name`. It produces `"Mina"`, not the word `"name"`. A missing property, such as `person.age`, produces `undefined`.

The backticks build a message: `${person.name}` inserts that property's value into the text. The strings section explains this output style in more detail.

Run the example and locate each property in the resulting sentence. In the next lesson, you will create a student record and change one of its values.
