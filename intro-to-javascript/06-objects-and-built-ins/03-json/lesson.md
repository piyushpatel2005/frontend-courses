---
title: JSON
slug: json
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `JSON.stringify(obj)` to convert an object to a JSON string."
  - "Use `JSON.parse(str)` to convert a JSON string back to an object."
  - "JSON.stringify accepts a second argument (replacer) and third (indent spaces)."
---

# JSON

**JSON** (JavaScript Object Notation) is the standard format for exchanging data between systems — APIs, config files, local storage. It looks like a JavaScript object literal but with stricter rules.

## JSON rules

- All **keys** must be quoted with double quotes.
- Values can be: string, number, boolean, null, array, or object.
- No functions, `undefined`, or comments.

```json
{
    "name": "Alice",
    "age": 30,
    "skills": ["JavaScript", "HTML"],
    "address": { "city": "London" }
}
```

## `JSON.stringify()` — object → string

```javascript
const user = { name: "Alice", age: 30 };
const json = JSON.stringify(user);
console.log(json);            // '{"name":"Alice","age":30}'
console.log(typeof json);     // "string"

// Pretty-print with 2-space indent
JSON.stringify(user, null, 2);
```

## `JSON.parse()` — string → object

```javascript
const data = '{"name":"Bob","score":95}';
const obj = JSON.parse(data);
console.log(obj.name);  // "Bob"
console.log(obj.score); // 95
```

## Your Task

1. Given the object `user = { name: "Sam", level: 5, active: true }`, serialize it to a JSON string and store in `userJson`.
2. Parse the string `apiResponse = '{"status":"ok","count":42}'` and store the result in `parsed`.
3. Write a function `deepClone(obj)` that uses JSON serialization to create a deep copy of an object.
4. Display in `#output`: `"Sam is level 5 | status: ok, count: 42"`.
