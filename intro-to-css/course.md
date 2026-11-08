---
slug: intro-to-css
image: cover.svg
prerequisites:
  - course: intro-to-html
    note: "Understand elements, attributes, and HTML page structure before styling pages."
title: CSS
description: Style familiar HTML pages step by step, from your first CSS rule to readable layouts and responsive designs.
language: html
level: Beginner
sort_order: 2
modules:
  - slug: foundations
    title: CSS Foundations
    sort_order: 1
  - slug: visual-style
    title: Visual Style
    sort_order: 2
  - slug: layout-fundamentals
    title: Layout Fundamentals
    sort_order: 3
  - slug: selectors-in-depth
    title: Selectors In Depth
    sort_order: 4
  - slug: project-dropdown-menu
    title: Project - Dropdown Menu
    sort_order: 5
  - slug: project-styled-form
    title: Project - Styled Form
    sort_order: 6
  - slug: flexbox
    title: Flexbox
    sort_order: 7
  - slug: grid
    title: Grid
    sort_order: 8
  - slug: project-flexbox-grid-website
    title: Project - Flexbox + Grid Website
    sort_order: 9
  - slug: modern-css
    title: Modern CSS
    sort_order: 10
  - slug: project-animation
    title: Project - Animation and Interaction
    sort_order: 11
  - slug: responsive-design
    title: Responsive Design
    sort_order: 12
  - slug: project-responsive-table
    title: Project - Responsive Table
    sort_order: 13
  - slug: project-styled-resume
    title: Project - Styled Resume
    sort_order: 14
---

# CSS

CSS (Cascading Style Sheets) controls how an HTML page looks: its colors, text, spacing, and layout. You should already recognize basic HTML elements, classes, and links. The HTML course introduced simple color and text-size declarations; this course explains how they work and builds the layout skills that HTML did not cover. JavaScript comes afterward, followed by a vanilla-JavaScript DOM course.

Most visual topics start with a working example. Focused lessons fill gaps where another demo would repeat the same idea. Read its stylesheet, change one value, and use the preview to see what that value does. The following exercise gives you a different page so you can try the technique yourself. The HTML is supplied; edit `style.css` unless a task specifically asks you to change the markup. Numbered TODO comments mark each edit site. Empty rules at the end are places to add your declarations; they extend or override the supplied rules above without removing the page’s setup.

Start with individual elements and cards, then use selectors and spacing in a menu and form. Flexbox and Grid introduce ways to arrange several elements together. Later projects add motion and adapt layouts to smaller screens. Each project includes its own starting files, so you do not need to copy your work from an earlier lesson.

## Working through an exercise

1. Read the setup to see what is already supplied.
2. Make the first numbered change, then press Run and look for its effect in the preview.
3. Press Submit to check your work. You can check an unfinished exercise; completed tasks should earn their own checkmarks.
4. Continue one task at a time. If a check fails, use its message to find the element or CSS property to revisit.

A CSS rule can be valid without producing the result you intended. Compare the preview with the lesson's checkpoint, not just the test result. For responsive lessons, pay attention to the width of the preview area: it can be narrower than your browser window.

## What you will learn

- Write CSS rules and choose the elements they affect.
- Use color, type, spacing, and borders to make content readable.
- Arrange content with positioning, Flexbox, and Grid.
- Reuse values, add restrained motion, and adapt layouts to the available space.

## Course outline

1. Foundations: rules, selectors, and specificity
2. Visual style: color, backgrounds, type, and borders
3. Layout fundamentals: boxes, display, positioning, and overflow
4. Selectors in depth: relationships and interactive states
5. Apply those basics in a dropdown menu and styled form
6. Learn Flexbox and Grid, then combine them in a page
7. Add variables, transforms, and animation
8. Make layouts responsive, then apply them to a table and profile sheet
