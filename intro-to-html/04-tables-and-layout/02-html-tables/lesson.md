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

The community repair café is posting a two-day schedule. Visitors need to scan times and stations in rows and columns, not read a paragraph. Build the schedule so its labels and data stay connected.

> **Note:** Use tables for related data — schedules, price lists, comparison charts — not for page layout. CSS Flexbox or Grid handles layout.

The supplied heading is already in `index.html`. Below it, add a captioned schedule with column headers, time labels for each row, and one spanning announcement.

## The table frame

A table is made of rows. Put each row in `<tr>`, then use `<td>` for ordinary data cells and `<th>` for labels.

```html
<table>
    <tr>
        <th scope="col">Workshop</th>
        <th scope="col">Time</th>
    </tr>
    <tr>
        <td>Pottery</td>
        <td>10:00</td>
    </tr>
</table>
```

`scope="col"` says that a header labels a column. Use `<th scope="row">` when a cell labels its row. A workshop row might begin `<th scope="row">Pottery</th>`, followed by `<td>` cells for its time and host. The header’s role comes from the relationship, not its default bold appearance.

A `<caption>` gives the whole table a visible name. Put it directly inside `<table>`, before the row groups, for example `<caption>Saturday workshop places</caption>`. A nearby page heading names the page; a caption identifies this particular table.

## Give the schedule sections

`<thead>` holds the column labels, `<tbody>` holds the repeated schedule entries, and `<tfoot>` can hold a summary. Those groups make the table easier to read and style.

```html
<table>
    <thead>
        <tr><th scope="col">Workshop</th><th scope="col">Slots</th><th scope="col">Host</th></tr>
    </thead>
    <tbody>
        <tr><td>Pottery</td><td>2</td><td>Mika</td></tr>
        <tr><td>Painting</td><td>3</td><td>Ren</td></tr>
    </tbody>
    <tfoot>
        <tr><td colspan="2">Open workshops</td><td>2</td></tr>
    </tfoot>
</table>
```

`colspan="2"` lets the footer label cover two columns. In a three-column row, one ordinary cell plus one cell spanning two columns fills the row. Do not keep three cells and also make one span two: that would create four column slots. `rowspan="2"` spans two rows; cells in the next row must leave room for that occupied slot. You do not need rowspan in this exercise.

## Check your page

Run the page. You should see a header row above at least two schedule rows, plus one wider cell spanning columns. If the columns shift, count the cells in every row and check the `colspan` value.

Edit `index.html`, press **Run** to inspect your page, then **Submit** to check the tasks. You can submit after each step; later tasks may still be incomplete.

## Your Tasks

Build the repair café’s two-day station schedule:

1. Add one `<table>` element below the supplied page heading.
2. Give the table a non-empty `<caption>` as its first element, naming the two-day repair schedule.
3. Add a `<thead>` row with three `<th scope="col">` headers: time, day, and station.
4. Add a `<tbody>` with at least two schedule rows. Begin each row with a non-empty `<th scope="row">` for its time, followed by non-empty `<td>` cells for day and station.
5. Add a separate announcement row at the end of `<tbody>`: one non-empty `<th scope="row">` for its time, followed by one non-empty `<td colspan="2">` for its message.

The repair café now has a schedule whose column headers label the times, days, and stations.
