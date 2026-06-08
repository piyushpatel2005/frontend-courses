---
title: Dropdown Behavior
slug: dropdown-behavior
order: 2
language: html
validationRules: []
hints:
  - "Use display: none to hide and display: block to show."
  - "Use :hover on the parent to reveal the child panel."
  - "Use position: absolute on the menu panel."
---

# Dropdown Behavior

Add show/hide behavior to the dropdown menu using CSS hover and absolute positioning.

## Step-by-step instructions

1. Hide the panel by default with `.dropdown-menu { display: none; }`.
2. Show the panel on hover with `.dropdown:hover .dropdown-menu { display: block; }`.
3. Set `.dropdown-menu` to `position: absolute; top: 100%; left: 0;`.
