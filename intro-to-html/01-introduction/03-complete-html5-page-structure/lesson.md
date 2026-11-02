---
title: "Complete HTML5 Page Structure"
slug: complete-html5-page-structure
order: 3
language: html
summary: Inspect a complete working HTML5 document with doctype, html, head, title, body, and a source-only comment.
seo_title: "Complete HTML5 Page Structure in Action | Introduction to HTML"
seo_description: Read an HTML5 document frame, then practise adding a title, body content, and a source-only comment.
seo_keywords:
  - HTML5 document structure
  - HTML doctype
  - HTML head
  - HTML body
  - HTML comment
lesson_type: coding
---

# Read a complete HTML5 page

You have written content inside a body. This finished crew profile shows what surrounds that content. Run `index.html`, then compare the visible profile with the source.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Meridian Crew Profile</title>
  </head>
  <body>
    <!-- Profile heading for the survey team -->
    <h1>Meridian crew</h1>
    <p>The crew is surveying the north tower.</p>
  </body>
</html>
```

`<!DOCTYPE html>` asks the browser to use modern HTML rendering. The `<html>` element contains the document. Its `lang="en"` is an **attribute**: extra information written in an opening tag as a name and quoted value. Here it declares English as the main language.

The `<head>` holds page information rather than visible paragraphs. `<meta charset="UTF-8">` declares the text encoding so characters can display correctly. `<title>` names the document; the embedded preview does not have its own tab to show that name.

The `<body>` holds the visible content. Indenting elements inside their parent makes the nesting easier to read; indentation does not create the page layout.

## Keep pairs inside their parent

An inner element must close before its outer element closes:

```html
<p>The survey is <strong>ready</strong> to begin.</p>
```

Here `<strong>` marks an important phrase. It starts and ends inside the paragraph; the next module explains when to use it. Writing `<p>...<strong>ready</p></strong>` crosses the tag pairs. Browsers try to repair mistakes, so a page that looks plausible can still have the wrong structure. Match the pairs in the source rather than relying on the preview to catch every error.

Write attributes in the opening tag, separated by spaces, for example `<html lang="en">`. The closing tag is just `</html>`, without attributes. Quote attribute values so a value containing spaces stays together. Ordinary source line breaks collapse into text spacing; they do not create extra paragraphs.

Some elements have no contents or closing tag. These are **void elements**, including the `<meta>` above and the images and inputs you will meet later. Both `<meta charset="UTF-8">` and `<meta charset="UTF-8" />` are common HTML spellings; the slash does not create a separate closing tag.

## A note that stays in the source

An HTML comment begins with `<!--` and ends with `-->`. The browser does not display it, but anyone who can read the page source can see it. Do not put private information in comments.

In the editor, change the comment's words and run again: the preview should not change. Restore it, then change the `<h1>` text and run again: that change should appear. Restore the heading when finished. This demo has no graded tasks.

Next, use the same document frame for one crew member's profile.
