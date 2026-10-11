const student = { firstName: "Jordan", lastName: "Lee", scores: [88, 92, 79, 95, 85] };

// Task 1: Destructured names

const { firstName, lastName } = student;

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${firstName} | ${lastName}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Full name for different records

function fullName(s) {
  return `${s.firstName} ${s.lastName}`;
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${fullName(student)} | ${fullName({firstName:"Ari",lastName:"Chen"})}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Average and one-decimal rounding

function averageScore(s) {
  const sum = s.scores.reduce((total, score) => total + score, 0);
  return Math.round((sum / s.scores.length) * 10) / 10;
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${averageScore(student)} | ${averageScore({scores:[1,2,2]})} | ${averageScore({scores:[0]})}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate student average

console.log(`${fullName(student)} — avg: ${averageScore(student)}`);
