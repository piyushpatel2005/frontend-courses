---
title: "Render And Update Itinerary Practice"
slug: render-and-update-itinerary-practice
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Render workshop sessions from state and update a time without duplicate rows.
seo_title: Build the workshop itinerary | DOM Workshop Planner
seo_description: Render workshop sessions from state and update a time without duplicate rows. Practice in a runnable JavaScript DOM workshop preview.
seo_keywords:
  - JavaScript DOM workshop planner
  - exercise render and update itinerary
  - accessible itinerary
---

# Build the workshop itinerary

The studio demo kept one array as its source of truth. Apply that pattern to the community workshop planner; the starter already has two session objects and an empty list.

For example, a **different** page could create one library notice from state:

```javascript
const notice = document.createElement("p");
notice.textContent = `Due: ${loan.dueDate}`;
document.querySelector("#notices").append(notice);
```

Your row helper builds a node; the renderer inserts it. This separates a prepared value from a visible update. To inspect task 1 before the list works, try `console.log(createSessionRow(sessions[0]).textContent)` temporarily, then remove the log. Run the starter first; the list is empty. Edit `script.js` and check the preview after each step. For the text-safety check, temporarily give the second session a title containing `<em>` characters and rerender; restore the title afterward so the next lesson begins with the ordinary Repair café entry.

The supplied `window.workshopSessions` is a narrow reference to the same array, used by preview checks to try temporary titles. It is not another copy of the sessions. Keep the original seed titles after your own experiments.

## Your Tasks

1. Complete `createSessionRow(session)` to return one detached `li` showing the session’s time, title, and track as literal text. Keep its title in `data-title` for the later filter. Do not insert the row here.
2. Complete `renderSessions()` to replace the list with one row per session using your helper. The supplied call runs it at load; calling it again must not duplicate rows.
3. Wire the update button to change the first time to 10:00 and rerender without adding duplicate rows.

After the update, two rows should still appear and the first should read 10:00.
