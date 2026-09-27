---
title: Build a neighborhood task board
slug: exercise-dynamic-list-capstone
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build a neighborhood task board with safe additions and delegated removals.
seo_title: Build a neighborhood task board | Beginner DOM Manipulation with JavaScript
seo_description: 'Practice a dynamic task list: validate a form, create text-only entries, and remove
  items through a delegated click handler.'
seo_keywords:
- JavaScript task list project
- add remove DOM nodes
- delegated click exercise
---

# Build a neighborhood task board

Your final build is a neighborhood task board. Reuse form validation, node creation, safe text insertion, and events from the earlier modules. The starter includes one task so you can test deletion before adding anything. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

This combines the earlier node-creation chapter with submit handling, accessible feedback, and event delegation. The parent list exists before any additions, so it is a dependable place for the click listener even when new buttons arrive later.

A form `submit` handler creates a new `<li>` with `document.createElement`. Put user-supplied text in `textContent`, never an HTML template, so characters such as `<` stay literal. One `click` listener on the stable parent list can handle Remove buttons on both original and future items: use `event.target.closest("button")`, confirm it belongs to this list, then remove its nearest list item.

An attendance board can add a name without parsing typed markup:

```javascript
const attendees = document.querySelector("#attendees");
const person = document.querySelector("#person");
const row = document.createElement("li");
const name = document.createElement("span");
name.textContent = person.value.trim();
row.append(name);
attendees.append(row);
```

Your task board must also reject blank submissions, create a remove button for each new row, and delegate removal from the stable list. Do not attach a listener only to the starter button; newly created buttons would then do nothing.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. Keep the labelled `#task-name` input, `#task-form`, live `#task-status`, and starter task with its Remove button.
2. Reject a blank or whitespace-only submission without navigation or adding a task; give feedback in the status region.
3. Submit a new task, creating an item with a Remove button; preserve typed `<` characters literally as text.
4. Use one delegated listener on `#tasks` so Remove works for both the starter and dynamically added tasks.

Add a task containing `<b>` characters, remove it, and then remove the original task. You should see plain angle brackets rather than a bold element; if only the original button works, move the listener to the list.

You now have a page that accepts input, responds without navigation, and lets visitors undo their own entries.
