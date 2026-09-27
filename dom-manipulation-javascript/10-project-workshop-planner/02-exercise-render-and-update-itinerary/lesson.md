---
title: Build the workshop itinerary
slug: exercise-render-and-update-itinerary
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

The notice is not the workshop solution: your itinerary needs a loop, a rerender, and a button listener. Run the starter first; the list is empty. Edit `script.js` and check the preview after each step. For the text-safety check, temporarily give the second session a title containing `<em>` characters and rerender; restore the title afterward so the next lesson begins with the ordinary Repair café entry.

## Your Tasks

1. Implement and call `renderSessions()` to render two `#sessions li` rows at load, one for each session, showing its time and track.
2. In that renderer, include session titles as literal text; a title like `<em>Repair café</em>` must display its brackets without creating an `em` element.
3. Wire the update button to change the first time to 10:00 and rerender without adding duplicate rows.

After the update, two rows should still appear and the first should read 10:00.
