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

The previous lesson returned a function. Now pass one *into* `repeatAction` to collect three results. Run `script.js` and inspect the Console.

A callback is a function passed into another function. Instead of only describing that idea, this lesson makes the callback run three times and shows the collected results.

## Example

```javascript
function repeatNotice(times, callback) {
  for (let index = 0; index < times; index++) callback(index);
}

repeatNotice(3, (index) => console.log(`Subscriber ${index + 1}`));
```

## Your Tasks

1. Complete `repeatAction(callback)` so it invokes the callback exactly three times.
2. Log the collected `runs` values as a standalone `run,run,run` line.
