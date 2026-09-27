---
title: 'Exercise: Control Workshop Notifications'
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

# Exercise: Control Workshop Notifications

A workshop has a one-time welcome, a bell that can be muted, and a control panel with standard and private actions. Give each control the precise click behavior it needs.

## How it works

The museum demo used a named `ring` callback for removal; here is a **different** bus-stop example showing the same lifecycle. The named function passed to removal must be the exact function originally registered. For nested controls, clicks travel from the button to its panel unless that button explicitly stops propagation. Do not stop propagation on the panel itself or on every button, and keep the provided native buttons instead of adding keyboard handlers to noninteractive elements.

```javascript
// Different example: a bus-stop notice, not the workshop.
notice.addEventListener("click", announce, { once: true });
alarm.addEventListener("click", soundAlarm);
mute.addEventListener("click", () => alarm.removeEventListener("click", soundAlarm));
privateButton.addEventListener("click", event => event.stopPropagation());
```

## Try the preview

Run the preview: Welcome increments only once. Bell increments until Muting stops it. Standard writes Standard Panel, but Private writes Private without Panel. Try Tab and Enter on the buttons to confirm native activation is still intact.

## Remember

The earlier event-target lesson used bubbling to *receive* a child click on a parent. This exercise lets one private child stop that route while leaving standard clicks free to bubble.

## Your Tasks

1. Add a click listener to `#welcome` with `{ once: true }` so `#welcome-count` changes from `Welcomes: 0` to `Welcomes: 1` on the first click and never counts higher.
2. Register a named Bell click handler that increments `#bell-count` on each click.
3. Clicking `#mute` must remove that same Bell handler so later Bell clicks no longer increment the count.
4. Let `#standard` clicks write `Standard Panel` to `#actions` by bubbling to `#controls`.
5. Make `#private` write `Private` without adding `Panel` by stopping only that child click’s propagation.
