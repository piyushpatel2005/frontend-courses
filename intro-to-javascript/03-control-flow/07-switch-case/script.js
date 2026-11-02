function getDayType(day) {
  switch (day) {
  // TODO: Step 1: Add the Saturday and Sunday cases sharing the return value "Weekend".
    // Add weekend cases here.
// TODO: Step 2: Add Monday through Friday as cases sharing the return value "Weekday".
    // Add weekday cases here.
    default: // TODO: Step 3: Make the default return "Unknown". The Holiday and lowercase saturday probes should both use it.
return undefined;
  }
}

console.log(`Weekends: ${getDayType("Saturday")},${getDayType("Sunday")}`);
console.log(`Weekdays: ${getDayType("Monday")},${getDayType("Tuesday")},${getDayType("Wednesday")},${getDayType("Thursday")},${getDayType("Friday")}`);
console.log(`Unknown names: ${getDayType("Holiday")},${getDayType("saturday")}`);
