---
title: Array Mutation Methods
slug: array-mutation-methods
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use push() to add an item to the end of the array."
  - "Use pop() to remove and store the last item."
---

# Array Mutation Methods

Mutation methods change the original array. This lesson focuses only on push() and pop() so learners can see how an array grows and shrinks at the end.

## Example

```javascript
const queue = ['first', 'second'];
queue.push('third');
const removed = queue.pop();
```

## Your Task

1. Create queue with first and second, then use push() to add third and pop() to store the removed item in removedItem.
2. Display first,second | third in #output.
