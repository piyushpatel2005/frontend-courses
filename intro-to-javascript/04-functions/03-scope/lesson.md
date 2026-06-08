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
---

# Scope

Scope decides where a variable can be used. This lesson shows one global value, one local value, and a function that combines them into a single label.

## Example

```javascript
const siteName = 'Frontend Lab';
function buildLabel() {
  const sectionName = 'Variables';
  return `${siteName} - ${sectionName}`;
}
```

## Your Task

1. Declare a global siteName set to Frontend Lab and write buildLabel() so it creates a local sectionName set to Variables.
2. Display Frontend Lab - Variables in #output.
