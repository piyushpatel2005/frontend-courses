const employees = [
  { name: "Alice",  dept: "Engineering", salary: 95000 },
  { name: "Bob",    dept: "Marketing",   salary: 72000 },
  { name: "Carol",  dept: "Engineering", salary: 108000 },
  { name: "Dave",   dept: "Marketing",   salary: 68000 },
  { name: "Eve",    dept: "Engineering", salary: 120000 }
];

// TODO: Step 1: Set engineers to the employees whose dept is "Engineering", using filter.
const engineers = [];
// TODO: Step 2: Use map on engineers to set engineeringNames to their names.
const engineeringNames = [];
// TODO: Step 3: Complete task 3 for avgEngineerSalary.
const avgEngineerSalary = 0;
// TODO: Step 4: Complete task 4 for map.
const salaryReport = [];
// Log the summary here.

// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 5: Log Engineers: Alice,Carol,Eve | Avg salary: $107,667 using your computed names and average.
console.log(`CHECK engineers: ${engineers.map(e => e.name).join(",")}`);
console.log(`CHECK names: ${engineeringNames.join(",")}`);
console.log(`CHECK average: ${avgEngineerSalary}`);
console.log(`CHECK report: ${salaryReport.join(" | ")}`);
