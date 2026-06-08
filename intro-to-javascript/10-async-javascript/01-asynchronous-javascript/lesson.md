---
title: Asynchronous JavaScript
slug: asynchronous-javascript
order: 1
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use an array like messageOrder to record the order of steps."
  - "The delayed step still appears last, so the final string should reflect Start | End | Delayed."
---

# Asynchronous JavaScript

Asynchronous JavaScript is about understanding order: some work starts now, some work finishes later. This lesson keeps the idea concrete by storing the order in an array that mirrors the event loop result.

## Example

```javascript
const messageOrder = ['Start', 'End', 'Delayed'];
console.log(messageOrder.join(' | '));
```

## Your Task

1. Create messageOrder so it stores the asynchronous sequence Start, End, then Delayed.
2. Display Start | End | Delayed in #output.
