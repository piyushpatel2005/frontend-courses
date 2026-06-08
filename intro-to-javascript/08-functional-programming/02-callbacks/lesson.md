---
title: Callbacks
slug: callbacks
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Call the callback three times inside repeatAction."
  - "Use an array like runs to collect each callback result."
---

# Callbacks

A callback is a function passed into another function. Instead of only describing that idea, this lesson makes the callback run three times and shows the collected results.

## Example

```javascript
function repeatAction(callback) {
  callback();
  callback();
  callback();
}
```

## Your Task

1. Write repeatAction(callback) so it runs the callback three times.
2. Use it to fill runs with three run values and display run,run,run in #output.
