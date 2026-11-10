---
title: "Group Loan Table Columns"
slug: group-loan-table-columns
order: 6
language: html
lesson_type: coding
summary: Group three columns of an existing accessible table.
seo_title: "Group Loan Table Columns | Introduction to HTML"
seo_description: Practice placing colgroup before thead and spanning two day columns.
seo_keywords: [HTML colgroup practice, col span, table headers]
---

The tool library already has a captioned loan table with real row and column headers. The previous stock table grouped its three column slots. Add that structure here without replacing the headers or the data.

## Your Tasks

1. Add exactly one `<colgroup>` immediately after the caption and before `<thead>`.
2. Put two `<col>` elements in that group: one for Tool, then one with `span="2"` for the two day columns.
3. Keep the existing three `<th scope="col">` labels and the two data rows with `<th scope="row">` intact.

Run to confirm the loan counts still read the same. Column groups are mostly invisible until styled; Submit checks the structure, not a color change.
