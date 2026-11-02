// TODO: Step 1: Complete task 1 for students.
const students = [];
// TODO: Step 2: Complete task 2 for "Name: Course".
function activeRegister(records) {
  return [];
}
// Log the register here.

// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 3: Log the joined register as the standalone line Ari: JavaScript | Chen: JavaScript.
console.log(`CHECK students: ${students.map(s => `${s.name},${s.course},${s.active}`).join(" | ")}`);
console.log(`CHECK register: ${activeRegister(students).join(" | ")}`);
console.log(`CHECK other register: ${activeRegister([{name:"Jo",course:"Art",active:true},{name:"Kai",course:"Music",active:false}]).join(" | ")}`);
