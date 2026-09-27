---
title: Listen for Clicks with a Named Handler
slug: click-listeners-and-named-handlers
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Register a named click handler and update a status when a button is activated.
seo_title: Listen for Clicks with a Named Handler | DOM Manipulation with JavaScript
seo_description: Learn addEventListener click handling with a named function and a native button in a JavaScript
  DOM demo.
seo_keywords:
- addEventListener click
- named event handler
- button interaction
---

# Listen for Clicks with a Named Handler

A park information card starts closed. Visitors can press a real button to reveal that the trail is open; the page must wait for the action instead of updating immediately.

## How it works

`addEventListener("click", showStatus)` registers the function; there are no parentheses after `showStatus` because the browser should call it later. A named function is easy to reuse or remove and keeps the listener line short. The function changes the status with `textContent`. A native `<button type="button">` is focusable and works with mouse, touch, Enter, and Space without writing separate keyboard-click code.

```javascript
function showStatus() {
  document.querySelector("#status").textContent = "Trail is open";
}
document.querySelector("#check").addEventListener("click", showStatus);
```

## Try the preview

Run the preview: before clicking, the status says Not checked. Activate Check trail and it becomes Trail is open. Try calling `showStatus()` on the listener line, then restore the function reference: the status changes at page load instead of waiting.

## Remember

Previously, scripts changed the page as soon as it loaded. A listener delays a DOM update until an interaction occurs.

The following exercise uses the same idea in a different setting.
