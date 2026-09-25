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

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you organize a superstar's songs, venues, and tour moments as ordered collections. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Mutation methods change the original array. This lesson focuses only on push() and pop() so learners can see how an array grows and shrinks at the end.

## Example

```javascript
const wateringQueue = ["fern", "ivy"];
wateringQueue.push("orchid");
const nextPlant = wateringQueue.shift();
console.log(nextPlant, wateringQueue);
```

## Your Task

1. Create queue with first and second, then use push() to add third and pop() to store the removed item in removedItem.
2. Log first,second | third with `console.log()`.
