const employees = [
  { name: "Alice",  dept: "Engineering", salary: 95000 },
  { name: "Bob",    dept: "Marketing",   salary: 72000 },
  { name: "Carol",  dept: "Engineering", salary: 108000 },
  { name: "Dave",   dept: "Marketing",   salary: 68000 },
  { name: "Eve",    dept: "Engineering", salary: 120000 }
];

const engineers = employees.filter(e => e.dept === "Engineering");
const engineeringNames = engineers.map(e => e.name);
const avgEngineerSalary = Math.round(
  engineers.reduce((sum, e) => sum + e.salary, 0) / engineers.length
);
const salaryReport = employees.map(e => `${e.name}: $${e.salary.toLocaleString()}`);

document.getElementById("output").textContent =
  `Engineers: ${engineeringNames.join(",")} | Avg salary: $${avgEngineerSalary.toLocaleString()}`;
