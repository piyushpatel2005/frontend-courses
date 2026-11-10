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
summary: "The previous lesson returned a function. Here, pass a function into `repeatAction` so that it can decide how often to run it."
seo_title: Callbacks | Introduction to JavaScript
seo_description: "The previous lesson returned a function. Here, pass a function into `repeatAction` so that it can decide how often to run it."
seo_keywords: javascript, callbacks, beginner javascript, programming practice
---


The previous lesson returned a function. Here, pass a function into `repeatAction` so that it can decide how often to run it.

A callback is an ordinary function supplied as an argument. Passing `showNotice` supplies the function; writing `showNotice()` calls it immediately and supplies its return value instead. In the example, `repeatNotice` calls `callback(index)`, so the callback receives the current loop index. Its parameter could have another name: the value is passed by position.

Your exercise callback needs no arguments. Each call pushes another `"run"` into the supplied array. `push` returns the array's new length, but `repeatAction` does not need that return value. These callbacks run synchronously, before `repeatAction` finishes.

## Example

```javascript run
function repeatNotice(times, callback) {
  for (let index = 0; index < times; index++) callback(index);
}

repeatNotice(3, (index) => console.log(`Subscriber ${index + 1}`));
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Make `repeatAction(callback)` call its callback exactly three times.
2. Log the collected `runs` with commas between them, on one standalone line.
