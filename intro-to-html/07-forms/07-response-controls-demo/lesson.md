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

the crew receives a mission alert. The response needs room for a briefing, one preferred role, and a nearby base that can be suggested without being forced.

## What you'll see

A completed response form with a multi-line textarea, a preselected role, and base suggestions.

## Read the code

```html
<textarea rows="4"></textarea>
<select><option selected>Rescue</option></select>
<input list="bases" />
<datalist id="bases">...</datalist>
```

Use a textarea for longer words, a select for a fixed choice, and a datalist for suggestions.

## Try the preview

Run the demo. The briefing box allows multiple lines; Rescue is already selected; typing in the base field reveals suggested locations.

## Checkpoint

Use the preview to connect each visible result to the HTML that created it. This is a completed demonstration, so you do not need to edit the code.

## Next

Continue to **Exercise: Build Mission Response Controls**. You will recreate the same idea from a smaller starter file.
