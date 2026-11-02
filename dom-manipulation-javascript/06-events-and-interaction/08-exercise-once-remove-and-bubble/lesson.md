---
title: Control Workshop Notifications
slug: exercise-once-remove-and-bubble
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Set a one-time notice, disable an existing listener, and stop one child click from bubbling.
seo_title: 'Exercise: Control Workshop Notifications | DOM Manipulation with JavaScript'
seo_description: Practice once, removeEventListener and selective stopPropagation while keeping workshop buttons
  accessible.
seo_keywords:
- once listener exercise
- remove named listener
- bubbling propagation exercise
hints:
- Use the same function name when adding and removing the Bell listener. Stop propagation only on Private.
---

# Control workshop notifications

The workshop has a welcome, a bell, and a panel with Standard and Private actions. The supplied `setupWorkshop(root)` selects controls within the workshop's `main` element. The call below it sets up the visible page once.

All your edits go inside that function in `script.js`. The counters, named `ringBell` handler, and child label updates are supplied. `root.querySelector` works like `document.querySelector`, but searches only inside `root`. Submit can call the same setup function on fresh controls, so each check starts with its own listeners and counters.

## Your Tasks

1. Register a Welcome click listener with `{ once: true }` that increments `welcomes` and displays `Welcomes: ` plus that count in `#welcome-count`.
2. Register the supplied `ringBell` as the Bell click listener.
3. Make a Mute click remove that same Bell listener.
4. Register a click listener on `#controls` that appends `Panel ` to the supplied `output` text. Standard's own label update is already supplied.
5. Add a Private click listener that calls `stopPropagation()`, without calling `preventDefault()`. Its label update is supplied too.

Run and try each control after its step. Standard should produce Actions: Standard Panel; Private should produce Actions: Private. Run again to reset the log and reattach listeners. Submit checks each task with fresh controls, rather than relying on clicks from a previous check.
