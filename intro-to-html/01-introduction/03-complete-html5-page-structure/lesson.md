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

The survey vessel Meridian has a finished crew profile ready to inspect. Use the completed code and preview to separate the page pieces visitors see from the structural information that supports the page behind the scenes.

## What you'll see

A complete working `index.html` document with a doctype, language declaration, head, tab title, body content, and a source-only comment.

## Read the demo code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Meridian Crew Profile</title>
</head>
<body>
  <!-- Main mission profile heading -->
  <h1>Meridian crew</h1>
  <p>The Meridian crew is surveying the north tower for the next mission.</p>
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

1. The `<title>` supplies **Meridian Crew Profile** as the document title (the embedded preview may not show a tab).
2. The page shows a crew heading and paragraph because they are inside `<body>`.
3. The HTML comment is present in the editor but absent from the preview.

## Checkpoint

You should now be able to distinguish document setup (`<!DOCTYPE html>`, `<html>`, and `<head>`) from visible page content (`<body>`). Try changing the `<h1>` text, rerun the preview to see the visible difference, then restore it. The `<title>` stays in the head and may not appear as a tab in the embedded preview.

## Next

Continue to **Exercise: Build a Complete HTML5 Page**. You will use the same structure in a starter file and validate each essential part.
