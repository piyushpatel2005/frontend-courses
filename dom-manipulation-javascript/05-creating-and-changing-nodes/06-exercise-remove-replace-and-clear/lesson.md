---
title: 'Exercise: Refresh a Museum Display'
slug: exercise-remove-replace-and-clear
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Remove an expired display, replace an inaccurate label, and empty a draft list safely.
seo_title: 'Exercise: Refresh a Museum Display | DOM Manipulation with JavaScript'
seo_description: Practice remove, replaceWith and replaceChildren on museum display nodes without using innerHTML.
seo_keywords:
- remove node exercise
- replaceWith practice
- safe DOM clear
hints:
- replaceChildren() with no arguments empties a parent without deleting it.
---

# Exercise: Refresh a Museum Display

A museum display has an expired announcement, a label with the wrong date, and a draft list. Fix the exhibit without rewriting the entire page as HTML.

## How it works

In the separate recipe example below, the original recipe cards remain in the DOM except for the one deliberately removed or replaced. The replacement is a created element with text set safely. Clearing the scratch parent does not delete the parent itself. Apply those three decisions to the exhibit’s IDs.

```javascript
// Different example: recipe cards, not the exhibit.
document.querySelector("#old-recipe").remove();
const corrected = document.createElement("li");
corrected.textContent = "Roast for 25 minutes";
document.querySelector("#wrong-step").replaceWith(corrected);
document.querySelector("#recipe-drafts").replaceChildren();
```

## Try the preview

Run the preview: Last month’s tour disappears, Gallery opens at 10 am replaces the old hours in the same spot, and the draft list is blank. Keep the final Sculpture walk item visible.

## Remember

Earlier, `append`, `prepend`, and `insertBefore` added nodes. Here `remove`, `replaceWith`, and `replaceChildren` cover the opposite direction. Choose the smallest change that matches the job.

## Your Tasks

1. Remove `#expired` from the exhibit list while keeping `#exhibits`.
2. Replace `#old-hours` in place with a newly created `li` whose `textContent` is `Gallery opens at 10 am`; preserve Sculpture walk.
3. Empty `#drafts` without removing that list element or interpreting strings as HTML.
