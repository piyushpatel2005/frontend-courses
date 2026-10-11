---
title: "Demo: Summarize Completed Bike Rides"
slug: demo-summary-pipeline
order: 10
language: javascript
lesson_type: interactive
summary: "A bike-share report counts minutes only for completed rides. Track the type of value after each step: an array of ride objects, then an array of minute values, then one number."
seo_title: "Map Filter Reduce Bike Ride Demo | Introduction to JavaScript"
seo_description: "A bike-share report counts minutes only for completed rides. Track the type of value after each step: an array of ride objects, then an array of minute values, then one number."
seo_keywords: [javascript map filter reduce, array pipeline, ride summary]
---

# Count completed ride minutes

A bike-share report counts minutes only for completed rides. Track the type of value after each step: an array of ride objects, then an array of minute values, then one number.

The reduce callback receives the running total and the next duration. Returning their sum feeds the next call. Its initial `0` also makes an empty filtered array return zero rather than throwing.

```javascript run
const rides = [
  { status: "completed", seconds: 900 },
  { status: "cancelled", seconds: 300 },
  { status: "completed", seconds: 1200 }
];
const minutes = rides
  .filter((ride) => ride.status === "completed")
  .map((ride) => ride.seconds / 60)
  .reduce((total, duration) => total + duration, 0);
console.log(`${minutes} completed minutes`);
```

Run the example and confirm `35 completed minutes`. If both completed rides were cancelled, the filtered array would be empty and the initial reduce value would produce zero. In the next exercise, you will summarize delivered parcels using a different unit and return a reusable result rather than just logging a total.
