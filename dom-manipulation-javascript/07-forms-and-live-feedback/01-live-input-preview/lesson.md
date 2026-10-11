---
title: Read a field while someone types
slug: live-input-preview
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: See how the input event updates a garden plot badge on every edit.
seo_title: Read a field while someone types | Beginner DOM Manipulation with JavaScript
seo_description: Learn to read input.value as someone types and update a live preview with textContent, without waiting for form submission.
seo_keywords:
- JavaScript input event
- live input preview
- input.value DOM
---

# Read a field while someone types

The garden plot badge should follow its field as the visitor edits it. The event lessons showed how to wait for an action; now the action is a text edit rather than a click.

The `input` event fires after a user edit, including typing, pasting, and deleting. Read the input's `.value` inside the callback so you get the current string. Setting `.value` from JavaScript does not itself fire an input event.

```javascript
plot.addEventListener("input", () => {
  badge.textContent = plot.value.trim() || "Untitled plot";
});
```

`trim()` removes surrounding whitespace. If that leaves an empty string, `||` chooses the fallback. `textContent` keeps a label such as `<garden>` as literal text. The field's text is data, not HTML to insert.

## Try the preview

Run the finished example. Type North bed, erase it, then paste Herbs. The badge should follow each edit and return to Untitled plot when empty. Try spaces alone as well.

Change the fallback string in `script.js`, run again, and clear the field to see it. Restore the original wording before the volunteer exercise. Use made-up labels; nothing is saved or sent anywhere.
