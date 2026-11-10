---
title: Table Column Groups
slug: table-column-groups
order: 5
language: html
lesson_type: coding
summary: Inspect column slots in a data table.
seo_title: Table Column Groups | Introduction to HTML
seo_description: Learn where colgroup and col belong and what span counts.
seo_keywords: [HTML colgroup, HTML col, table columns]
---

The repair café's stock table has three columns. Run `index.html` and read each shelf row. Unlike a row, a column is spread across several rows. `<colgroup>` describes column slots before the row groups; each `<col>` claims one slot unless `span` says otherwise.

```html
<caption>Spare parts by shelf</caption>
<colgroup><col><col span="2"></colgroup>
<thead>...</thead>
```

![A table's three column slots: one col for shelf and one col spanning screws and bulbs.](table-column-slots.svg)

The first `<col>` covers Shelf; the next covers two columns. Count slots, not row cells. The preview looks much the same because column grouping alone adds no visible styling. It also does **not** label cells for screen readers: keep `<th scope="col">` and `<th scope="row">` for header relationships. Column groups become useful when styling or annotating whole columns later in CSS.

## Check the preview

Find the three column headers and two rows. Temporarily change `span="2"` to `span="1"`; the rows still display, but the group now describes only two of three slots. Restore it, then build a different table in the next lesson.
