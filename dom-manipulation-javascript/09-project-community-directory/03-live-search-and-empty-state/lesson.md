---
title: Trace live search and an empty state
slug: live-search-and-empty-state
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Explore a bicycle-route index: filter existing routes without deleting their
  nodes.'
seo_title: Trace live search and an empty state | DOM Manipulation with JavaScript
seo_description: A completed route finder uses input events, hidden cards, and a live
  empty-state message.
seo_keywords:
- JavaScript DOM manipulation
- live DOM search demo
- browser DOM project
---


# Trace live search and an empty state

A bicycle-route index filters as someone types, without destroying any routes. It is a complete, runnable worked example before the next community-directory task.

## Follow the input

The `input` event fires on every edit. The handler trims and lowercases the query, compares it with each route’s `data-keywords`, then toggles `hidden`. Counting the visible routes gives the status message; zero also unhides the empty-state message. The CSS `[hidden]` rule ensures those cards stay out of the preview even though `.cards li` has display styling.

Run it. Type `hill`, then an impossible route, then clear the search: all three original route nodes return. Change the query to uppercase to see why lowercasing both sides matters. The next exercise applies the same idea to member names *and* skills, retaining the selection code from step one.
