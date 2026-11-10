---
title: "Build a live name preview"
slug: build-a-live-name-preview
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build a name preview that updates as someone types, with a clear blank-state message.
seo_title: "Build a live name preview | JavaScript DOM"
seo_description: "Build a name preview that updates as someone types, with a clear blank-state message."
seo_keywords:
- JavaScript input event patterns
- live name preview
- textContent patterns
---

The volunteer introduction has its label, field, and live greeting already. The supplied input listener reads and trims the current name, then separates nonblank and blank input into two branches.

Edit those branches in `script.js`. You do not need another listener or any markup changes. As in the plot-badge demo, use `textContent` so a name containing angle brackets remains text.

## Your Tasks

1. In the nonblank branch, set `#greeting` to the current trimmed `name` as literal text.
2. In the blank branch, set `#greeting` to `friend`.

Run after step 1 and type a made-up name. Change it again: the greeting should update without a click. After step 2, clearing the field or entering only spaces should restore friend. Try `<em>Bea</em>` and check that the brackets remain visible. Submit checks the nonblank and blank paths separately.
