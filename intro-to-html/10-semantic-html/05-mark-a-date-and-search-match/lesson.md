---
title: "Mark a Date and Search Match"
slug: mark-a-date-and-search-match
order: 5
language: html
lesson_type: coding
summary: Add a machine-readable date and a context-specific highlight to a community notice.
seo_title: "Mark a Date and Search Match | Introduction to HTML"
seo_description: Mark an event date with time and a search match with mark in an HTML notice.
seo_keywords: [HTML time practice, HTML mark practice, datetime]
hints:
  - The datetime value uses year-month-day, even if the visible words use another format.
---

You have just seen a date and a search highlight on a seed-swap page. Now a book exchange needs a date that a visitor can read and software can understand. The heading and paragraphs are already in `index.html`. Edit a single phrase at a time.

## Your Tasks

1. Wrap the existing date words in `<time>` and set `datetime="2027-05-08"`; keep the date visible in the first paragraph.
2. Wrap the word `books` in the second paragraph with `<mark>` to show the visitor's search match; leave the rest of that sentence readable.

Run after the first edit: the date still looks like a date, but its meaning is now in the source. Run after the second: only the matched word is highlighted. Submit to check both changes. A highlight is not a replacement for a meaningful heading or a clear sentence.
