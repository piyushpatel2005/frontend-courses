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
summary: Practice regular expressions with a focused Starline Awards programming mission.
seo_title: Regular Expressions | Introduction to JavaScript
seo_description: Learn regular expressions through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, regular expressions, beginner javascript, programming practice
---

# Regular Expressions

The next intake step needs to recognize and clean up email-like text. Run `script.js` and inspect its Console output; regular expressions work on strings, without any page markup.

A **regular expression** (regex) is a pattern that describes a set of strings. JavaScript has built-in regex support for searching, validating, and transforming strings.

## Creating a regex

```javascript
// Literal syntax for a fixed pattern
const pattern = /hello/i;   // i = case-insensitive

// The i flag ignores letter case; without it, HELLO does not match /hello/.
```

## Common special characters

| Pattern | Meaning |
|---------|---------|
| `.` | Any character except newline (in basic regex mode) |
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

## Your Tasks

1. Complete `isValidEmail(email)` with the basic shape regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` and return its boolean result. This checks shape, not deliverability.
2. Complete `extractNumbers(text)` to return all digit-sequence strings, or an empty array when none occur.
3. Complete `maskEmail(email)` for a valid address with a nonempty local part: retain its first character, replace the rest with `*`, and keep the domain.
4. Log one standalone combined line from the three functions: `valid: true | numbers: 3,12 | masked: a****@example.com`.
