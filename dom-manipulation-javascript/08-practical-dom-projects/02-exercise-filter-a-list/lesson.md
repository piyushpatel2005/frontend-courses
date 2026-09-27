---
title: Build a live trail finder
slug: exercise-filter-a-list
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

Help visitors search a small trail list. This reuses labelled inputs, event listeners, `textContent`, a node collection, and a live result count. In the preceding demo, you saw the complete behavior before having to build it yourself.

## Transfer the pattern

Earlier you selected groups of elements and read `textContent`; the form chapter added `input` events. Here those two skills meet: a single typed query changes which existing nodes are visible, and the count reports the same state.

The `input` event from the previous module gives a fresh query on every edit. `querySelectorAll` collects the existing list items; loop over them, compare each item’s `textContent` with the lowercased query, then set its `hidden` property. Keep an `aria-live` count so a screen-reader user hears when results change.

A contact picker could compare against a typed query without replacing its list:

```javascript
const contactSearch = document.querySelector("#contact-search");
const people = document.querySelectorAll("#contacts li");
contactSearch.addEventListener("input", () => {
  const needle = contactSearch.value.toLowerCase();
  for (const person of people) {
    person.hidden = !person.textContent.toLowerCase().includes(needle);
  }
});
```

In your trail finder, also update the live result count on every edit, including a query that matches nothing. No new HTML strings are needed.

Run the starter first to see what is present and what still does nothing. Edit `script.js` and, if needed, the markup; use the Preview for a visible check before Submit. The checks exercise actions and state changes, not just the initial markup.

## Your Tasks

1. Keep the labelled `#trail-query` search field, three trail list items, and an `aria-live` result count.
2. As the query changes, show case-insensitive matching trails and hide nonmatches; an empty query shows all trails again.
3. Update `#trail-count` to reflect the number of visible trails, including zero matches.

Search for “river” in lowercase and then in uppercase; both should keep the same two trails. Clear the field and verify all three return. A query with no matches should announce zero rather than removing the list.
