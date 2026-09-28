---
title: "Demo: Summarize Completed Bike Rides"
slug: demo-summary-pipeline
order: 10
language: javascript
lesson_type: interactive
summary: Chain filter, map, and reduce to total minutes for completed bike rides.
seo_title: "Map Filter Reduce Bike Ride Demo | Introduction to JavaScript"
seo_description: Run a JavaScript data pipeline that selects completed bike rides and totals their durations.
seo_keywords: [javascript map filter reduce, array pipeline, ride summary]
---

# Count completed ride minutes

A bike-share report must ignore cancelled rides. `filter` keeps completed rides, `map` turns each ride into minutes, and `reduce` totals those numbers, starting from `0` so an empty set is safe.

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

Run the example, then change both completed rides to cancelled and confirm it reports zero. In the next exercise, you will summarize delivered parcels using a different unit and return a reusable result rather than just logging a total.
