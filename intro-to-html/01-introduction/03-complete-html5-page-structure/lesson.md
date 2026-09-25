---
title: "Complete HTML5 Page Structure: See It in Action"
slug: complete-html5-page-structure
order: 3
language: html
summary: Inspect a complete working HTML5 document with doctype, html, head, title, body, and a source-only comment.
seo_title: "Complete HTML5 Page Structure in Action | Introduction to HTML"
seo_description: See how a complete HTML5 document renders before recreating its doctype, head, title, body, and comment in an exercise.
seo_keywords:
  - HTML5 document structure
  - HTML doctype
  - HTML head
  - HTML body
  - HTML comment
lesson_type: coding
hints:
  - "This is a completed demo. Use it to connect each structural tag to its effect before the next exercise."
  - "Only content inside <body> is visible in the page preview."
---

# Complete HTML5 Page Structure: See It in Action

## Mission

the survey vessel Meridian has a finished the Meridian crew profile ready to inspect. Use the completed code and preview to separate the page pieces visitors see from the structural information that supports the page behind the scenes.

## What you'll see

A complete working `index.html` document with a doctype, language declaration, head, tab title, body content, and a source-only comment.

## Read the demo code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>the Meridian crew Profile — the survey vessel Meridian</title>
</head>
<body>
  <!-- Main mission profile heading -->
  <h1>the Meridian crew</h1>
  <p>Alex runs hands-on community workshops about creative coding and digital crafts.</p>
</body>
</html>
```

| Part | What it does |
|---|---|
| `<!DOCTYPE html>` | Tells the browser to use modern HTML. |
| `<html lang="en">` | Wraps the document and names its primary language. |
| `<head>` | Holds browser-facing metadata, including the title. |
| `<title>` | Labels the browser tab, not the page body. |
| `<body>` | Holds the content visitors can see. |
| `<!-- ... -->` | Leaves a source-code note that the browser does not render. |

## Try the preview

The completed `index.html` is open in the editor. Run it and compare the preview with the source:

1. The browser tab says **the Meridian crew Profile — the survey vessel Meridian** because of `<title>`.
2. The page shows Alex's name and paragraphs because they are inside `<body>`.
3. The HTML comment is present in the editor but absent from the preview.

## Checkpoint

You should now be able to distinguish document setup (`<!DOCTYPE html>`, `<html>`, and `<head>`) from visible page content (`<body>`). Nothing has to be edited in this demo.

## Next

Continue to **Exercise: Build a Complete HTML5 Page**. You will use the same structure in a starter file and validate each essential part.