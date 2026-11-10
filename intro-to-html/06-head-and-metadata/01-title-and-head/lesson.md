---
title: "Title And Head"
slug: title-and-head
order: 1
language: html
summary: Learn what belongs in HTML head, including title, character encoding, and viewport metadata.
seo_title: HTML Head Element and Page Title
seo_description: Learn how the HTML head works and how to set a page title, UTF-8 character encoding, viewport tag, and page description.
seo_keywords: [HTML head, HTML title, meta charset, viewport meta tag, HTML stylesheet]
validationRules: []
hints:
  - "The <head> is not displayed on the page — it holds instructions for the browser."
  - "<title> sets the text in the browser tab and is used by search engines."
  - "Put <meta charset=\"UTF-8\"> near the start of <head>; first is a useful convention."
  - "You can link external resources (stylesheets, fonts) and add scripts inside <head>."
---

Your visiting card used a simple page title; now give a new walking-club page the hidden details a browser and search tool need. Set up its `<head>` so the tab has a useful title and phones display the page at device width.

A walking-club page with a proper `<head>` containing a supplied charset and your title, viewport, and description. The visible body is already in `index.html`; edit only its head information.

## The browser's setup area

`<body>` holds the content visitors see. `<head>` holds instructions and page information for the browser, search tools, and linked files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sunday Birdwatch — Lakeside Nature Club</title>
</head>
<body>
    <!-- Visible content here -->
</body>
</html>
```

Put `<meta charset="UTF-8" />` near the start of `<head>`; making it the first element is a useful habit. The encoding declaration needs to appear early so the browser can decode the document correctly. The viewport tag tells a phone browser to use the device width instead of shrinking a desktop-sized page.

## Name the tab and describe the page

`<title>` appears in the browser tab, history, bookmarks, and often search results. Keep it short, specific, and unique. A description meta tag gives search engines a concise summary they may show beneath that title.

```html
<title>Sunday Birdwatch — Lakeside Nature Club</title>
<meta name="description" content="A Sunday birdwatching walk around the lake, with a meeting place and equipment notes." />
```

A `<link>` can connect a real stylesheet when you have one; this page does not need CSS to complete its head.

## Check your page

Edit `index.html`, then Run. The visible heading should stay unchanged: head metadata does not add content to the body. This embedded preview does not rename the course’s browser tab. Inspect your `<head>` and Submit to check the title and meta tags; opening the document on its own would show its title in a tab.

## Your Tasks

1. In `<head>`, set a `<title>` that names the City Walking Club river walk.
2. Add a viewport meta tag with `content="width=device-width, initial-scale=1.0"`.
3. Add a description meta tag with a sentence about the river walk (at least 20 characters).

The walking-club page now carries useful browser and search information before visitors read its first heading.
