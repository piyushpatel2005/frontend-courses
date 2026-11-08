---
title: "Handle Alert States Practice"
slug: handle-alert-states-practice
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Give an alert viewer honest loading, empty, HTTP error, and network error feedback.
seo_title: 'Fetch loading, empty and errors | Exercise'
seo_description: Give an alert viewer honest loading, empty, HTTP error, and network error feedback.
seo_keywords: HTTP error, network error, loading state
---

# handle alert states

The trail board must distinguish no alerts from a failed lookup. Its selector chooses fixed local scenarios; these are not current trail conditions.

`loadAlerts()` already owns the request, JSON parsing, and `try/catch`. A thrown error skips the remaining `try` statements and reaches `catch`. The empty helper runs only after a successful empty array. Keep status messages separate from the loop that creates rows.

Edit `script.js`, Run to inspect the preview, then Submit to check your work. The HTML, styles, offline fixture, and event/request plumbing are supplied. Functions assigned to `window` can also be called independently by the checks.

## Your Tasks

1. Show `Checking alerts…` in `showAlertLoading()`.
2. Complete `renderAlerts(alerts)` by appending one text-only `li` per title; clearing the list is supplied.
3. Make `showEmptyAlerts()` announce `No alerts right now.`.
4. Make `checkAlertResponse(response)` throw an Error when `response.ok` is false, before the supplied loader reads JSON.
5. Make `showAlertFailure()` clear the list and announce `Could not load alerts.`. The supplied catch calls it for a rejected request or a thrown HTTP error.

Try Alerts, Empty, HTTP error, and Network failure. A 503 Response is a delivered HTTP failure; a network rejection has no Response. Both end in the error state. The supplied loader announces `Alerts loaded.` after a nonempty success.
