---
title: Switch Statement
slug: switch-case
order: 4
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Each `case` matches the value after `switch (expression)`."
  - "Don't forget `break` at the end of each case to prevent fall-through."
  - "Use `default` as the catch-all (like `else`)."
summary: Practice switch statement with a focused Starline Awards programming mission.
seo_title: Switch Statement | Introduction to JavaScript
seo_description: Learn switch statement through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, switch statement, beginner javascript, programming practice
---

# Switch Statement

## Mission: Decision Desk

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you teach the Starline Awards engine how to choose the next action. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

The `switch` statement is an alternative to long `if/else if` chains when you are matching a single value against several discrete options.

## Syntax

```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code when no case matched
}
```

> **Important:** Always add `break` at the end of each case. Without it, execution "falls through" to the next case.

## Fall-through (sometimes intentional)

```javascript
let day = "Saturday";
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Weekday");
}
```

## Your Task

1. Write a function `getDayType(day)` that accepts a day name (e.g. `"Monday"`) and returns:
2. Call `getDayType("Saturday")` and display the result in `#output` as `"Saturday: Weekend"`.
3. Verify the program behavior: getDayType identifies weekdays.
4. Verify the program behavior: getDayType returns Unknown for invalid input.
5. Verify the program behavior: logs the mission result.
