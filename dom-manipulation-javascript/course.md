---
slug: dom-manipulation-javascript
title: DOM Manipulation with JavaScript
description: Learn to select, update, create, and remove HTML elements with JavaScript, then build accessible interactions, API-powered interfaces, and practical browser projects.
language: javascript
level: Beginner
sort_order: 4
summary: A beginner-friendly path from the DOM tree and selectors to safe updates, events, forms, the Fetch API, and interactive projects.
seo_title: DOM Manipulation with JavaScript | Beginner Course
seo_description: "Learn JavaScript DOM manipulation step by step: select and update elements, handle events and forms, fetch API data safely, and build interactive projects."
seo_keywords:
  - JavaScript DOM manipulation
  - DOM manipulation tutorial
  - JavaScript DOM course
  - beginner JavaScript projects
  - JavaScript events and forms
  - vanilla JavaScript Fetch API
modules:
  - slug: dom-foundations
    title: DOM Foundations
    sort_order: 1
  - slug: finding-and-traversing-elements
    title: Finding and Traversing Elements
    sort_order: 2
  - slug: text-and-attributes
    title: Text, HTML, and Attributes
    sort_order: 3
  - slug: classes-and-styles
    title: Classes, Styles, and Visibility
    sort_order: 4
  - slug: creating-and-changing-nodes
    title: Creating, Moving, and Removing Nodes
    sort_order: 5
  - slug: events-and-interaction
    title: Events and Interaction
    sort_order: 6
  - slug: forms-and-live-feedback
    title: Forms and Live Feedback
    sort_order: 7
  - slug: practical-dom-projects
    title: Practical DOM Projects
    sort_order: 8
  - slug: project-community-directory
    title: Project — Community Directory
    sort_order: 9
  - slug: project-workshop-planner
    title: Project — Workshop Planner
    sort_order: 10
  - slug: fetch-api-and-dom
    title: Fetch API and DOM Updates
    sort_order: 11
  - slug: project-data-dashboard
    title: Project — Data Dashboard
    sort_order: 12
---

# DOM Manipulation with JavaScript

An HTML page can change after it loads. A filter hides cards, a form adds a new entry, and a button reveals more details. In this course, you will build those behaviors with vanilla JavaScript: the browser's own DOM methods, without a framework or library.

## Before you begin

This is the fourth course, after HTML, CSS, and JavaScript fundamentals. Bring your knowledge of variables, functions, conditions, arrays, objects, and asynchronous JavaScript; the lessons connect those skills to the browser rather than introducing a framework. Recognizing CSS selectors such as `#status` and `.card` will help. The lessons explain the DOM methods as they appear; the Fetch section also reviews the asynchronous steps it needs.

You only need a desktop browser to begin. The opening lessons show how to open its developer Console, read a result or an error, and try a small DOM change on a blank practice tab. These experiments come before the course's editor lessons, so you can use the browser as a place to investigate rather than only follow instructions.

## What you will build

- Read the DOM as a tree and select the right element without assuming it exists.
- Safely update text and attributes, including accessible state.
- Add and remove classes and styles while keeping CSS responsible for most presentation.
- Create, insert, replace, and remove elements without treating untrusted text as HTML.
- Handle clicks, keyboard input, and events from dynamically created elements.
- Read forms, give live feedback, and build a filter, a disclosure, and a dynamic list.
- Call APIs with plain JavaScript, check responses, handle loading and errors, and render returned data safely.

## How to use the course

Start with the Console orientation. Type the short commands on your own blank practice tab, not on a page containing personal information. Read what changed, then reload to start again. Do not paste unfamiliar code into developer tools or disable a browser's paste warning.

After that, each topic pairs a working demo with an exercise:

- In a demo, read the relevant parts of `index.html`, `style.css`, and `script.js`. Run the preview and try the suggested small change.
- In the following exercise, use the same idea with different data. Complete one numbered task, Run to inspect the result, then Submit to check it.
- Use the browser Console to investigate values and errors. The course's Console panel displays messages from its preview; it is not the browser's command prompt. When using developer tools with a lesson preview, check which document you are inspecting.
- Keep earlier working behavior when a project continues into its next exercise. The instructions identify separate demo examples and fresh starts.
- Finish each section with its quiz before moving on.

Selectors come before content updates and node creation. A small supplied click-handler example supports the first class toggles; the Events section then explains listeners, bubbling, and keyboard behavior before the form lessons. Projects combine those skills. Finally, the Fetch lessons introduce loading, errors, and outdated results before the dashboard project.

The Fetch exercises use clearly labeled offline services for repeatable practice. You will learn the request/response pattern without depending on a live API or sending form data to a remote service.

## Sections

1. DOM Foundations — open the browser Console, run safe experiments, then explore the document tree, script loading, and first selectors.
2. Finding and Traversing Elements — groups, relatives, scoped searches, and missing nodes.
3. Text, HTML, and Attributes — safe content updates, links, and custom data.
4. Classes, Styles, and Visibility — state-driven appearance and accessible disclosure.
5. Creating, Moving, and Removing Nodes — new elements and safe replacement.
6. Events and Interaction — clicks, delegation, and keyboard behavior.
7. Forms and Live Feedback — input, submit, validation, change, and reset.
8. Practical DOM Projects — filtering, disclosure controls, and dynamic lists.
9. Project — Community Directory — select, search, add, and remove directory cards.
10. Project — Workshop Planner — show, add, and manage sessions with accessible feedback.
11. Fetch API and DOM Updates — requests, responses, loading and errors, query parameters, and cancellation.
12. Project — Data Dashboard — build a resilient API-style interface using the DOM.

## What stays in this preview

Project state lives in the current page. Run creates a fresh preview; it is not a save-to-storage operation. The sandbox uses an opaque origin, where localStorage access can throw a SecurityError. These projects do not promise persistence. A deployed application that adds storage must handle access failures and malformed stored JSON rather than assuming every browser permits it. No storage permission or framework is needed for this course.
