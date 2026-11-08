---
title: "Filter A List Practice"
slug: filter-a-list-practice
order: 2
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build a live trail finder with case-insensitive filtering and an empty result state.
seo_title: Build a live trail finder | Beginner DOM Manipulation with JavaScript
seo_description: 'Practice DOM list filtering with JavaScript: search trail cards as visitors type
  and show a result count or empty state.'
seo_keywords:
- JavaScript live search exercise
- filter DOM cards
- trail finder project
---

# Build a live trail finder

Help visitors search a small trail list. This reuses labelled inputs, event listeners, `textContent`, a node collection, and a live result count.

## Transfer the pattern

The recipe demo hid rows without destroying them. Keep that behavior for the trails: a search for River hides Forest Ridge, and clearing the field brings it back. The starter already has a labelled search field and an `aria-live` count; your listener supplies their behavior.

A contact picker could compare against a typed query without replacing its list:

```javascript
const contactSearch =
  document.querySelector("#contact-search");
const people = document.querySelectorAll("#contacts li");
contactSearch.addEventListener("input", () => {
  const needle = contactSearch.value.toLowerCase();
  for (const person of people) {
    person.hidden = !person.textContent
      .toLowerCase()
      .includes(needle);
  }
});
```

In your trail finder, also update the live result count on every edit, including a query that matches nothing. No new HTML strings are needed.

Run the starter, then edit `script.js`. Run after each task to inspect the preview; Submit checks your changes in task order.

Treat surrounding spaces as accidental input: trim the query before comparing it. A spaces-only query should behave like clearing the field.

## Your Tasks

1. On each edit to `#trail-query`, hide nonmatching trails case-insensitively; an empty query shows all trails again.
2. Update `#trail-count` to reflect the number of visible trails, including zero matches.

Search for “river” in lowercase and then in uppercase; both should keep the same two trails. Clear the field and verify all three return. A query with no matches should announce zero rather than removing the list.
