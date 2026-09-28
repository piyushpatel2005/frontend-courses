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

Three rules style the same museum note. The browser resolves their conflicting `color` values with selector specificity.

## What you'll see

One note with three matching rules; the ID rule controls its final green color.

## Read the code

```css
p { color: gray; }
.highlight { color: orange; }
#intro { color: green; }
```

## Try the preview

Run the completed page. Change `.highlight` to blue; the note stays green because `#intro` is more specific. Then change `#intro` and observe the final color change. Restore the original values before continuing.

## Checkpoint

All three selectors match the same paragraph. `#intro` is an ID selector, which outranks the class and element selectors here; its `color: green` wins. This demo is already complete.

## Next

Continue to **Exercise: Resolve Specificity** and reproduce the idea from a starter file.
