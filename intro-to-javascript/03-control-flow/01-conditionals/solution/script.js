function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

console.log(`Grade 95: ${getGrade(95)}`);
console.log(`Grade set: ${[95,85,75,65,50].map(getGrade).join(",")}`);
console.log(`Grade boundaries: ${[90,80,60].map(getGrade).join(",")}`);
console.log(`Grade: ${getGrade(85)}`);
