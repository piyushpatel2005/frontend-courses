function getDayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "Weekday";
    default: return "Unknown";
  }
}

console.log(`Weekends: ${getDayType("Saturday")},${getDayType("Sunday")}`);
console.log(`Weekdays: ${getDayType("Monday")},${getDayType("Tuesday")},${getDayType("Wednesday")},${getDayType("Thursday")},${getDayType("Friday")}`);
console.log(`Unknown names: ${getDayType("Holiday")},${getDayType("saturday")}`);
