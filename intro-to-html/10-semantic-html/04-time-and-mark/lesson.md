---
title: Dates and Highlighted Text
slug: time-and-mark
order: 4
language: html
lesson_type: coding
summary: See a readable event date paired with machine-readable time and a relevant highlight.
seo_title: HTML Time and Mark Elements | Introduction to HTML
seo_description: Learn when to use time for dates and mark for a highlight relevant to the reader.
seo_keywords: [HTML time, datetime attribute, HTML mark, semantic text]
---

The garden page used `<time>` for an event date. Here a seed-swap notice puts it beside a search result: one piece is a date that software can read, the other is a phrase highlighted because it matches a visitor's search.

Run the completed `index.html` and compare the source with the preview. The date's visible words are for people; `datetime` gives software an unambiguous value. `<mark>` indicates a highlight relevant *in this context*, not stronger importance. Use `<strong>` when the words themselves are important, not merely highlighted as a match.

```html
<p>Next swap: <time datetime="2027-04-17">April 17, 2027</time></p>
<p>Result for “seeds”: Save your <mark>seeds</mark> for spring.</p>
```

![The date has a visible label and a machine-readable value; the highlighted word belongs inside a search result.](date-and-highlight.svg)

Change only the visible date words in the editor and Run: the page changes, but the `datetime` value does not. Restore the words. Then change the text inside `<mark>` and notice which word is highlighted. Restore it before the next lesson, where you will write both relationships on a different page.
