const student = {
  name: "Riley",
  course: "JavaScript",
  score: 88
};
console.log(`CHECK 1: ${student.name} | ${student.course} | ${student.score}`);

student.score = 92;
console.log(`CHECK 2: ${student.score}`);
student.status = "enrolled";
console.log(`CHECK 3: ${student.status}`);

console.log(`${student.name} | ${student.course} | ${student.score} | ${student.status}`);
