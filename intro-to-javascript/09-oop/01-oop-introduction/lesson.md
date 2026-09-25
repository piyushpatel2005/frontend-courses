---
title: OOP Introduction
slug: oop-introduction
order: 1
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

## Mission: Talent Roster

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you build reusable artist blueprints for the Starline Awards roster. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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

## Your Task

1. Create a car object with brand, speed, and an accelerate(amount) method that increases speed.
2. Call accelerate(20) and display Roadster | 100 in #output.
