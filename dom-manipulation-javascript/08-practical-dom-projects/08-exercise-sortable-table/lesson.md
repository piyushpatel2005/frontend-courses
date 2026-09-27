---
title: Build an accessible sortable resource table
slug: exercise-sortable-table
order: 8
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Build a sortable table that reorders existing DOM rows and announces ascending or descending order.
seo_title: Accessible Sortable Table Exercise | JavaScript DOM
seo_description: Practice DOM row sorting with a native button, localeCompare, replaceChildren, and an accurate aria-sort header state.
seo_keywords:
  - sortable table exercise
  - JavaScript table rows
  - aria-sort ascending descending
  - DOM mini project
hints:
  - Copy rows into an array with Array.from(tbody.rows), then compare first-cell text.
  - Keep aria-sort on the column header; replaceChildren moves the original rows.
---

# Build an accessible sortable resource table

The neighborhood tool library lists available resources out of order. Add a sort button to the Resource header, then make it reorder the three existing rows alphabetically in either direction. The preceding workshop demo shows the full pattern.

## Transfer the pattern

Here is a separate worked example: a book table with its own IDs. The `th` describes the sort; the button activates it. The rows are moved rather than rebuilt:

```html
<th id="book-heading" scope="col" aria-sort="none"><button id="sort-books" type="button">Sort books</button></th>
<tbody id="books"><tr><td>Zines</td></tr><tr><td>Atlases</td></tr></tbody>
```

```javascript
const books = document.querySelector("#books");
const heading = document.querySelector("#book-heading");
document.querySelector("#sort-books").addEventListener("click", () => {
  const next = heading.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
  const rows = Array.from(books.rows);
  rows.sort((a, b) => next === "ascending"
    ? a.cells[0].textContent.localeCompare(b.cells[0].textContent)
    : b.cells[0].textContent.localeCompare(a.cells[0].textContent));
  books.replaceChildren(...rows);
  heading.setAttribute("aria-sort", next);
});
```

`Array.from` makes an array of the row elements; `localeCompare` compares words; `replaceChildren(...rows)` reattaches those very elements. The `aria-sort` value begins at `none`, then alternates `ascending` and `descending`. Use a real button so Enter and Space already work. For your resource table, retain the category cells with their original rows.

## Your Tasks

1. Keep the captioned two-column table and its three resource rows; add a labelled `type="button"` control inside the Resource column header, which starts at `aria-sort="none"`.
2. On the first activation, arrange resource rows A–Z and mark the Resource header `aria-sort="ascending"`; preserve the matching Category cells.
3. On the next activation, arrange the same rows Z–A and mark `aria-sort="descending"`; repeated activations should keep alternating.

Try keyboard activation, then click again. Watch both columns: a category must stay with its resource, while the header's announced direction follows the visible order.
