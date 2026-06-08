---
title: Date Basics
slug: date-basics
order: 6
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use getUTCFullYear(), getUTCMonth() + 1, and getUTCDate() for stable results."
  - "Pad the month and day with a leading zero if needed."
---

# Date Basics

Dates can feel noisy at first, so this lesson keeps them deterministic. A fixed UTC date lets beginners practice reading the year, month, and day without timezone surprises.

## Example

```javascript
const launchDate = new Date('2024-05-06T00:00:00Z');
const year = launchDate.getUTCFullYear();
```

## Your Task

1. Create launchDate from 2024-05-06T00:00:00Z and read the UTC year, month, and day into separate variables.
2. Display 2024-05-06 in #output.
