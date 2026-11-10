---
title: "Ready the Seed Library"
slug: ready-the-seed-library
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add defer to a head script and initialize a visible page-ready state after
  parsing.
seo_title: "Ready the Seed Library | JavaScript DOM"
seo_description: Add defer to a head script and initialize a visible page-ready state
  after parsing. Practice in a live JavaScript DOM preview.
seo_keywords:
- JavaScript DOM
- defer attribute
- head script
- document.body
---

The seed-library page already has a `script.js` tag in its head. It is missing `defer`, and the starter script does not yet mark the body ready.

## Two small edits

In `index.html`, add `defer` to the existing script tag. You do not need a second tag. In a saved page, that makes the external script wait until the HTML has been parsed.

Then edit `script.js` to set the body's ready state. The workshop demo used `dataset.ready`; this page uses the same property. The supplied CSS shows **Seed library ready** when `data-ready` is `"yes"`.

Press Run after each change. Adding `defer` alone will not change the waiting badge; the JavaScript assignment makes that visible change. Submit checks the head tag and body state independently.

As in the demo, the course preview injects your JavaScript separately. A working badge here does not prove that the external script tag has the correct loading setup.

## Your Tasks

1. Give the external `script.js` tag in the document head a `defer` attribute so it waits until the HTML has been parsed.
2. Set `document.body.dataset.ready` to `"yes"` in `script.js` to reveal the seed-library ready badge.
