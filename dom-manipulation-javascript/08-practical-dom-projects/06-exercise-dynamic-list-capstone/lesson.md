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

Build a neighborhood task board that can change throughout the day. Reuse form validation, node creation, safe text insertion, and events from the earlier modules. The starter includes one task so you can test deletion before adding anything.

## Transfer the pattern

The repair-café demo had two event paths. Submission created a safe text row; a click bubbling to the list removed a row. Build those paths separately here. `closest("button")` also catches clicks on text wrapped in a child element, and `contains` checks that the button belongs to this list.

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

Run the starter, then edit `script.js`. Run after each task to inspect the preview; Submit checks your changes in task order.

Repeated task titles are allowed; remove only the row whose button was activated. A spaces-only submission must leave the existing task intact. The supplied submit listener prevents navigation and keeps unfinished work from inserting a blank row. `createTask` only prepares a node; insertion is a separate task. The reference also resets the form after a successful addition.

## Your Tasks

1. Show feedback in `#task-status` for a blank or spaces-only submission, without adding a task. Navigation prevention is supplied.
2. Complete `createTask(title)` to return a detached `li` with a literal-text `span` and a named native Remove button.
3. On valid submission, append the row returned by `createTask(title)` to `#tasks`.
4. Delegate Remove clicks on `#tasks` so both original and future rows can be removed, including a click on a child inside the button.
5. Announce the removed task in `#task-status`.
6. After removal, focus `#task-name` so the keyboard user can continue.

Add a task containing `<b>` characters, remove it, and then remove the original task. You should see plain angle brackets rather than a bold element; if only the original button works, move the listener to the list.
