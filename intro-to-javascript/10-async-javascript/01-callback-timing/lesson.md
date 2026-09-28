---
title: 'Demo: Callback Timing'
slug: callback-timing
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Run a timer callback to see synchronous cues finish before delayed work.
seo_title: 'Demo: Callback Timing | Introduction to JavaScript'
seo_description: Run a timer callback to see synchronous cues finish before delayed work.
seo_keywords: javascript, callback, timing, async programming
---

# Demo: Callback Timing

A stage cue arrives after the opening announcement. Open `script.js` and run it: **one Console line** reads `Lights | Music | Cue: curtain`. The timer callback is scheduled, even with a delay of zero; synchronous code completes first.

Change `Music` to `Applause`, run again, and observe that the cue still appears last. Restore the line before moving to the broadcast exercise. The array records actual execution order rather than predicting it.
