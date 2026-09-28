---
title: 'Demo: Promise Rehearsal'
slug: promise-rehearsal
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Run an offline Promise and await a rehearsal cue before reporting it.
seo_title: 'Demo: Promise Rehearsal | Introduction to JavaScript'
seo_description: Run an offline Promise and await a rehearsal cue before reporting it.
seo_keywords: javascript, promise, rehearsal, async programming
---

# Demo: Promise Rehearsal

The rehearsal desk receives a cue asynchronously. Run the completed `script.js`: the Console prints `Rehearsal: SOUND CHECK`. `waitForCue` creates a Promise that settles on a timer, and `readCue` awaits it before transforming the text.

Change the cue to `doors open`, run once more, then restore it. A thrown error in an async function would reject its returned Promise; the next exercise adds that guard while building a different broadcast.
