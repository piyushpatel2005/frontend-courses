---
title: "Text Content And Safe HTML"
slug: text-content-and-safe-html
order: 1
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Display visitor text literally instead of parsing it as HTML.
seo_title: Safe text and HTML | DOM Manipulation with JavaScript
seo_description: Display visitor text literally instead of parsing it as HTML.
seo_keywords:
- JavaScript DOM
- textContent and innerHTML
- browser preview
- safe text rendering
---

A visitor submits a note containing angle brackets. Show the note as written, without turning any of it into HTML.

`textContent` reads or writes an element's text. Assigning it replaces the element's children with plain text. `innerHTML` instead parses a string as markup, which can create elements and introduce unsafe content. Use `textContent` for visitor input and remote data. Reserve `innerHTML` for markup you control and trust.

```javascript
const boardNote = document.querySelector("#board-note");
const visitorNote = "I brought <seedlings> today";
boardNote.textContent = visitorNote;
```

![The same example string becomes literal text through textContent and an element through innerHTML](text-content-vs-inner-html.svg)

Run the preview. It prints `<seedlings>` rather than creating an element with that name. Change the string in `script.js` to `"<strong>hello</strong>"` and Run: the tags should appear as text, not bold formatting. Restore the original note afterward.

Reading `textContent` gives the descendant text, including hidden descendants. It does not return HTML source. In the next exercise, you will use it for a museum caption.
