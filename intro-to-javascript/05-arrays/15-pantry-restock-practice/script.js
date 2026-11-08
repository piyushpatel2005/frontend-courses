const pantry = [["Tea",2],["Cups",8],["Napkins",4],["Fruit",10]];

// Step 1

// TODO: Step 1: Complete task 1 for lowStock(stock, target).
function lowStock(stock,target) {}

// Supplied probe: leave this in place.

try {
  console.log(`Low: ${JSON.stringify(lowStock(pantry,6))} | ${JSON.stringify(lowStock([["Equal",6],["Empty",0]],6))}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

// TODO: Step 2: Implement orderLowStock(low) to sort a copy by ascending count, leaving low unchanged.
function orderLowStock(low) {}

// Supplied probe: leave this in place.

try {
  const low = [["Medium",12],["Low",2]];
  console.log(`Order: ${JSON.stringify(orderLowStock(low))} | Input: ${JSON.stringify(low)}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

// TODO: Step 3: Implement refillNames(ordered) to return the names in the same order, or [] for an empty list.
function refillNames(ordered) {}

// Supplied probe: leave this in place.

try {
  console.log(`Names: ${JSON.stringify(refillNames([["Low",1],["Medium",3]]))} | ${JSON.stringify(refillNames([]))}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

// TODO: Step 4: Implement missingUnits(ordered, target) to total target - count for each pair.
function missingUnits(ordered,target) {}

// Supplied probe: leave this in place.

try {
  console.log(`Missing: ${missingUnits([["Low",1],["Medium",3]],4)},${missingUnits([],4)},${missingUnits([["Zero",0]],4)}`);
} catch (error) {
  console.log("Step 4 pending");
}

// Step 5

// TODO: Step 5: Implement planRefills(stock, target) by combining the four helpers into [names, missingTotal].
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

// TODO: Step 6: Log Tea, Napkins | 6 from planRefills(pantry, 6) on its own line.
