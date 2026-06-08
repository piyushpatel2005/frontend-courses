let total = [5, 10, 15].reduce((sum, value) => sum + value, 0);
let hasAdult = [12, 17, 21].some((age) => age >= 18);
let allPositive = [1, 2, 3].every((n) => n > 0);

document.getElementById("output").textContent = `${total} | ${hasAdult} | ${allPositive}`;
