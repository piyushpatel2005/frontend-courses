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

For a day name, select one of three outcomes: weekend, weekday, or unknown.

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

When a case logs or assigns a result, use `break` to stop execution from falling into the next case. In a function, `return` also stops execution, so a case that returns does **not** need `break`.

## Fall-through (sometimes intentional)

```javascript
const light = "amber";
switch (light) {
    case "amber":
    case "red":
        console.log("Stop");
        break;
    default:
        console.log("Go");
}
```

Adjacent cases can share a result. The switch matches exact values: `"Saturday"` is not the same as `"saturday"`.

## Your Tasks

1. Implement `getDayType(day)` using `switch`: Saturday and Sunday return `"Weekend"`, weekdays return `"Weekday"`, and any other name returns `"Unknown"`. The provided Sunday probe should print `Sunday: Weekend`.
2. Log `Weekend pair: Weekend,Weekend` from Saturday and Sunday calls.
3. Log `Weekdays: Weekday,Weekday,Weekday,Weekday,Weekday` from Monday through Friday calls.
4. Log `Holiday: Unknown` from an invalid name.
5. Log `Saturday: Weekend` from `getDayType("Saturday")`.
