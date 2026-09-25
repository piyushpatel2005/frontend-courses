---
title: Array Find and Includes
slug: array-find-includes
order: 11
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use find() when you want the matching value itself."
  - "Use includes() when you only need a true-or-false answer."
summary: Practice array find and includes with a focused Starline Awards programming mission.
seo_title: Array Find and Includes | Introduction to JavaScript
seo_description: Learn array find and includes through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array find and includes, beginner javascript, programming practice
---

# Array Find and Includes

## Mission: Setlist Vault

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Search methods answer slightly different questions. This lesson pairs find() with includes() so learners practice both finding a matching item and checking simple membership.

## Example

```javascript
const loans = ["on time", "overdue", "returned"];
const catalog = ["North Wind", "Sunset", "Rain"];
console.log(loans.find((loan) => loan === "overdue"));
console.log(catalog.includes("Sunset"));
```

## Your Task

1. Create firstLargePrice from [15, 40, 75, 20] using find() so it stores 75.
2. Create hasForty with includes() and display 75 | true in #output.
