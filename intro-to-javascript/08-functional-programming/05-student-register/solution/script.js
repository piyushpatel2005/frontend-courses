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

console.log(activeRegister(students).join(" | "));
