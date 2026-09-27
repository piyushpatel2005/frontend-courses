---
title: 'Exercise: follow the document reference'
slug: exercise-document-reference
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Read the html element through document.documentElement and mark the body
  with its language.
seo_title: 'Exercise: follow the document reference | Beginner JavaScript DOM'
seo_description: Read the html element through document.documentElement and mark the
  body with its language. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- document.documentElement
- dataset
- DOM language
---

The noticeboard used `document.title` to take a value from the head and place it on the body. Your new project is a small reading-room page: its `<html lang="en">` tells the browser the page language. Before making changes, inspect the tree in `index.html`: `<body>` is below `<html>`, and the script runs at the end of the body.

The same document-reference pattern works with another property. For example, a ferry timetable could record its page title like this:

```javascript
const timetableName = document.title;
document.body.dataset.timetable = timetableName;
```

`dataset.timetable` writes a `data-timetable` attribute. Here you need the **language**, not a timetable or the title: read `document.documentElement.lang` and write the value to `document.body.dataset.language`. The CSS already has a matching rule, so a badge changes when your script runs. Use the Preview to check the badge, then Submit to check the DOM attribute.

## Your Tasks

1. Read the `<html>` element's `lang` through `document.documentElement` and put that value in `document.body.dataset.language` so the reading-room badge becomes active.
