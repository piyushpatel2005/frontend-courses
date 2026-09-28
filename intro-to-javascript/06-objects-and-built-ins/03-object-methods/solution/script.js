const student = {
  firstName: "Jordan",
  lastName: "Lee",
  scores: [88, 92, 79, 95, 85]
};

const { firstName, lastName } = student;

function fullName(s) {
  return `${s.firstName} ${s.lastName}`;
}

function averageScore(s) {
  const sum = s.scores.reduce((acc, n) => acc + n, 0);
  return Math.round((sum / s.scores.length) * 10) / 10;
}

console.log(`CHECK 1: ${firstName} | ${lastName}`);
console.log(`CHECK 2: ${fullName(student)}`);
console.log(`CHECK 3: ${averageScore(student)}`);

console.log(`${fullName(student)} — avg: ${averageScore(student)}`);
