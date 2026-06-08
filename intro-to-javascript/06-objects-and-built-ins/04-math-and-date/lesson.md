---
title: Math and Date
slug: math-and-date
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use Math.ceil(4.2) for the rounded-up value."
  - "Use a fixed date string so the year is deterministic in tests."
---

# Math and Date

Built-in objects save you from rewriting common utilities. This lesson combines one Math method with one Date method and keeps the output predictable for beginners.

## Example

```javascript
const roundedUp = Math.ceil(4.2);
const launchYear = new Date('2024-05-06T00:00:00Z').getUTCFullYear();
```

## Your Task

1. Create roundedUp with Math.ceil(4.2) and launchYear from new Date('2024-05-06T00:00:00Z').
2. Display 5 | 2024 in #output.
