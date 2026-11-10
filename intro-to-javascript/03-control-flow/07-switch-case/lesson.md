---
title: "Switch Case"
slug: switch-case
order: 7
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Each `case` matches the value after `switch (expression)`."
  - "A return exits the function, so returning cases do not need break."
  - "Use `default` as the catch-all (like `else`)."
summary: "Group exact day-name cases in a switch with an unknown-name fallback."
seo_title: Switch Statement | Introduction to JavaScript
seo_description: "Group exact day-name cases in a switch with an unknown-name fallback."
seo_keywords: javascript, switch statement, beginner javascript, programming practice
---


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

```javascript run
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

The starter supplies `switch (day)` and all calls. Add each group of cases inside that switch. An empty case falls through to the next case, so Saturday can share Sunday's return without duplicating the result. A returned value ends the function; do not add a separate `break` after it.

Run after each group. The weekend line completes first, then the weekday line, then unknown names. Incomplete groups reach the `undefined` fallback and remain visible rather than stopping the script.

Edit `script.js`, Run to inspect the supplied probes, and Submit to check the tasks.

## Your Tasks

1. Add the Saturday and Sunday cases sharing the return value `"Weekend"`. Both weekend probes should agree.
2. Add Monday through Friday as cases sharing the return value `"Weekday"`. All five weekday probes should agree.
3. Make the default return `"Unknown"`. The Holiday and lowercase saturday probes should both use it.
