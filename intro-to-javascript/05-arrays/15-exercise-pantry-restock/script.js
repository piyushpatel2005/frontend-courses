const pantry = [["Tea",2],["Cups",8],["Napkins",4],["Fruit",10]];

// Step 1

function lowStock(stock,target) {}

// Supplied probe: leave this in place.

try {
  console.log(`Low: ${JSON.stringify(lowStock(pantry,6))} | ${JSON.stringify(lowStock([["Equal",6],["Empty",0]],6))}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function orderLowStock(low) {}

// Supplied probe: leave this in place.

try {
  const low = [["Medium",12],["Low",2]];
  console.log(`Order: ${JSON.stringify(orderLowStock(low))} | Input: ${JSON.stringify(low)}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

function refillNames(ordered) {}

// Supplied probe: leave this in place.

try {
  console.log(`Names: ${JSON.stringify(refillNames([["Low",1],["Medium",3]]))} | ${JSON.stringify(refillNames([]))}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

function missingUnits(ordered,target) {}

// Supplied probe: leave this in place.

try {
  console.log(`Missing: ${missingUnits([["Low",1],["Medium",3]],4)},${missingUnits([],4)},${missingUnits([["Zero",0]],4)}`);
} catch (error) {
  console.log("Step 4 pending");
}

// Step 5

function planRefills(stock,target) {}

// Supplied probe: leave this in place.

try {
  const stock = [["Medium",3],["Low",1]];
  console.log(`Plan: ${JSON.stringify(planRefills(stock,4))} | Full: ${JSON.stringify(planRefills([["Full",6]],6))} | Empty: ${JSON.stringify(planRefills([],6))} | Input: ${JSON.stringify(stock)}`);
} catch (error) {
  console.log("Step 5 pending");
}

// Step 6

// Complete this step here.
