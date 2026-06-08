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
document.getElementById("output").textContent = `Saturday: ${getDayType("Saturday")}`;
