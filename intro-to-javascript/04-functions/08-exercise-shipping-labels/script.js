// Write two reusable functions. Return strings; log calls below.
function shippingFee(weight) {
}

function shippingLabel(code, weight, service = "regular") {
}

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`Base fees: ${shippingFee(2)},${shippingFee(3)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Default label: ${shippingLabel("PK-1",1)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Express label: ${shippingLabel("PK-7",3,"express")}`); } catch (error) { console.log("CHECK pending"); }
