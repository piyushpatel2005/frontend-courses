const student = { firstName: "Jordan", lastName: "Lee", scores: [88, 92, 79, 95, 85] };

// Task 1: Destructured names

// Destructure firstName and lastName here.

// Supplied check 1: leave this code in place.

// TODO: Step 1: Destructure firstName and lastName from student.
try {
  console.log("CHECK 1: " + (`${firstName} | ${lastName}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Full name for different records

// TODO: Step 2: Complete fullName(s) to return the given record's first and last names separated by a space.
function fullName(s) {
  // Return the full name.
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${fullName(student)} | ${fullName({firstName:"Ari",lastName:"Chen"})}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Average and one-decimal rounding

// TODO: Step 3: Complete averageScore(s) to return the mean of its scores, rounded to one decimal place.
function averageScore(s) {
  // Return the rounded mean.
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + (`${averageScore(student)} | ${averageScore({scores:[1,2,2]})} | ${averageScore({scores:[0]})}`));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate student average

// Log the final average here.

// TODO: Step 4: Log Jordan Lee — avg: 87.8 on a separate line using both helpers and student.
