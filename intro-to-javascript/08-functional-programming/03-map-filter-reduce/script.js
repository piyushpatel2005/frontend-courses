const employees = [
  { name: "Alice",  dept: "Engineering", salary: 95000 },
  { name: "Bob",    dept: "Marketing",   salary: 72000 },
  { name: "Carol",  dept: "Engineering", salary: 108000 },
  { name: "Dave",   dept: "Marketing",   salary: 68000 },
  { name: "Eve",    dept: "Engineering", salary: 120000 }
];

const engineers = [];
const engineeringNames = [];
const avgEngineerSalary = 0;
const salaryReport = [];
// Log the summary here.

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK engineers: ${engineers.map(e => e.name).join(",")}`);
console.log(`CHECK names: ${engineeringNames.join(",")}`);
console.log(`CHECK average: ${avgEngineerSalary}`);
console.log(`CHECK report: ${salaryReport.join(" | ")}`);
