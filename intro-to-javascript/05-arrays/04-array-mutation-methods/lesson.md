---
title: Array Mutation Methods
slug: array-mutation-methods
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use push() to add an item to the end of the array."
  - "Use pop() to remove and store the last item."
summary: Practice array mutation methods with a focused Starline Awards programming mission.
seo_title: Array Mutation Methods | Introduction to JavaScript
seo_description: Learn array mutation methods through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, array mutation methods, beginner javascript, programming practice
---

# Array Mutation Methods

## Mission: Setlist Vault

The setlist queue changes when a new item arrives or the last one is removed. Practice `push()` and `pop()` in `script.js`; inspect the remaining queue in the Console.

Mutation methods change the original array. This lesson focuses only on push() and pop() so learners can see how an array grows and shrinks at the end.

## Example

```javascript
const wateringQueue = ["fern", "ivy"];
wateringQueue.push("orchid");
const lastPlant = wateringQueue.pop();
console.log(lastPlant, wateringQueue); // orchid ["fern", "ivy"]
```

## Your Task

1. Use `push()` to add `"third"` to the provided `queue`.
2. Use `pop()` to remove that last item into `removedItem`.
3. Log `first,second | third` on its own line in the Console.
