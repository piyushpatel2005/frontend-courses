// Replace the empty array with the three records shown in the task.
const students = [];

function activeRegister(records) {
  // Filter active records and map them to "Name: Course" entries.
  return [];
}

console.log(`CHECK students: ${students.map(s => s.name).join(",")} | active: ${students.map(s => s.active).join(",")}`);
console.log(`CHECK register: ${activeRegister(students).join(" | ")}`);
// Log the register on its own line.
