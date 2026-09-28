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

A ticket counter has to remember how many tickets it has issued. Build a returned function that keeps that count between calls, then watch its Console output.

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

## Your Tasks

1. Define `makeCounter()` to return a function that remembers a private count, increments it, and returns it.
2. Log `1 | 2 | 3` by calling a fresh counter three times.
