// Step 1

function add(a, b) {}

// Supplied probe: leave this in place.

try {
  console.log(`Add: ${add(3,4)},${add(-2,2)},${add(0,5)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function subtract(a, b) {}

// Supplied probe: leave this in place.

try {
  console.log(`Subtract: ${subtract(10,4)},${subtract(2,5)}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

function multiply(a, b) {}

// Supplied probe: leave this in place.

try {
  console.log(`Multiply: ${multiply(3,5)},${multiply(0,8)},${multiply(-2,3)}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

function divide(a, b) {}

// Supplied probe: leave this in place.

try {
  console.log(`Divide: ${divide(10,2)},${divide(8,0)},${divide(0,2)},${divide(3,2)}`);
} catch (error) {
  console.log("Step 4 pending");
}

// Step 5

function calculate(a, op, b) {}

// Supplied probe: leave this in place.

try {
  console.log(`Calculate: ${calculate(10,"+",5)},${calculate(10,"-",3)},${calculate(6,"*",7)},${calculate(9,"/",3)},${calculate(8,"/",0)},${calculate(1,"%",1)}`);
} catch (error) {
  console.log("Step 5 pending");
}

// Step 6

// Complete this step here.

// Step 7

// Complete this step here.
