const students = [{ name: "Ari", course: "JavaScript", active: true },
  { name: "Bea", course: "CSS", active: false },
  { name: "Chen", course: "JavaScript", active: true }];
function activeRegister(records) {
  return records.filter(student => student.active).map(student => `${student.name}: ${student.course}`);
}
console.log(activeRegister(students).join(" | "));

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK students: ${students.map(s => `${s.name},${s.course},${s.active}`).join(" | ")}`);
console.log(`CHECK register: ${activeRegister(students).join(" | ")}`);
console.log(`CHECK other register: ${activeRegister([{name:"Jo",course:"Art",active:true},{name:"Kai",course:"Music",active:false}]).join(" | ")}`);
