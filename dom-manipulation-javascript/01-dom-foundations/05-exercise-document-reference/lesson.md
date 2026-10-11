---
title: 'Exercise: follow the document reference'
slug: exercise-document-reference
order: 5
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

The noticeboard read its title and stored it on the body. This reading-room page instead needs its language. The supplied `<html lang="en">` identifies the page language as English.

## Find the value you need

Open `index.html` and locate `lang="en"`. JavaScript can read it through `document.documentElement.lang`: first reach `<html>`, then read its `lang` property.

Recall how the demo stored a title:

```javascript
const pageTitle = document.title;
document.body.dataset.pageTitle = pageTitle;
```

For this page, use `dataset.language` instead. It writes a `data-language` attribute on the body. The supplied CSS watches that attribute to show a language badge.

Edit `script.js`; leave the supplied HTML and CSS alone. Press Run to see the badge, then Submit to check your change.

## Your Tasks

1. Read the `<html>` element's `lang` through `document.documentElement` and put that value in `document.body.dataset.language` so the reading-room badge becomes active.
