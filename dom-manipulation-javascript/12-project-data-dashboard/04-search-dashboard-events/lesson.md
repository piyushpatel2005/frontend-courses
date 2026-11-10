---
title: "Search dashboard events"
slug: search-dashboard-events
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Add a labelled search form and encoded server-style filtering to the event dashboard.
seo_title: "Search dashboard events | JavaScript DOM"
seo_description: Build event search using a labelled form, URLSearchParams, and empty-state feedback without page navigation.
seo_keywords:
  - URLSearchParams task
  - event filtering
  - accessible search
---

Your previous dashboard is carried forward, including the same events and completed rendering, status, and Retry helpers. Only search is unfinished. The label, input, and form are supplied in HTML.

Make `requestURL()` return a URL first. Then use that value in the loader. Finally connect form submission to a fresh load. Filtering happens inside the offline fixture; do not add another filter to `render()` or rebuild the existing empty-state code.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Complete `requestURL()`: trim the search value, encode a nonempty value as `q` with `URLSearchParams`, and return `API_URL` without a query for blank input.
2. Change the request in `loadEntries()` to use `window.requestURL()` instead of the fixed `API_URL`.
3. In the supplied form listener, prevent navigation and assign the new `window.loadEntries()` Promise to `window.lastLoad`.

Search `Repair`, then `missing`, then submit a blank field. The existing loader should show one row, no rows with an empty message, and all three rows respectively. The trail demos use different data intentionally; keep the event fixture across exercise stages.
