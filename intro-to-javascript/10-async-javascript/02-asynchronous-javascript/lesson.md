---
title: 'Asynchronous JavaScript'
slug: asynchronous-javascript
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Schedule a callback that records broadcast cues in actual execution order.
seo_title: 'Asynchronous JavaScript | Introduction to JavaScript'
seo_description: Schedule a callback that records broadcast cues in actual execution order.
seo_keywords: javascript, callbacks, timers, asynchronous programming
---

# Schedule a broadcast cue

Record a broadcast's opening and closing cues before its delayed announcement. The previous demo showed the same timing rule with different stage cues.

The starter supplies a `Promise`, a completion value that callers can wait for. Its `resolve(messageOrder)` line hands back the finished array. Keep that wrapper for now; the next demo explains Promise states. Your changes belong in `scheduleDelayed` and `logBroadcast`, not in the supplied runner.

`scheduleDelayed(messageOrder, finish)` receives an array and a callback. Register a zero-delay timer. Inside the timer, append `Delayed` to the array, then call `finish()`. The supplied runner appends `End` as soon as your scheduling function returns.

## Your Tasks

1. Implement `scheduleDelayed(messageOrder, finish)` so it appends `Delayed` in a zero-delay timer, then calls `finish()` exactly once.
2. Implement `logBroadcast(order)` to log the supplied array using the separator `" | "` (a pipe with a space on each side).

Edit `script.js`, press **Run**, then **Submit**. The unfinished starter stays quiet. After task 1 it still stays quiet; after task 2 the Console shows `Start | End | Delayed`. The checks can assess the timer and the logger separately.
