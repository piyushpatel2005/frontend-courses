function getDayType(day) {
  switch (day) {
    // Add weekend cases here.
    // Add weekday cases here.
    default: return undefined;
  }
}

console.log(`Weekends: ${getDayType("Saturday")},${getDayType("Sunday")}`);
console.log(`Weekdays: ${getDayType("Monday")},${getDayType("Tuesday")},${getDayType("Wednesday")},${getDayType("Thursday")},${getDayType("Friday")}`);
console.log(`Unknown names: ${getDayType("Holiday")},${getDayType("saturday")}`);
