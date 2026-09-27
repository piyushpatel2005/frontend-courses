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

A community garden sign-up card should show the visitor’s chosen plot label as they type, without waiting for a submit button.

## Read the running example

The earlier text-content lesson showed how to change a node safely. Here the value comes from a form control rather than a fixed string, so read it inside the event handler instead of saving it once when the page loads.

The `input` event fires after each edit, and `.value` gives the current string from the control. Set a separate element’s `textContent` to mirror it; unlike `innerHTML`, that treats typed characters as text, not markup.

Open `index.html` to locate the labelled control and output. In `script.js`, notice the selectors point to those IDs, then follow the event from the control to the updated page. `style.css` only changes presentation; it does not cause the behavior. This example is finished already so you can run it before writing the next exercise.

## Try it in the preview

Type “North bed”, erase it, then type “Herbs”. The preview should follow every edit. In `script.js`, find the selected input, the event listener, and the line that writes text. Try changing the fallback wording and run again.

Nothing in this demo is graded. The following exercise asks you to build the same *idea* for a different situation; come back here if the event or state change feels hard to trace.
