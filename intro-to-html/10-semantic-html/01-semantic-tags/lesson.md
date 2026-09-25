---
title: Semantic HTML Tags
slug: semantic-tags
order: 1
language: html
summary: Use meaningful HTML landmarks to organize a page for people and assistive technology.
seo_title: Semantic HTML Tags | Learn HTML
seo_description: Learn how header, nav, main, article, section, aside, and footer give an HTML page useful structure.
seo_keywords: [semantic HTML, HTML landmarks, header, main, accessibility]
validationRules: []
hints:
  - "Use <main> for the primary content area — there should only be one per page."
  - "<article> is for self-contained content (a blog post, a news article) that could stand alone."
  - "<section> groups related content under a theme. It usually has a heading."
  - "<nav>, <header>, and <footer> are landmark elements that help screen reader users navigate."
---

# Semantic HTML Tags

## Mission

The Riverstone Community Garden is publishing a short harvest update. Build a page whose regions are clear enough for a visitor—or a screen-reader user—to jump straight to the update, its related links, or its contact details.

## What you'll build

A page with semantic landmarks: a site header and navigation, one self-contained article update, a related-links sidebar, and a footer — all organized inside a single main content region.

**Target:** a page with a site header and navigation, one self-contained update, a related-links sidebar, and a footer. When you preview it, the update sits inside the page's single primary-content region.

## Give each part a job

Semantic HTML names the role of a region instead of using a generic `<div>` everywhere. Those names create landmarks that assistive technology can announce and navigate. They also make the document easier for a teammate and a search engine to understand.

For this garden update, use:

| Element | Job on this page |
| --- | --- |
| `<header>` | Introduces the garden site |
| `<nav>` | Holds site-navigation links |
| `<main>` | Holds this page's primary content; use one per page |
| `<article>` | Contains an update that could stand on its own |
| `<aside>` | Holds related, secondary links |
| `<footer>` | Holds closing contact or copyright information |

`<section>` groups related content that belongs to the current page. An `<article>` is stronger: its content should still make sense if shared or listed by itself.

## Build the update's landmarks

Start with the outer shape. Notice that `<nav>` belongs inside the `<header>`, while the update and its sidebar belong inside `<main>`.

```html
<header>
    <h1>Riverstone Community Garden</h1>
    <nav>
        <a href="/plots">Plots</a>
        <a href="/events">Events</a>
    </nav>
</header>

<main>
    <article>
        <h2>Saturday Harvest Share</h2>
        <p>Tomatoes and basil will be ready at the tool shed.</p>
        <time datetime="2026-08-15">August 15, 2026</time>
    </article>

    <aside>
        <h3>Garden links</h3>
        <a href="/volunteer">Volunteer times</a>
    </aside>
</main>

<footer>
    <p>Riverstone Community Garden</p>
</footer>
```

`<time>` gives the browser a machine-readable date through `datetime` while visitors read the friendly date. Use it for a specific date or time, not for vague phrases such as “last week.”

## Checkpoint

Preview the page. You should be able to point to a header, one navigation area, one main content area, the harvest update, related links, and a footer. If the update is outside `<main>`, check the opening and closing tags first.

## Your Tasks

1. Add one `<header>` element to introduce the garden page.
2. Inside the header, add a `<nav>` with at least two links.
3. Add one `<main>` element for the primary content.
4. Inside `<main>`, add an `<article>` for a garden update.
5. Add a `<time>` element with a `datetime` attribute inside the article.
6. Add one `<aside>` with related links.
7. Add one `<footer>` element with closing contact or copyright information.

## Payoff

With those landmarks in place, the garden update is no longer just a stack of boxes: its structure explains where visitors are and where they can go next.
