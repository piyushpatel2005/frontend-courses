const students = [];
function activeRegister(records) {
  return [];
}
// Log the register here.

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK students: ${students.map(s => `${s.name},${s.course},${s.active}`).join(" | ")}`);
console.log(`CHECK register: ${activeRegister(students).join(" | ")}`);
console.log(`CHECK other register: ${activeRegister([{name:"Jo",course:"Art",active:true},{name:"Kai",course:"Music",active:false}]).join(" | ")}`);
