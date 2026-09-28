---
title: 'Exercise: Delegate Pantry Actions'
slug: exercise-delegate-list-actions
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Handle removal from existing and newly added pantry rows through one parent listener.
seo_title: 'Exercise: Delegate Pantry Actions | DOM Manipulation with JavaScript'
seo_description: Practice event delegation and event.target.closest to handle dynamically added pantry Remove buttons.
seo_keywords:
- event delegation exercise
- dynamic button click
- event target currentTarget
hints:
- Inside the listener, use event.target.closest("button[data-remove]") and verify the button belongs to event.currentTarget.
---

# Exercise: Delegate Pantry Actions

A pantry list can add rows after the page loads. Add one click listener to the stable list so both the initial and newly created Remove buttons work.

## How it works

The separate ticket-list example listens on its parent; the nested badge can be the click target, so `closest` walks up to its button. During this callback `event.currentTarget` is the ticket list, whereas `event.target` may be the badge itself. Do not remove a row for clicks on plain list text. Keep the Add item button’s provided listener; it creates a new row without attaching another Remove listener.

```javascript
// Different example: tickets, not your pantry.
tickets.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-dismiss]");
  if (!button || !event.currentTarget.contains(button)) return;
  button.closest("li").remove();
});
```

## Try the preview

Run the preview. Remove Rice, then add a new item and remove that one too. If the new row cannot be removed, the listener may have been attached to the original Remove button rather than to `#pantry`.

## Remember

Click listeners came first; delegation builds on them. The listener is on the parent, so adding children does not require adding more listeners.

## Your Tasks

1. Listen for clicks on `#pantry`; remove the clicked row only when the click originates inside its `button[data-remove]`, including the nested span.
2. Make the same parent listener remove a Beans row created by the provided Add item button, without wiring a separate Remove listener to that new row.
