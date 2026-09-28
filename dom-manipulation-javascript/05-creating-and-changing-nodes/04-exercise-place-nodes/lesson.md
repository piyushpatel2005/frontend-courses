---
title: 'Exercise: Order the Workshop Agenda'
slug: exercise-place-nodes
order: 4
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Place one new agenda item first and another before a named existing item.
seo_title: 'Exercise: Order the Workshop Agenda | DOM Manipulation with JavaScript'
seo_description: Practice prepend and insertBefore by adding two JavaScript-created agenda items in the right DOM
  order.
seo_keywords:
- prepend practice
- insertBefore exercise
- agenda DOM order
hints:
- insertBefore(newItem, closingItem) is called on the parent list.
---

# Exercise: Order the Workshop Agenda

The workshop agenda already lists a break and a closing session. Add an opening session first and a discussion immediately before the closing session. Keep the original items.

## How it works

Look at this separate playlist example: `prepend` puts the intro before every song, while `insertBefore` uses the existing outro as an anchor. For your agenda, use the agenda list as the parent and its closing item as the anchor; inserting before the wrong parent produces a DOM error. Set each new label with `textContent`, just as in the earlier safe-text lesson.

```javascript
// Different example: a playlist, not your agenda.
const intro = document.createElement("li");
intro.textContent = "Intro track";
playlist.prepend(intro);
const interlude = document.createElement("li");
interlude.textContent = "Interlude";
playlist.insertBefore(interlude, document.querySelector("#outro"));
```

## Try the preview

Run the preview and read the agenda in order: Welcome, Break, Questions, Closing. If Questions lands last, pass `#closing` as the second argument to `insertBefore`.

## Remember

Compare this with append: the parent is still `#agenda`, but the order now comes from *which insertion method* and, for `insertBefore`, which child you use as an anchor.

## Your Tasks

1. Create an `li` with text `Welcome` and prepend it to `#agenda`.
2. Create another `li` with text `Questions` and insert it immediately before `#closing` using `insertBefore`.
