function greet(name) {
  return `Hello, ${name}!`;
}

document.getElementById("output").textContent = `${greet('Alice')} | ${greet('Bob')}`;
