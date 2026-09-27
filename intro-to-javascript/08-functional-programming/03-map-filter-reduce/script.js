const employees = [
  { name: "Alice",  dept: "Engineering", salary: 95000 },
  { name: "Bob",    dept: "Marketing",   salary: 72000 },
  { name: "Carol",  dept: "Engineering", salary: 108000 },
  { name: "Dave",   dept: "Marketing",   salary: 68000 },
  { name: "Eve",    dept: "Engineering", salary: 120000 }
];

// TODO 1: engineeringNames - array of names in Engineering dept
const engineeringNames = [];

// TODO 2: avgEngineerSalary - rounded average salary of Engineering employees
const avgEngineerSalary = 0;

// TODO 3: salaryReport - array of "Name: $salary" strings for all employees
const salaryReport = [];

// The probes below show each derived result as you complete it.
console.log(`CHECK names: ${engineeringNames.join(",")}`);
console.log(`CHECK average: ${avgEngineerSalary}`);
console.log(`CHECK report: ${salaryReport[0]} | ${salaryReport[1]} | count: ${salaryReport.length}`);
// Log the summary from engineeringNames and avgEngineerSalary separately.
