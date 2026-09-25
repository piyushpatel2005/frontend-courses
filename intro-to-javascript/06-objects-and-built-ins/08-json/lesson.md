---
title: JSON
slug: json
order: 8
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `JSON.stringify(obj)` to convert an object to a JSON string."
  - "Use `JSON.parse(str)` to convert a JSON string back to an object."
  - "JSON.stringify accepts a second argument (replacer) and third (indent spaces)."
summary: Practice json with a focused Starline Awards programming mission.
seo_title: JSON | Introduction to JavaScript
seo_description: Learn json through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, json, beginner javascript, programming practice
---

# JSON

## Mission: Artist Profile Lab

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you model an artist profile and use JavaScript's built-in tools to keep it current. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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
const recipe = { dish: "Soup", servings: 4 };
const recipeText = JSON.stringify(recipe);
const weather = JSON.parse("{\"condition\":\"clear\",\"temp\":19}");
console.log(recipeText, weather.condition);
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
4. log with `console.log()`: `"Sam is level 5 | status: ok, count: 42"`.
