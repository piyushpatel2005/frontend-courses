function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function calculate(a, op, b) {
  switch (op) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default:  return null;
  }
}

const res = calculate(10, "+", 5);
console.log(`10 + 5 = ${res}`);

const divResult = calculate(8, "/", 0);
console.log(`8 / 0 = ${divResult === null ? "Error: Division by zero" : divResult}`);

console.log(`Add 3,4: ${add(3,4)}`);
console.log(`Subtract 10,4: ${subtract(10,4)}`);
console.log(`Multiply 3,5: ${multiply(3,5)}`);
console.log(`Divide cases: ${divide(10,2)},${divide(8,0)}`);
console.log(`Calculate cases: ${calculate(10,"+",5)},${calculate(10,"-",3)},${calculate(6,"*",7)},${calculate(9,"/",3)},${calculate(8,"/",0)},${calculate(1,"%",1)}`);
