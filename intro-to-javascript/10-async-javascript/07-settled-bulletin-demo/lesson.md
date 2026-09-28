---
title: 'Demo: Partial Results Bulletin'
slug: partial-results-bulletin
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Keep successful offline dispatches when a parallel Promise rejects.
seo_title: 'Demo: Partial Results Bulletin | Introduction to JavaScript'
seo_description: Keep successful offline dispatches when a parallel Promise rejects.
seo_keywords:
- javascript
- partial-results-bulletin
- async programming
---

# Demo: Partial Results Bulletin

A rehearsal bulletin queries three offline dispatch desks. Run the completed script: `Promise.allSettled` waits for **every** desk, preserving input order and returning a status for each one. The Console prints `Ready: sound, lights | missed: 1` even though signage rejects. This demo counts missed desks; the next exercise records their names.

Inspect the `status === "fulfilled"` branch. Try changing the rejected desk to `Promise.resolve("signage")`, run, then restore it. The next project uses a different data source: independent award feed providers.
