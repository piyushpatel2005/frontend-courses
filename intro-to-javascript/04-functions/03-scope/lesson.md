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

The backstage label uses a shared site name and a section name that only exists inside the label function. Run `script.js` and inspect both labels in the Console.

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

## Your Tasks

1. Declare global `siteName` as `"Frontend Lab"`; in `buildLabel()` create local `sectionName` as `"Variables"`, return their joined label.
2. Log `Frontend Lab - Variables` from `buildLabel()`.
