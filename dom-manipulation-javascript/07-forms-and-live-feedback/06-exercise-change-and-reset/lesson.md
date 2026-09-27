---
title: Sync a preference and its reset state
slug: exercise-change-and-reset
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Update a preference summary on change and restore it correctly after form reset.
seo_title: Sync a preference and its reset state | Beginner DOM Manipulation with JavaScript
seo_description: Practice JavaScript change and reset handlers to keep a form control and its displayed preference synchronized.
seo_keywords:
- JavaScript form reset exercise
- change event practice
- sync form UI
---

# Sync a preference and its reset state

Build the same reliable interaction for a reading room’s lighting preference. The HTML already has the default “Warm”; JavaScript still needs to keep its display in sync. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

Your earlier event handlers responded after one action. This form has two routes to the same display—choosing a new option and restoring defaults—so both must update the summary.

`change` fires when a committed selection changes, unlike the per-keystroke `input` event. A `reset` event arrives before the browser restores form values. Schedule the UI update in a microtask with `queueMicrotask` so the preview reads the restored default, or explicitly use the control’s `defaultValue` inside the reset handler.

A checkbox uses a different property but the same synchronization idea:

```javascript
const alerts = document.querySelector("#alerts");
const alertsState = document.querySelector("#alerts-state");
function showAlerts() {
  alertsState.textContent = alerts.checked ? "Alerts on" : "Alerts off";
}
alerts.addEventListener("change", showAlerts);
```

For a form with Reset, remember the reset event runs *before* controls return to defaults. Your reading-room select needs both event paths, not a one-time assignment.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. Keep a labelled `#lights` select inside `#lights-form` with Warm as its default, a reset button, and `#lights-summary`.
2. On each committed selection change, update the summary to match the selected value.
3. After changing to another option and resetting the form, restore both the control and the summary to Warm.

Select Cool, then Bright, then reset. The summary must agree with the control each time. If reset leaves “Bright” on screen, your listener may have read the select before its default was restored.
