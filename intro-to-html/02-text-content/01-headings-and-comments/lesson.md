---
title: Headings and Comments
slug: headings-and-comments
order: 1
language: html
validationRules: []
hints:
  - "HTML has six heading levels: <h1> through <h6>. Use <h1> only once per page."
  - "Comments look like this: <!-- your note here -->. The browser ignores them."
  - "Use headings to describe structure, not to make text bigger — CSS handles size."
---

# Headings and Comments

Just like a book has a title, chapters, and sections, a web page has headings. HTML provides **six levels** of headings to define content hierarchy.

## Heading levels: `<h1>` to `<h6>`

```html
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Main Title (largest)</h1>
    <h2>Section Heading</h2>
    <h3>Sub-section Heading</h3>
    <h4>Heading Level 4</h4>
    <h5>Heading Level 5</h5>
    <h6>Heading Level 6 (smallest)</h6>
</body>
</html>
```

**Rules of thumb:**

| Rule | Reason |
|------|--------|
| Use exactly **one** `<h1>` per page | It marks the page's main topic — search engines treat it as the primary keyword |
| `<h2>` for sections, `<h3>` for sub-sections | Creates a logical document outline |
| Don't skip levels (e.g., `h1` → `h3`) | Breaks accessibility and screen-reader navigation |
| Don't use headings just to make text big | That's CSS's job |

## HTML comments

Comments let you annotate your code. The browser ignores them completely — they are never shown to the user:

```html
<!-- This is a comment -->
<h1>Visible Heading</h1>
<!-- <h2>This heading is commented out and won't show</h2> -->
```

Comments are useful for:
- Explaining sections to teammates (or your future self).
- Temporarily hiding code during testing without deleting it.

Most editors have a keyboard shortcut to toggle comments: **Ctrl + /** (or **Cmd + /** on Mac) in VS Code.

## Exercise

The starter `index.html` has an empty body. Build a page about a topic of your choice (e.g., your favourite hobby, a book, a movie):

1. Add one `<h1>` for the page title.
2. Add at least two `<h2>` tags for section headings (e.g., "Overview", "Why I Love It").
3. Add at least one `<h3>` as a sub-section under one of the `<h2>` sections.
4. Add an HTML comment above the `<h1>` describing what the page is about.
