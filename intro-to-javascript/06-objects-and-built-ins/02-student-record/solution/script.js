// Task 1: Initial student properties

const student = { name: "Riley", course: "JavaScript", score: 88 };

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${student.name} | ${student.course} | ${student.score}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Updated score

student.score = 92;

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (student.score));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Enrolled status

student.status = "enrolled";

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (student.status));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate student summary

console.log(`${student.name} | ${student.course} | ${student.score} | ${student.status}`);
