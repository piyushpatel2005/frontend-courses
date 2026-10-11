---
title: "Response Controls Demo: Send a Mission Reply"
slug: response-controls-demo
order: 7
language: html
summary: See a textarea, select menu, and datalist handle detailed, fixed, and suggested answers in a mission reply.
seo_title: "Response Controls Demo: Send a Mission Reply | Introduction to HTML"
seo_description: See a textarea, select menu, and datalist handle detailed, fixed, and suggested answers in a mission reply.
seo_keywords:
  - HTML demo
  - HTML preview
  - response-controls-demo
lesson_type: coding
hints:
  - "This is a completed demo. Run the preview, then read the matching code."
---

# Response Controls Demo: Send a Mission Reply

## Mission

The crew receives a mission alert. The response needs room for a briefing, one preferred role, and a nearby base that can be suggested without being forced.

## What you'll see

A completed response form with a multi-line textarea, a preselected role, and base suggestions.

## Read the code

```html
<textarea rows="4"></textarea>
<select><option selected>Rescue</option></select>
<input list="bases" />
<datalist id="bases">...</datalist>
```

Use a textarea for multi-line text, a select for a fixed choice, and a datalist for suggestions. `rows` sets the textarea’s visible height, not a maximum answer length. A select normally displays its first option; `selected` lets you choose a different default.

The input’s `list` must match the datalist’s `id`. Unlike a select, it still accepts text that is not in the suggestions. Give each submitted control a `name`; the datalist itself is only a source of suggestions.

## Try the preview

Run the demo. The briefing box allows multiple lines; Rescue is already selected; typing in the base field reveals suggested locations.

## Checkpoint

Type two lines in the briefing, choose Scout, and type a base not listed in the suggestions. All three should remain editable. Suggestion popups vary by browser; the typed base is allowed even if no popup appears. This page does not send a reply.

## Next

Continue to **Exercise: Build a Rescue Dispatch Report**. You will recreate the same idea from a smaller starter file.
