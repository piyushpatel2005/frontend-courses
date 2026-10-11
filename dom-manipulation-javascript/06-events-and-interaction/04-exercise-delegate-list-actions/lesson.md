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

# Delegate pantry removal

The pantry starts with Rice. The supplied Add item button builds a Beans row, but neither row's Remove button has a handler yet.

First complete the supplied `removePantryItem(event)` function. It receives a clicked `target` and the list as `currentTarget`. Use `closest("button[data-remove]")` to handle clicks on nested labels, then check containment before removing the button's closest `li`. An early `return` leaves unrelated clicks alone.

Next register that function on the pantry list. The supplied `window.removePantryItem` reference is only for calling the helper independently; it does not register a listener.

## Your Tasks

1. Complete `removePantryItem(event)` to remove the matching button's row only when the button is inside `event.currentTarget`. Ignore ordinary row clicks and buttons outside that list.
2. Register that handler once for clicks on `#pantry`, so existing and later-added buttons work through the same listener.

Edit `script.js`, then Run. Step 1 alone does not make the buttons work, but Submit can check the handler directly. After step 2, remove Rice, add Beans, and remove Beans by clicking its nested label. Clicking plain row text must still do nothing.
