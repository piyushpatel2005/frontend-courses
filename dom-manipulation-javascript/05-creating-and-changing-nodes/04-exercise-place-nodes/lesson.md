---
title: Order the Workshop Agenda
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

# Put the workshop agenda in order

The workshop agenda has Break and Closing already. Add Welcome at the beginning and Questions immediately before Closing. The existing list is setup, not something you need to recreate.

Edit `script.js`. The supplied `agenda` variable refers to `#agenda`. Create each new `li`, give it plain text with `textContent`, then insert it at the requested position. The first insertion does not depend on the second.

In the trail demo, `insertBefore` used Sunday's entry as an anchor. Here use `#closing`, and call the method on its parent, `agenda`.

## Your Tasks

1. Insert a new `li` labeled `Welcome` at the start of `#agenda` with `prepend`.
2. Insert a new `li` labeled `Questions` immediately before `#closing` with `insertBefore`.

After step 1, Run should show Welcome, Break, Closing. After step 2, it should show Welcome, Break, Questions, Closing. Submit after either step to check your progress. Leave the original two items intact.
