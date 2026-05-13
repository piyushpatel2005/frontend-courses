---
title: HTML Tables
slug: html-tables
order: 2
language: html
validationRules: []
hints:
  - "A table needs at least three tags: <table>, <tr> (row), and <td> (cell)."
  - "Use <th> instead of <td> for header cells — they are bold and centred by default."
  - "Use <thead>, <tbody>, and <tfoot> to give the table structure — they help assistive tech and CSS."
  - "colspan=\"2\" makes a cell span 2 columns. rowspan=\"2\" makes it span 2 rows."
---

# HTML Tables

Tables are for **tabular data** — information that logically belongs in rows and columns, like schedules, comparison grids, or pricing tables.

> **Note:** Tables should **never** be used for page layout. Use CSS Flexbox or Grid for that.

## Basic table structure

```html
<table>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>
```

| Tag | Meaning |
|-----|---------|
| `<table>` | The table container |
| `<tr>` | Table Row |
| `<td>` | Table Data cell |
| `<th>` | Table Header cell (bold + centred) |

## Header cells: `<th>`

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>28</td>
        <td>London</td>
    </tr>
</table>
```

Use `scope="col"` or `scope="row"` on `<th>` for accessibility.

## Structural sections: `<thead>`, `<tbody>`, `<tfoot>`

```html
<table>
    <thead>
        <tr><th>Item</th><th>Qty</th><th>Price</th></tr>
    </thead>
    <tbody>
        <tr><td>Apple</td><td>3</td><td>$1.50</td></tr>
        <tr><td>Bread</td><td>1</td><td>$2.00</td></tr>
    </tbody>
    <tfoot>
        <tr><td colspan="2">Total</td><td>$3.50</td></tr>
    </tfoot>
</table>
```

## Spanning cells

- `colspan="n"` — cell spans `n` **columns**
- `rowspan="n"` — cell spans `n` **rows**

```html
<table>
    <tr>
        <th colspan="3">Q1 Sales Report</th>
    </tr>
    <tr>
        <td>January</td><td>February</td><td>March</td>
    </tr>
</table>
```

## Exercise

Build a table showing a weekly class schedule with at least:

1. A `<thead>` row with `<th>` headers for each day (e.g., Monday–Friday).
2. A `<tbody>` with at least **2 rows** of schedule data (use `<td>` cells).
3. At least one cell that uses `colspan` to span multiple columns.
