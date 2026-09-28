const students = [
  { name: "Ari", course: "JavaScript", active: true },
  { name: "Bea", course: "CSS", active: false },
  { name: "Chen", course: "JavaScript", active: true }
];

function activeRegister(records) {
  return records
    .filter((student) => student.active)
    .map((student) => `${student.name}: ${student.course}`);
}

console.log(`CHECK students: ${students.map(s => s.name).join(",")} | active: ${students.map(s => s.active).join(",")}`);
console.log(`CHECK register: ${activeRegister(students).join(" | ")}`);
console.log(activeRegister(students).join(" | "));
