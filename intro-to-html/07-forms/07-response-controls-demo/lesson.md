---
title: "Response Controls: Send a Mission Reply"
slug: response-controls-demo
order: 7
language: html
summary: See a textarea, select menu, and datalist handle detailed, fixed, and suggested answers in a mission reply.
seo_title: "Response Controls: Send a Mission Reply | Introduction to HTML"
seo_description: See a textarea, select menu, and datalist handle detailed, fixed, and suggested answers in a mission reply.
seo_keywords:
  - HTML demo
  - HTML preview
  - response-controls-demo
lesson_type: coding
---

# Response Controls: Send a Mission Reply

Some answers do not fit a single-line input. The completed `index.html` lets the crew write a briefing, choose a role, and use base suggestions without being limited to them. Run it and compare the three controls.

## Read the code

```html
<label for="reading-notes">Reading notes</label>
<textarea id="reading-notes" name="notes" rows="4"></textarea>
<label for="reading-room">Reading room</label>
<select id="reading-room" name="room">
  <option value="quiet">Quiet room</option>
  <option value="group" selected>Group room</option>
</select>
<label for="shelf">Preferred shelf</label>
<input id="shelf" name="shelf" list="shelves">
<datalist id="shelves">
  <option value="Fiction"></option>
  <option value="Travel"></option>
</datalist>
```

The fragment above uses library choices rather than your crew’s reply. The completed `index.html` shows the full form. Use a textarea for multi-line text, a select for a fixed choice, and a datalist for suggestions. `rows` sets the textarea’s visible height, not a maximum answer length. A select normally displays its first option; `selected` lets you choose a different default.

The input’s `list` must match the datalist’s `id`. Unlike a select, it still accepts text that is not in the suggestions. Give each submitted control a `name`; the datalist itself is only a source of suggestions.

## Try the preview

Run the demo. The briefing box allows multiple lines; Rescue is already selected; typing in the base field reveals suggested locations.

## Check your page

Type two lines in the briefing, choose Scout, and type a base not listed in the suggestions. All three should remain editable. Suggestion popups vary by browser; the typed base is allowed even if no popup appears. This page does not send a reply.

## Next

Continue to **Build a Rescue Dispatch Report**. You will recreate the same idea from a smaller starter file.
