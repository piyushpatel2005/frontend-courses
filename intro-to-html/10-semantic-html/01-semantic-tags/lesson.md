---
title: Semantic HTML Tags
slug: semantic-tags
order: 1
language: html
validationRules: []
hints:
  - "Use <main> for the primary content area — there should only be one per page."
  - "<article> is for self-contained content (a blog post, a news article) that could stand alone."
  - "<section> groups related content under a theme. It usually has a heading."
  - "<nav>, <header>, and <footer> are landmark elements that help screen reader users navigate."
---

# Semantic HTML Tags

Semantic HTML uses tags that describe their **meaning** — not just their appearance. This benefits:

- **Accessibility**: Screen readers navigate by landmarks (`<nav>`, `<main>`, `<footer>`)
- **SEO**: Search engines better understand page structure
- **Readability**: Other developers immediately understand the layout

## Page landmarks

```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <header>
        <h1>Site Name</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content...</p>
        </article>
        <aside>
            <h3>Related Links</h3>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Site Name</p>
    </footer>
</body>
</html>
```

## Landmark elements

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content — site/page/section header |
| `<nav>` | Navigation links |
| `<main>` | Primary content (one per page) |
| `<article>` | Self-contained, re-distributable content |
| `<section>` | Thematic grouping of content |
| `<aside>` | Tangentially related content (sidebars) |
| `<footer>` | Closing content — copyright, links, contact |

## `<article>` vs `<section>`

- `<article>` is for content that could be removed from the page and still make sense on its own — a blog post, a comment, a news story.
- `<section>` groups related content that is part of the page, not independently meaningful.

## Text semantics

```html
<!-- A quotation from another source -->
<blockquote cite="https://example.com/source">
    <p>The best way to predict the future is to invent it.</p>
</blockquote>

<!-- A specific date/time -->
<p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>

<!-- Contact information for the nearest article/body -->
<address>
    Written by <a href="mailto:jane@example.com">Jane Smith</a>
</address>
```

## Exercise

Build a semantic blog post page:

1. Add a `<header>` element.
2. Inside the header, add a `<nav>` with at least two links.
3. Add a `<main>` element.
4. Inside main, add an `<article>` with a heading and at least two paragraphs.
5. Inside the article, include a `<time>` element with a `datetime` attribute.
6. Add an `<aside>` next to the article with related links.
7. Add a `<footer>` element.
