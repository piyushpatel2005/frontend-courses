---
title: Scope
slug: scope
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use the global siteName inside your function."
  - "Create a local sectionName inside the function and return a combined string."
summary: Practice scope with a focused Starline Awards programming mission.
seo_title: Scope | Introduction to JavaScript
seo_description: Learn scope through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, scope, beginner javascript, programming practice
---

# Scope

## Mission: Backstage Toolkit

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you package repeatable backstage jobs into small, dependable functions. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Scope decides where a variable can be used. This lesson shows one global value, one local value, and a function that combines them into a single label.

## Example

```javascript
const gardenName = "East Garden";

function describePlot() {
  const plotName = "Herbs";
  return `${gardenName}: ${plotName}`;
}

console.log(describePlot());
```

## Your Task

1. Declare a global siteName set to Frontend Lab and write buildLabel() so it creates a local sectionName set to Variables.
2. Log Frontend Lab - Variables with `console.log()`.
