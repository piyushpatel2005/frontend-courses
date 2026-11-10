---
title: "Add and remove directory members"
slug: add-and-remove-members
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Finish the directory: submit labelled member details, safely create cards,
  and remove old or new cards.'
seo_title: "Add and remove directory members | JavaScript DOM"
seo_description: Finish an accessible directory with safe text insertion, delegated
  removal, and synchronized details and search.
seo_keywords:
- JavaScript DOM manipulation
- community directory add remove task
- browser DOM project
---

Finish the community directory by adding members through a labelled form and removing old or new cards. The starter is the completed selection-and-search step, with a form and Remove buttons in its HTML; those new controls have no handlers yet. The seed-swap demo showed the event flow using different elements.

Create DOM nodes for submitted data. Put untrusted names and skills into `textContent`, not `innerHTML`. Listen for removals on the stable `#members` parent, not just its initial buttons. Re-run the existing filter after any addition or removal so the count and empty state remain truthful. Filtering already clears details when it hides the selected card; removing a selected card must also clear its stale detail view. The existing View handler will also work for new cards because it listens on the same parent.

Here is a smaller example from a different project: a reading log can create a title safely and hear a Remove click from a button added later.

```javascript
const entry = document.createElement("li");
const title = document.createElement("span");
title.textContent =
  document.querySelector("#book-title").value;
entry.append(title);
const remove = document.createElement("button");
remove.type = "button";
remove.className = "remove-book";
remove.textContent = "Remove";
entry.append(remove);
document.querySelector("#reading-log").append(entry);

document.querySelector("#reading-log")
  .addEventListener("click", (event) => {
    const button =
      event.target.closest("button.remove-book");
    if (button && event.currentTarget.contains(button)) {
      button.closest("li").remove();
    }
  });
```

Your directory needs this safe creation and parent-listener pattern plus buttons, selection details, form feedback, and the existing search. If a selected card disappears, clear its details rather than describing someone who is no longer there.

The starter already includes the labelled form and original Remove buttons. Its delegated View listener also works on newly created cards; leave those in place. `createMemberCard` prepares a node without inserting it, so you can test that helper before wiring submission. Edit `script.js`, Run to inspect each change, then Submit. The reference resets the form and focuses the name field after a successful addition; this convenience does not reset the active search.

This directory permits matching names, because two neighbors may share a name. Each submission creates a separate card; removal acts on the clicked card, not the first matching name. A filter stays active after additions, so a new member may be present but hidden.

## Your Tasks

1. Prevent default navigation whenever `#member-form` is submitted.
2. Reject a blank or whitespace-only name or skill with feedback and no new card.
3. Complete `createMemberCard(name, skill)` to return one detached card with literal name and skill text, matching data attributes, a View button, and a named Remove button.
4. On valid submission, append the card returned by your helper to `#members`.
5. Reapply the current search after an addition so the new card’s visibility, result count, and empty state agree.
6. Announce the new member in `#form-status` after adding the card.
7. Delegate Remove clicks on `#members` for both original and future cards, including clicks inside a button.
8. Announce the removed member in `#form-status`.
9. If the removed member was selected, restore the default name and skill details. Removing another member must keep the current details.
10. After removal, refresh the result count and empty state for the current query.
11. After removal, focus `#member-search` so keyboard users can continue.

Try adding `<em>Ada</em>` with the skill “Painting.” Search for `painting`, view the new card, remove it, then clear the search. The markup remains literal, the detail resets, and the original cards return. Your directory now supports selection, search, additions, and removal.
