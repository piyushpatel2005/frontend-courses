---
title: 'Demo: Offline API Coordination'
slug: offline-api-coordination
order: 5
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Run dependent and parallel offline fixture calls with a Promise.all fallback.
seo_title: 'Demo: Offline API Coordination | Introduction to JavaScript'
seo_description: Run dependent and parallel offline fixture calls with a Promise.all fallback.
seo_keywords: javascript, offline, api, coordination, async programming
---

# Demo: Offline API Coordination

A rehearsal schedule needs an event ID before two independent lookups can begin. These named `get*` functions imitate an API but use local promises: **no fetch and no network**. Run `script.js` and see `Rehearsal | acts: 2 | seats: 4`.

Notice that `getActs` and `getSeats` start together only after `getEvent` resolves. Try changing the ID returned by `getEvent` to `8`; both lookups then return empty arrays. Restore it afterward. The next exercise uses this dependency pattern for a different dashboard.
