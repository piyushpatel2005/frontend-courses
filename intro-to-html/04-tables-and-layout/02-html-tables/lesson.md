---
title: HTML Tables
slug: html-tables
order: 2
language: html
summary: Build accessible HTML tables with rows, headers, sections, and spanning cells.
seo_title: "HTML Tables: Rows, Headers, and Cells | Introduction to HTML"
seo_description: Learn how to create HTML tables with table rows, data cells, header cells, table sections, colspan, and rowspan.
seo_keywords:
  - HTML tables
  - table rows
  - table headers
  - thead
  - tbody
  - colspan
  - rowspan
validationRules: []
hints:
  - "A table needs at least three tags: <table>, <tr> (row), and <td> (cell)."
  - "Use <th> instead of <td> for header cells — they are bold and centred by default."
  - "Use <thead>, <tbody>, and <tfoot> to give the table structure — they help assistive tech and CSS."
  - "colspan=\"2\" makes a cell span 2 columns. rowspan=\"2\" makes it span 2 rows."
---

# HTML Tables

## Mission

The community repair café is posting a two-day schedule. Visitors need to scan times and stations in rows and columns, not read a paragraph. Build the schedule so its labels and data stay connected.

> **Note:** Use tables for related data — schedules, price lists, comparison charts — not for page layout. CSS Flexbox or Grid handles layout.

## What you'll build

A structured schedule table with a header row, at least two data rows, and one cell that spans multiple columns.

## The table frame

A table is made of rows. Put each row in `<tr>`, then use `<td>` for ordinary data cells and `<th>` for labels.

```html
<table>
    <tr>
        <th scope="col">Station</th>
        <th scope="col">Time</th>
    </tr>
    <tr>
        <td>Bike repair</td>
        <td>10:00</td>
    </tr>
</table>
```

`scope="col"` tells assistive technology that each header describes a column. Use `scope="row"` when a header describes the row instead.

## Give the schedule sections

`<thead>` holds the column labels, `<tbody>` holds the repeated schedule entries, and `<tfoot>` can hold a summary. Those groups make the table easier to read and style.

```html
<table>
    <thead>
        <tr><th scope="col">Station</th><th scope="col">Slots</th><th scope="col">Host</th></tr>
    </thead>
    <tbody>
        <tr><td>Bike repair</td><td>2</td><td>Mika</td></tr>
        <tr><td>Book mending</td><td>3</td><td>Ren</td></tr>
    </tbody>
    <tfoot>
        <tr><td colspan="2">Open stations</td><td>2</td></tr>
    </tfoot>
</table>
```

`colspan="2"` lets the footer label cover two columns. `rowspan="2"` works the same way down across two rows.

## Checkpoint

Run the page. You should see a header row above at least two schedule rows, plus one wider cell spanning columns. If the columns shift, count the cells in every row and check the `colspan` value.

## Your Tasks

Build a table showing a weekly class schedule with at least:

1. Add one `<table>` element.
2. Add a `<thead>` row with `<th>` headers for each day (e.g., Monday–Friday).
3. Add a `<tbody>` with at least **2 rows** of schedule data (use `<td>` cells).
4. Add at least one cell that uses `colspan` to span multiple columns.

## Payoff

The repair café now has a schedule that visitors can scan and assistive technology can navigate by header.
