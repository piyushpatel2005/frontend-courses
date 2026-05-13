---
title: Your First Complete Page
slug: your-first-page
order: 3
language: html
validationRules: []
hints:
  - "The <!DOCTYPE html> declaration goes on the very first line."
  - "The <head> section is for metadata — it contains <title>, <meta>, and <link> tags."
  - "The <body> section is for all visible content — headings, paragraphs, images, etc."
---

# Your First Complete Page

In the introduction you learned what HTML is. Now let's put it all together and build a **proper**, standards-compliant HTML5 page from scratch.

## The full page structure

Every HTML5 document follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>
```

### Breaking it down

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Declares this is an HTML5 document. Always the very first line. |
| `<html lang="en">` | Root element. The `lang` attribute helps screen readers and search engines. |
| `<head>` | Invisible metadata: character encoding, page title, stylesheet links. |
| `<meta charset="UTF-8">` | Tells the browser to use UTF-8 encoding (supports almost every character). |
| `<title>` | Text shown in the browser tab and used as the default bookmark name. |
| `<body>` | Everything the user sees: headings, paragraphs, images, links, etc. |

## HTML Comments

You can leave notes in your code using comments. The browser ignores them completely:

```html
<!-- This is a comment — the browser will not show it -->
<h1>Visible Heading</h1>
```

Comments are great for explaining sections of code or temporarily disabling markup while testing.

## Exercise

Build a complete page from the blank `index.html`:

1. Add the `<!DOCTYPE html>` declaration (it's already there — check it!).
2. Add a `<title>` of **"About Me"** inside `<head>`.
3. Inside `<body>`, add:
   - An `<h1>` with your name (or any name).
   - A `<p>` with a short sentence about yourself.
   - An HTML comment above the `<h1>` explaining what the heading is.
