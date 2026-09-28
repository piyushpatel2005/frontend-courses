---
title: OOP Introduction
slug: oop-introduction
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Store both data and a method inside the car object."
  - "Inside accelerate, update this.speed by adding the amount."
summary: Practice oop introduction with a focused Starline Awards programming mission.
seo_title: OOP Introduction | Introduction to JavaScript
seo_description: Learn oop introduction through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, oop introduction, beginner javascript, programming practice
---

# OOP Introduction

The notebook demo grouped state and a method on one object. Now make a car object that can change its own speed. Run `script.js` and inspect the Console.

Object-oriented thinking starts with objects that hold both data and behavior. A car that knows its own speed is a simple way to introduce that pattern.

## Example

```javascript
const thermostat = {
  temperature: 20,
  raise(degrees) {
    this.temperature += degrees;
  }
};
thermostat.raise(2);
console.log(thermostat.temperature);
```

## Your Tasks

1. Give `car` a brand of `Roadster` and a speed of `80`. The starter logs its brand.
2. Add an `accelerate(amount)` method that increases `this.speed`. The starter calls it with `20` and logs the updated speed.
3. Log the final result `Roadster | 100` on its own Console line.

