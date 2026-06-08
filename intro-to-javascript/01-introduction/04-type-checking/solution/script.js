const messageType = typeof "hello";
const isList = Array.isArray([1, 2, 3]);

document.getElementById("output").textContent = `${messageType} | ${isList}`;
