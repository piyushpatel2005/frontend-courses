---
title: Add and remove community directory cards
slug: exercise-accessible-add-remove-flow
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: 'Finish the directory: submit labelled member details, safely create cards,
  and remove old or new cards.'
seo_title: Add and remove community directory cards | DOM Manipulation with JavaScript
seo_description: Finish an accessible directory with safe text insertion, delegated
  removal, and synchronized details and search.
seo_keywords:
- JavaScript DOM manipulation
- community directory add remove exercise
- browser DOM project
---


# Add and remove community directory cards

Finish the community directory by adding members through a labelled form and removing old or new cards. The starter is the completed selection-and-search step, with a form and Remove buttons in its HTML; those new controls have no handlers yet. The seed-swap demo showed the event flow using different elements.

Create DOM nodes for submitted data. Put untrusted names and skills into `textContent`, not `innerHTML`. Listen for removals on the stable `#members` parent, not just its initial buttons. Re-run the existing filter after any addition or removal so the count and empty state remain truthful. Filtering already clears details when it hides the selected card; removing a selected card must also clear its stale detail view. The existing View handler will also work for new cards because it listens on the same parent.

Here is a smaller example from a different project: a reading log can create a title safely and hear a Remove click from a button added later.

```javascript
const entry = document.createElement("li");
const title = document.createElement("span");
title.textContent = document.querySelector("#book-title").value;
entry.append(title);
const remove = document.createElement("button");
remove.type = "button";
remove.className = "remove-book";
remove.textContent = "Remove";
entry.append(remove);
document.querySelector("#reading-log").append(entry);

document.querySelector("#reading-log").addEventListener("click", (event) => {
  if (event.target.matches("button.remove-book")) {
    event.target.closest("li").remove();
  }
});
```

Your directory needs this safe creation and parent-listener pattern plus buttons, selection details, form feedback, and the existing search. If a selected card disappears, clear its details rather than describing someone who is no longer there.

The starter already includes the labelled form and original Remove buttons. Its delegated View listener also works on newly created cards; leave those in place while you build the add and remove flow.

## Your Tasks

1. Prevent default navigation whenever `#member-form` is submitted.
2. Reject a blank or whitespace-only name or skill with feedback and no new card.
3. On valid submission, create a card with safe literal name and skill text, a View button, and a named Remove button.
4. Announce the new member in `#form-status` after adding the card.
5. Delegate Remove clicks on `#members` for both original and newly inserted cards.
6. Announce the removed member in `#form-status`.
7. If the removed member was selected, restore the default name and skill details.
8. After removal, refresh the search result count and empty state for the current query.

Try adding `<em>Ada</em>` with the skill “Painting.” Search for `painting`, view the new card, remove it, then clear the search. The markup remains literal, the detail resets, and the original cards return. Your directory now supports selection, search, additions, and removal.
