---
title: Switch Statement
slug: switch-case
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Each `case` matches the value after `switch (expression)`."
  - "Don't forget `break` at the end of each case to prevent fall-through."
  - "Use `default` as the catch-all (like `else`)."
---

# Switch Statement

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
   - `"Weekend"` for `"Saturday"` or `"Sunday"`
   - `"Weekday"` for any other day name
   - `"Unknown"` if the input is not a valid day name
2. Call `getDayType("Saturday")` and display the result in `#output` as `"Saturday: Weekend"`.
