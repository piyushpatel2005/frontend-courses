---
title: "Protect the latest dashboard result"
slug: protect-latest-dashboard-result
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Finish the event dashboard with retry and newest-response protection.
seo_title: "Protect the latest dashboard result | JavaScript DOM"
seo_description: Add retry, AbortController cancellation, and latest-request guards to an offline vanilla JavaScript dashboard.
seo_keywords:
  - AbortController task
  - stale response prevention
  - retry dashboard
---

Keep the event data and search from the previous exercise. A fresh controller and increasing request number are now supplied for each load. Finish cancellation and the two guards. The trail demo shows why both success and error paths need protection.

`request` captures the number for this call; `latestRequest` changes when another call starts. Compare them after awaiting JSON, before rendering. Do the same in `catch`, because an old failure is just as stale as an old success. Retry already reruns the current query.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Abort the previous controller before the supplied code creates its replacement. Each request already receives its new signal.
2. After JSON parsing, return without rendering when `request !== latestRequest`.
3. In `catch`, return for an outdated request or an `AbortError`; preserve the existing feedback for genuine current failures.

To see the result, set the fixture delay to `800`, submit `Seed`, then quickly submit `Repair`. Only Repair cafe should remain. Set `failNext: true` and Run to try Retry, then restore the fixture. This is a complete offline dashboard; connecting a real API also requires checking its JSON contract and any cross-origin permissions.
