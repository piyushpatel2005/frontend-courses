---
title: Build a live name preview
slug: exercise-live-input-preview
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build a name preview that updates as someone types, with a clear blank-state message.
seo_title: Build a live name preview | Beginner DOM Manipulation with JavaScript
seo_description: Practice the JavaScript input event by reading a text field and safely updating a name preview and empty-state message.
seo_keywords:
- JavaScript input event exercise
- live name preview
- textContent practice
---

# Build a live name preview

Now make an introduction card for a volunteer. The starter already has a labelled input and a preview, but typing does not update the page yet. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

The earlier text-content lesson showed how to change a node safely. Here the value comes from a form control rather than a fixed string, so read it inside the event handler instead of saving it once when the page loads.

The `input` event fires after each edit, and `.value` gives the current string from the control. Set a separate element’s `textContent` to mirror it; unlike `innerHTML`, that treats typed characters as text, not markup.

A different control could preview a preferred color:

```javascript
const color = document.querySelector("#color");
const colorNote = document.querySelector("#color-note");
color.addEventListener("input", () => {
  colorNote.textContent = color.value || "No color yet";
});
```

Notice that the listener reads the *current* value inside its callback. The exercise uses different elements and copy; adapt the pattern rather than pasting these selectors.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. On each `input`, replace `#greeting` with the current name as literal text (including angle brackets); changing the name should update it again.
2. When the input is cleared, restore “friend” in `#greeting`.

Type a name, then erase it. The visible greeting should return to “friend” without requiring a click. If nothing changes, check that your listener is on the input, not the paragraph.
