---
title: The Head Element and Page Title
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
  - "<meta charset=\"UTF-8\"> should always be the first tag inside <head>."
  - "You can link external resources (stylesheets, fonts) and add scripts inside <head>."
---

# The Head Element and Page Title

## Mission
Your visiting card used a simple page title; now give a new walking-club page the hidden details a browser and search tool need. Set up its `<head>` so the tab has a useful title and phones display the page at device width.

## What you'll build
A walking-club page with a proper `<head>` containing a supplied charset and your title, viewport, and description. The visible body is already in the starter; the tab does not yet have a useful name.

## The browser's setup area

`<body>` holds the content visitors see. `<head>` holds instructions and page information for the browser, search tools, and linked files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saturday River Walk — City Walking Club</title>
</head>
<body>
    <!-- Visible content here -->
</body>
</html>
```

Put `<meta charset="UTF-8" />` first inside `<head>` so the browser decodes text correctly. The viewport tag tells a phone browser to use the device width instead of shrinking a desktop-sized page.

## Name the tab and describe the page

`<title>` appears in the browser tab, history, bookmarks, and often search results. Keep it short, specific, and unique. A description meta tag gives search engines a concise summary they may show beneath that title.

```html
<title>Saturday River Walk — City Walking Club</title>
<meta name="description" content="A relaxed Saturday morning walk along the river, with meeting details and route notes." />
```

A `<link>` can connect a real stylesheet when you have one; this page does not need CSS to complete its head.

## Checkpoint

Run the page and look at its browser tab or preview title. It should name the walking-club page, even though the title is not in the visible body. If text appears in the page instead, move that element inside `<head>`.

## Your Tasks

1. In `<head>`, set a `<title>` that names the City Walking Club river walk.
2. Add a viewport meta tag with `content="width=device-width, initial-scale=1.0"`.
3. Add a description meta tag with a meaningful summary of the walk.

## Payoff

The walking-club page now carries useful browser and search information before visitors read its first heading.
