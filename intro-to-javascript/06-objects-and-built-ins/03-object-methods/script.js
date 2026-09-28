const student = {
  firstName: "Jordan",
  lastName: "Lee",
  scores: [88, 92, 79, 95, 85]
};

// TODO 1: Destructure firstName and lastName from student
// const { firstName, lastName } = ...

// TODO 2: fullName(student) returns "Jordan Lee"
function fullName(s) {

}

// TODO 3: averageScore(student) returns average rounded to 1 decimal
function averageScore(s) {

}

// TODO 4: Display "Jordan Lee — avg: 87.8"
console.log("");

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${firstName} | ${lastName}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${fullName(student)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${averageScore(student)}`); } catch (error) { console.log("CHECK pending"); }
