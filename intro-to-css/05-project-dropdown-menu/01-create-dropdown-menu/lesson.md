---
title: Project - Create a Dropdown Menu
slug: create-dropdown-menu
order: 1
language: html
validationRules: []
hints:
  - "Use :hover and descendant selectors to reveal the dropdown panel."
  - "Use position: relative on parent and position: absolute on menu panel."
---

# Project: Create a Dropdown Menu

Build a CSS-only dropdown menu using selectors, pseudo-classes, and positioning.

## Step-by-step instructions

1. Add a wrapper `.dropdown` with a button `.dropdown-toggle` and a panel `.dropdown-menu`.
2. Set `.dropdown` to `position: relative;`.
3. Hide the panel by default with `.dropdown-menu { display: none; }`.
4. Show the panel on hover with `.dropdown:hover .dropdown-menu { display: block; }`.
5. Set `.dropdown-menu` to `position: absolute; top: 100%; left: 0;`.
6. Add at least 3 links inside `.dropdown-menu`.

## Goal

When the user hovers over the toggle area, the menu appears below it.
