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
summary: Practice callbacks with a focused Starline Awards programming mission.
seo_title: Callbacks | Introduction to JavaScript
seo_description: Learn callbacks through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, callbacks, beginner javascript, programming practice
---

# Callbacks

## Mission: Chart Analytics

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you transform chart data with focused functions instead of tangled steps. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

A callback is a function passed into another function. Instead of only describing that idea, this lesson makes the callback run three times and shows the collected results.

## Example

```javascript
function repeatNotice(times, callback) {
  for (let index = 0; index < times; index++) callback(index);
}

repeatNotice(3, (index) => console.log(`Subscriber ${index + 1}`));
```

## Your Task

1. Write repeatAction(callback) so it runs the callback three times.
2. Use it to fill runs with three run values and display run,run,run in #output.
