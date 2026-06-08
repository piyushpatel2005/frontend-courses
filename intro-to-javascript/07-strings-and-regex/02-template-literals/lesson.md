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
---

# Template Literals and String Patterns

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
4. Display in `#output`: `"$1,234.50 | Hello... | hello-world"`.
