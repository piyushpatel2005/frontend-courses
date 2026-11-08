---
title: "Click Listener Practice"
slug: click-listener-practice
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Connect a native button to a named click handler that updates library hours.
seo_title: 'Exercise: Check Library Hours | DOM Manipulation with JavaScript'
seo_description: Practice a named addEventListener click callback by updating a library status only after button
  activation.
seo_keywords:
- click listener exercise
- named JavaScript function
- accessible button
hints:
- Pass showHours rather than showHours() to addEventListener.
---

# Check the library hours

The library's button and status region are supplied. Start by writing what a button activation should do, then connect that behavior to the button.

Edit `script.js`. The empty `showHours` function is ready for your response. The supplied `window.showHours` reference lets Submit call it before a listener exists. Calling a function yourself and registering it as a callback are different operations.

## Your Tasks

1. Complete `showHours()` so it sets `#hours` text to `Open until 6 pm`.
2. Register `showHours` for clicks on `#hours-button`, without calling it during setup.

After step 1, Run still says Hours not checked because nothing calls the function yet. Submit can check the function directly. After step 2, activating the button should update the message. Clicking the heading should not.

Keep the native button and its `type="button"`. Run again and test Enter and Space while it is focused; no extra key listener is needed.
