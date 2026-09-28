---
title: "Seed inventory table demo"
slug: responsive-table-demo
order: 1
language: html
summary: "Inspect a horizontally scrollable data table on a narrow screen."
seo_title: "Seed inventory table demo | Intro to CSS"
seo_description: "See a seed inventory keep its columns legible using overflow-x and min-width."
seo_keywords:
  - CSS
  - responsive overflow and table styling
  - HTML
  - beginner CSS
lesson_type: coding
---

# Seed inventory table demo

A seed-library inventory has several columns. On a narrow phone, shrinking every column until its text is unreadable is less useful than letting the table scroll inside its own wrapper.

The HTML places `<table>` inside `.table-wrap`. In `style.css`, `table` fills its wrapper but stays at least 30rem wide. `.table-wrap { overflow-x: auto; }` gives it a horizontal scrollbar only when the table is wider than the available space. The heading and rest of the page do not have to scroll sideways.

## Try the demo

Narrow the preview below the table's minimum width, then scroll the table sideways to the last column. Widen it and the scroll is no longer necessary. Temporarily remove `overflow-x: auto` to see why the wrapper matters, then restore it.

**Checkpoint:** All three columns remain legible at a narrow width. Next, apply the same pair of decisions to a tool checkout table.
