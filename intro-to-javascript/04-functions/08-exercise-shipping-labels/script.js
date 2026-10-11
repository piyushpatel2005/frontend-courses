// Step 1

function shippingFee(weight) {}

// Supplied probe: leave this in place.

try {
  console.log(`Base fees: ${shippingFee(1)},${shippingFee(2)},${shippingFee(2.5)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

function shippingLabel(code, weight, service = "regular") {}

// Supplied probe: leave this in place.

try {
  console.log(`Regular: ${shippingLabel("PK-1",1)} | ${shippingLabel("PK-8",3,"regular")}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

function expressExtra(service) { return 0; }

// Supplied probe: leave this in place.

try {
  console.log(`Express: ${shippingLabel("PK-7",3,"express")} | ${shippingLabel("PK-2",1,"express")}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

// Complete this step here.
