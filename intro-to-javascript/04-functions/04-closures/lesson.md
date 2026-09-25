---
title: Closures
slug: closures
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Return an inner function that updates count each time it runs."
  - "Call the returned function three times and join the results with |."
summary: Practice closures with a focused Starline Awards programming mission.
seo_title: Closures | Introduction to JavaScript
seo_description: Learn closures through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, closures, beginner javascript, programming practice
---

# Closures

## Mission: Backstage Toolkit

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you package repeatable backstage jobs into small, dependable functions. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

A closure lets an inner function remember the variables around it. A counter is the clearest beginner example because each call proves the function kept its previous state.

## Example

```javascript
function makeTicketDispenser() {
  let nextTicket = 1;
  return function () {
    return nextTicket++;
  };
}

const takeTicket = makeTicketDispenser();
console.log(takeTicket(), takeTicket());
```

## Your Task

1. Write makeCounter() so it returns a function that increases and returns a private count value.
2. Log 1 | 2 | 3 with `console.log()`. by calling the same counter three times.
