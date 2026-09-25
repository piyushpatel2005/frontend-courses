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
summary: Practice asynchronous javascript with a focused Starline Awards programming mission.
seo_title: Asynchronous JavaScript | Introduction to JavaScript
seo_description: Learn asynchronous javascript through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, asynchronous javascript, beginner javascript, programming practice
---

# Asynchronous JavaScript

## Mission: Live Broadcast

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you coordinate delayed score updates without freezing the show. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

Asynchronous JavaScript is about understanding order: some work starts now, some work finishes later. This lesson keeps the idea concrete by storing the order in an array that mirrors the event loop result.

## Example

```javascript
console.log("Connect");
setTimeout(() => console.log("Reply received"), 0);
console.log("Render");
```

## Your Task

1. Create messageOrder so it stores the asynchronous sequence Start, End, then Delayed.
2. Log Start | End | Delayed with `console.log()`.
