---
title: Add live search to the community directory
slug: exercise-live-search-and-empty-state
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Filter the directory’s member cards as visitors type and report when no one
  matches.
seo_title: Add live search to the community directory | DOM Manipulation with JavaScript
seo_description: Add case-insensitive live search, a visible empty state, and an announced
  result count.
seo_keywords:
- JavaScript DOM manipulation
- community directory search exercise
- browser DOM project
---


# Add live search to the community directory

The starter is the completed card-selection directory from step one, with a labelled search field and status elements added. Selection already works; focus on filtering rather than rewriting it. The preceding bicycle-route demo used different IDs and route data.

Keep every member card in the DOM. On each `input` event, compare a trimmed, case-insensitive query against both its name and skill. Toggle `hidden` on each card, update the live count, and show the empty-state paragraph only when none match. Clearing the field must restore all cards.

Recall the route-search demo: filtering changes visibility, not the underlying list. In a different recipe index, a normalized query could drive one card like this:

```javascript
const query = document.querySelector("#recipe-query").value.trim().toLowerCase();
const recipe = document.querySelector("[data-dish]");
recipe.hidden = !recipe.dataset.dish.toLowerCase().includes(query);
```

An empty string matches every dish. For the directory, repeat the comparison for *every* card, check both name and skill, count visible cards, and update the status and empty state together.

## Your Tasks

1. Make `#result-count` a polite live status with `role="status"` and `aria-live="polite"`.
2. Filter the three existing cards by name or skill on each input, ignoring case and surrounding spaces; clearing the query restores all three.
3. Update `#result-count` to report the visible number of members after a search.
4. Show `#empty-state` only when no cards match, and hide it again when results return.
5. If filtering hides the selected card, clear its selected state and restore the detail panel’s default text.

Try `BIKE`, then `zzz`, then clear. The next step starts from this solution, so your selected-card behavior remains intact.
