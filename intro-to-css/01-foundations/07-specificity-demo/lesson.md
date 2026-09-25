---
title: "Specificity Demo: Resolve a Style Conflict"
slug: specificity-demo
order: 7
language: html
summary: See an ID selector override class and element color rules on one exhibit note.
seo_title: "Specificity Demo: Resolve a Style Conflict | Introduction to CSS"
seo_description: See an ID selector override class and element color rules on one exhibit note.
seo_keywords: [CSS demo, CSS preview, specificity-demo]
lesson_type: coding
hints:
  - "This completed example is for reading and previewing before the exercise."
---

# Specificity Demo: Resolve a Style Conflict

## Mission

Three archivists each styled the same note. The completed example shows the browser resolving the conflict with selector specificity.

## What you'll see

One note with three matching rules; the ID rule controls its final green color.

## Read the code

```html
p { color: gray; }
.highlight { color: orange; }
#intro { color: green; }
```

## Try the preview

Run the completed page. Change `.highlight` to blue; the note stays green because `#intro` is more specific. Then change `#intro` and observe the final color change. Restore the original values before continuing.

## Checkpoint

Identify the selector, property, and value that created the visible change. Nothing needs editing in this demo.

## Next

Continue to **Exercise: Resolve Specificity** and reproduce the idea from a starter file.
