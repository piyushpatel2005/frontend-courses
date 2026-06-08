---
title: Regular Expressions
slug: regular-expressions
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Test a pattern: `pattern.test(str)` returns true/false."
  - "Find matches: `str.match(pattern)` returns an array or null."
  - "Use flags: `g` for global, `i` for case-insensitive."
---

# Regular Expressions

A **regular expression** (regex) is a pattern that describes a set of strings. JavaScript has built-in regex support for searching, validating, and transforming strings.

## Creating a regex

```javascript
// Literal syntax (preferred)
const pattern = /hello/i;   // i = case-insensitive

// Constructor (for dynamic patterns)
const word = "hello";
const dynamic = new RegExp(word, "i");
```

## Common special characters

| Pattern | Meaning |
|---------|---------|
| `.` | Any character except newline |
| `\d` | Digit (0-9) |
| `\w` | Word character (letter, digit, `_`) |
| `\s` | Whitespace |
| `^` | Start of string |
| `$` | End of string |
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 |
| `{n,m}` | Between n and m |
| `[abc]` | Character class |
| `[^abc]` | Negated class |

## Key methods

```javascript
// test() — returns boolean
/^\d{5}$/.test("12345");  // true — zip code
/^\d{5}$/.test("1234");   // false

// match() — returns array of matches
"I have 3 cats and 12 dogs".match(/\d+/g); // ["3", "12"]

// replace() — string substitution
"hello world".replace(/\b\w/g, c => c.toUpperCase()); // "Hello World"

// split() with regex
"one,  two,   three".split(/,\s*/); // ["one", "two", "three"]
```

## Your Task

1. Write a function `isValidEmail(email)` that returns `true` if `email` matches the basic pattern `name@domain.tld` (use regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
2. Write a function `extractNumbers(text)` that returns an array of all number strings found in `text`.
3. Write a function `maskEmail(email)` that hides all but the first character of the local part, e.g. `"alice@example.com"` → `"a****@example.com"`.
4. Display in `#output`: `"valid: true | numbers: 3,12 | masked: a****@example.com"`.
