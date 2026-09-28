function shippingFee(weight) {
  if (weight <= 2) return 4;
  return 7;
}

function shippingLabel(code, weight, service = "regular") {
  const extra = service === "express" ? 3 : 0;
  return `${code}: ${service} $${shippingFee(weight) + extra}`;
}

console.log(`Base fees: ${shippingFee(2)},${shippingFee(3)}`);
console.log(`Default label: ${shippingLabel("PK-1", 1)}`);
console.log(`Express label: ${shippingLabel("PK-7", 3, "express")}`);
console.log(`Regular label: ${shippingLabel("PK-8", 3, "regular")}`);
