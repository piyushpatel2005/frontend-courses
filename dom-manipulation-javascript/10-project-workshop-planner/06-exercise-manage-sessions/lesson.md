---
title: Finish the workshop planner
slug: exercise-manage-sessions
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Filter sessions, remove old and new rows, and announce visible counts.
seo_title: Finish the workshop planner | DOM Workshop Planner
seo_description: Filter sessions, remove old and new rows, and announce visible counts. Practice in a runnable JavaScript DOM workshop preview.
seo_keywords:
  - JavaScript DOM workshop planner
  - exercise manage sessions
  - accessible itinerary
---

# Finish the workshop planner

The earlier exercise already gave the workshop a working form and itinerary; this starter includes that completed state plus an unwired filter field. Finish the project without discarding the previous behavior.

Another page might announce only **visible** reading-list entries:

```javascript
const visible = Array.from(document.querySelectorAll("#books li"))
  .filter(book => !book.hidden).length;
document.querySelector("#books-count").textContent = `${visible} books shown`;
```

Your count needs to stay correct after typing, adding, updating, and removing. Keep the data in `sessions` and have the UI rerender from it. Use native buttons for Remove actions rather than clickable spans.

## Your Tasks

1. Filter itinerary rows by title as the visitor types, case-insensitively; clearing the query restores all remaining sessions, and zero matches leaves the stored sessions intact.
2. Give every rendered row a descriptive Remove button and delegate clicks from `#sessions` to remove the matching object from `sessions`; this must work for initial and newly added rows, including keyboard activation.
3. Mark `#session-count` as a live status region and announce the number of visible sessions on load and after filtering, adding, and removal, including zero.

Add a session, filter for its title, remove it with the button, and clear the search. The other sessions should still be available. The workshop planner is complete.
