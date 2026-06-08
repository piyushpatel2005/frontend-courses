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
document.getElementById("result").textContent = `10 + 5 = ${res}`;

const divResult = calculate(8, "/", 0);
document.getElementById("zero-result").textContent =
  `8 / 0 = ${divResult === null ? "Error: Division by zero" : divResult}`;
