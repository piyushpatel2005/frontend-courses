---
title: What is HTML?
slug: what-is-html
order: 1
language: html
lesson_type: informational
---

# What is HTML?

The World Wide Web is full of information written using different languages. One of the most popular languages used to display information in a browser is **HTML** — HyperText Markup Language.

HTML files are plain text files written with a specific syntax that tells browsers how to structure and display content. If you want to create a web page yourself, all you need is a text editor and a web browser.

> HTML is **not** a programming language. It is a **markup language** — it structures content on the web, but it does not perform calculations or logic. Web pages are usually augmented by CSS (for styling) and JavaScript (for interactivity).

## How browsers read HTML

When you open an HTML file in a browser, the browser reads the file from top to bottom, interprets the tags, and renders the content on screen. The browser takes care of layout, default fonts, and spacing — you just provide the structure.

## Your first HTML file

The simplest possible HTML file is a plain text file with the `.html` extension:

```html
Hello World
```

Save this as `index.html` and open it in a browser. You will see the text `Hello World` displayed. The browser happily shows it even though there are no HTML tags — it guesses what to do.

Now change the file to:

```html
<h1>Hello World</h1>
```

Refresh the browser. The text is now displayed as a large, bold heading. The `<h1>` is an HTML **tag** — more on that in the next lesson.

## A note on text editors

You can use any plain text editor:

- **VS Code** (recommended) — free, cross-platform, excellent HTML support.
- Notepad (Windows) or TextEdit (Mac) — simple but work fine.

Avoid Microsoft Word — it saves files in its own format and adds hidden formatting that browsers cannot read.

## Next up

In the next lesson you will learn about **elements, tags, and attributes** — the three building blocks that make every HTML page work.
