// TODO 1: add(a, b)
function add(a, b) {

}

// TODO 2: subtract(a, b)
function subtract(a, b) {

}

// TODO 3: multiply(a, b)
function multiply(a, b) {

}

// TODO 4: divide(a, b) — return null when b === 0
function divide(a, b) {

}

// TODO 5: calculate(a, op, b) — delegates to add/subtract/multiply/divide
function calculate(a, op, b) {

}

// TODO 6 & 7: Log both results to the Console.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`Add 3,4: ${add(3,4)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Subtract 10,4: ${subtract(10,4)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Multiply 3,5: ${multiply(3,5)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Divide cases: ${divide(10,2)},${divide(8,0)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Calculate cases: ${calculate(10,"+",5)},${calculate(10,"-",3)},${calculate(6,"*",7)},${calculate(9,"/",3)},${calculate(8,"/",0)},${calculate(1,"%",1)}`); } catch (error) { console.log("CHECK pending"); }
