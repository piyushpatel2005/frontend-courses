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

The earlier exercise already gave the workshop a working form and itinerary; this starter includes that completed state plus an unwired filter field and an empty count paragraph. The existing itinerary, form, and accessibility attributes are setup, not steps to redo. Finish the project without discarding the previous behavior.

Another page might announce only **visible** reading-list entries:

```javascript
const visible = Array.from(document.querySelectorAll("#books li"))
  .filter(book => !book.hidden).length;
document.querySelector("#books-count").textContent = `${visible} books shown`;
```

Your count needs to stay correct after typing, adding, updating, and removing. Keep the data in `sessions` and have the UI rerender from it. Use native buttons for Remove actions rather than clickable spans.

## Your Tasks

1. Filter itinerary rows by title while typing, ignoring case; clearing the query restores rows and a nonmatch does not delete stored sessions.
2. Give each rendered row a descriptive native `button.remove-session`, including rows added through the form.
3. Delegate Remove clicks from `#sessions` to delete the matching object from `sessions` and rerender.
4. When no sessions remain, make Update announce `No sessions to update.` rather than accessing a missing object.
5. Make `#session-count` a polite live status region and update its visible-row count on load, filtering, adding, and removal, including zero.

Add a session, filter for its title, remove it with the button, and clear the search. The other sessions should still be available. The workshop planner is complete.
