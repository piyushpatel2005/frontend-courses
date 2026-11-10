---
title: Scope
slug: scope
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use the outer siteName inside your function."
  - "Create a local sectionName inside the function and return a combined string."
summary: "A backstage label needs a shared site name and a section name used only while building the label. Scope is the part of your program where a variable name is available."
seo_title: Scope | Introduction to JavaScript
seo_description: "A backstage label needs a shared site name and a section name used only while building the label. Scope is the part of your program where a variable name is available."
seo_keywords: javascript, scope, beginner javascript, programming practice
---


A backstage label needs a shared site name and a section name used only while building the label. **Scope** is the part of your program where a variable name is available.

```javascript run
const gardenName = "East Garden";
function describePlot() {
  const plotName = "Herbs";
  return `${gardenName}: ${plotName}`;
}
console.log(describePlot());
console.log(gardenName);
```

The function can read `gardenName` from its surrounding scope. Its local `plotName` exists inside the function; trying to log `plotName` outside it would produce a `ReferenceError`. Returning the label gives the caller a value, not access to the local variable itself.

A `let` or `const` declared inside an `if` or loop block also stays inside that block. Here, keep `siteName` outside `buildLabel` and `sectionName` inside it. The probes check their observable results, not where you typed the declarations.

Run the example and notice that only the shared name gets its own outside log.

## Your Tasks

1. Set the outer `siteName` to `"Frontend Lab"`.
2. Complete `buildLabel()`: declare local `sectionName = "Variables"` and return `${siteName} - ${sectionName}`.
3. Log the returned value of `buildLabel()` on its own line.

Edit `script.js`, then Run after each step. The supplied probes show the values being checked; leave them in place. Submit checks the numbered tasks in order. You do not need to write extra checkpoint logs.
