---
title: "Build an events dashboard"
slug: build-events-dashboard
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build an offline event dashboard with safe cards and explicit loading, empty, and error UI.
seo_title: "Build an events dashboard | JavaScript DOM"
seo_description: Practice fetching mock event data, checking HTTP success, rendering safe list items, and announcing empty or error states.
seo_keywords:
  - mock fetch task
  - JavaScript dashboard
  - accessible status
---

Build the community events dashboard using the trail demo as a guide. Keep its three supplied events unchanged; one title deliberately looks like HTML.

The loader already awaits the offline Response and its JSON body, calls the rendering/status helpers, and catches errors. Retry is connected too. Build one detached row first, then insert rows; reporting a count is a separate change. The fixture returns `{ items: [...] }`, so `data.items`, not `data`, is the array.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Make `makeEventRow(item)` return a detached `li` with a `strong` title and a `span` containing ` — ` followed by its venue. Set both using `textContent`.
2. Make `render(items)` replace `#entries` with one `makeEventRow` result per item; an empty array clears it.
3. Make `showEventCount(items)` announce `<number> entries found.` in `#status`.
4. Make `showDashboardLoading()` announce `Loading entries…` and clear outdated rows while the request is pending.
5. Make `checkDashboardResponse(response)` throw when `response.ok` is false. The loader calls it before reading JSON.
6. Make `showDashboardFailure()` clear outdated rows, announce `Could not load entries. Try again.`, and reveal Retry. The supplied Retry listener starts another load and hides the button.
7. Make `showDashboardEmpty()` announce `No matching entries.`.

Run with the normal fixture, then temporarily set `failNext: true` and Run again. Retry should recover. Set `items: []` to try an empty success, then restore all three events. These edits are experiments, not changes to carry into the next exercise.
