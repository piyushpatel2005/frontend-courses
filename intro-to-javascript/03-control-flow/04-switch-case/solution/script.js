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
    default:
      return "Unknown";
  }
}

console.log(`Sunday: ${getDayType("Sunday")}`);
console.log(`Weekend pair: ${["Saturday","Sunday"].map(getDayType).join(",")}`);
console.log(`Weekdays: ${["Monday","Tuesday","Wednesday","Thursday","Friday"].map(getDayType).join(",")}`);
console.log(`Holiday: ${getDayType("Holiday")}`);
console.log(`Saturday: ${getDayType("Saturday")}`);
