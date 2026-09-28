---
title: Trace safe additions and delegated removal
slug: accessible-add-remove-flow
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Explore a seed-swap table: new rows use textContent, and one parent handles
  Remove clicks.'
seo_title: Trace safe additions and delegated removal | DOM Manipulation with JavaScript
seo_description: A completed seed-swap form safely adds entries and delegates removal
  with accessible feedback.
seo_keywords:
- JavaScript DOM manipulation
- accessible delegated removal demo
- browser DOM project
---


# Trace safe additions and delegated removal

The seed-swap table is a separate completed example. Its form adds varieties, and its one stable list listener removes both the original row and rows created later.

## Follow both events

`submit` prevents navigation, trims the value, and gives feedback when it is blank. For a valid variety, `createElement` builds a row and `textContent` places the visitor’s text in it; typed angle brackets are not parsed as HTML. A real button with a specific label travels with the row. The parent `#seed-list` receives bubbled clicks from every Remove button, including future buttons, and the live status region announces the outcome.

Run it with `<em>Marigold</em>`, remove the new entry, then remove Sunflower. You should see literal brackets and two working buttons. In the directory exercise you will reuse the *mechanics* while retaining search and selected details; it has different fields and data.
