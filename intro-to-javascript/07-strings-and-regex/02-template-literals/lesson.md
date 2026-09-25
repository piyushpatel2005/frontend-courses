---
title: Template Literals and String Patterns
slug: template-literals
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use backticks `` ` `` and `${}` for template literals."
  - "Multi-line template literals preserve newlines automatically."
  - "Tagged templates let you process a template: `tag\`text ${val}\``."
summary: Practice template literals and string patterns with a focused Starline Awards programming mission.
seo_title: Template Literals and String Patterns | Introduction to JavaScript
seo_description: Learn template literals and string patterns through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, template literals and string patterns, beginner javascript, programming practice
---

# Template Literals and String Patterns

## Mission: Lyrics Studio

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you shape captions, lyric snippets, and input patterns without changing the original message by accident. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Template literals (backtick strings) make string construction expressive and readable.

## Embedding expressions

```javascript
const name = "Alice";
const score = 92;
const message = `${name} scored ${score} points (${score >= 90 ? "A" : "B"})`;
// "Alice scored 92 points (A)"
```

## Multi-line strings

```javascript
const html = `
<div class="card">
  <h2>${name}</h2>
  <p>Score: ${score}</p>
</div>
`.trim();
```

## Common string building patterns

### Slug from title

```javascript
function toSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}
toSlug("Hello, World!"); // "hello-world"
```

### Capitalize first letter

```javascript
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
```

## Your Task

1. Write a function `formatCurrency(amount, currency = "USD")` that returns a formatted currency string, e.g. `formatCurrency(1234.5)` → `"$1,234.50"`. Use `amount.toLocaleString("en-US", { style: "currency", currency })`.
2. Write a function `truncate(text, max)` that truncates `text` to `max` characters and appends `"..."` if it was cut, e.g. `truncate("Hello World", 5)` → `"Hello..."`.
3. Write a function `toSlug(title)` that converts a title to a URL slug (lowercase, spaces to `-`, non-alphanumeric removed).
4. log with `console.log()`: `"$1,234.50 | Hello... | hello-world"`.
