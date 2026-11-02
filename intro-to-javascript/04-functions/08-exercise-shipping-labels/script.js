// Step 1

// TODO: Step 1: Implement shippingFee(weight): return 4 for weights at most 2 and 7 for heavier packages.
function shippingFee(weight) {}

// Supplied probe: leave this in place.

try {
  console.log(`Base fees: ${shippingFee(1)},${shippingFee(2)},${shippingFee(2.5)}`);
} catch (error) {
  console.log("Step 1 pending");
}

// Step 2

// TODO: Step 2: Complete shippingLabel(code, weight, service = "regular") for regular delivery.
function shippingLabel(code, weight, service = "regular") {}

// Supplied probe: leave this in place.

try {
  console.log(`Regular: ${shippingLabel("PK-1",1)} | ${shippingLabel("PK-8",3,"regular")}`);
} catch (error) {
  console.log("Step 2 pending");
}

// Step 3

// TODO: Step 3: Complete expressExtra(service) so express delivery adds 3 and regular delivery adds 0.
function expressExtra(service) { return 0; }

// Supplied probe: leave this in place.

try {
  console.log(`Express: ${shippingLabel("PK-7",3,"express")} | ${shippingLabel("PK-2",1,"express")}`);
} catch (error) {
  console.log("Step 3 pending");
}

// Step 4

// Complete this step here.

// TODO: Step 4: Log Regular label: PK-8: regular $7 using shippingLabel("PK-8", 3, "regular").
