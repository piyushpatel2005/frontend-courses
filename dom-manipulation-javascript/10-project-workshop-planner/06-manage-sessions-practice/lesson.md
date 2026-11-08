---
title: "Manage Sessions Practice"
slug: manage-sessions-practice
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
const visible = Array.from(
  document.querySelectorAll("#books li")
)
  .filter(book => !book.hidden).length;
document.querySelector("#books-count").textContent =
  `${visible} books shown`;
```

Your count needs to stay correct after typing, adding, updating, and removing. Keep `createSessionRow` and `renderSessions` from the earlier stage; extend the renderer to attach Remove buttons to the prepared rows. The row’s supplied `data-title` lets you search the title without accidentally matching a time or button label. Keep the data in `sessions` and rerender from it.

Filter only session titles, not their times, track labels, or Remove-button text. Trim surrounding spaces. After removing a row, return focus to the filter so keyboard users can continue. Duplicate titles remain separate entries; remove the clicked row by position.

When `renderSessions()` starts calling your filter, select the query and count elements before the first render. You can move the existing `renderSessions()` call to the bottom of `script.js`, after those new `const` declarations. Keep just one initial call; otherwise a function may try to read a variable before it has been initialized.

## Your Tasks

1. Filter itinerary rows by title while typing, ignoring case; clearing the query restores rows and a nonmatch does not delete stored sessions.
2. Give each rendered row a descriptive native `button.remove-session`, including rows added through the form.
3. Delegate Remove clicks from `#sessions` to delete the matching object from `sessions` and rerender, including clicks on text nested inside the button.
4. When no sessions remain, make Update announce `No sessions to update.`. The starter’s empty guard already prevents access to a missing object; add the feedback there.
5. Give `#session-count` `role="status"` and `aria-live="polite"`.
6. Update the visible-row count on load, filtering, adding, updating, and removal, including zero.
7. Announce the removed title in `#session-status`.
8. After removal, focus `#session-query` so the keyboard user can continue.

Add a session, filter for its title, remove it with the button, and clear the search. The other sessions should still be available. The workshop planner is complete.
