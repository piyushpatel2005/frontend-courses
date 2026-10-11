---
title: "Exercise: Grid Tracks"
slug: exercise-grid-tracks
order: 2
language: html
summary: "Grid creates explicit rows and columns, called tracks."
seo_title: "Exercise: Grid Tracks | Introduction to CSS"
seo_description: "Registration, Set-up, and Clean-up need equal space on the shift board. The workshop demo showed how a container defines tracks for its children; use the same technique with these new cards."
seo_keywords: [CSS, exercise-grid-tracks, layout, CSS exercise]
lesson_type: coding
hints:
  - "Use the demo as a reference, but write the rules yourself."
  - "Run Preview before Submit to inspect the visible result."
---

# Arrange the volunteer shifts

Registration, Set-up, and Clean-up need equal space on the shift board. The workshop demo showed how a container defines tracks for its children; use the same technique with these new cards.

Edit `.workshop-grid` in `style.css`. Card styling and the gap are supplied, but the starter has no grid layout. The supplied `overflow-wrap: anywhere` lets Registration break onto another line when a column is narrow.

## Your Tasks

1. Set `.workshop-grid` to `display: grid`.
2. Give `.workshop-grid` three equal columns using `grid-template-columns: repeat(3, 1fr)`.

Run Preview after step 1. Grid is active, but without a column definition the cards still use a single column. After step 2, all three cards should share one row. Submit after each step to check it independently.
