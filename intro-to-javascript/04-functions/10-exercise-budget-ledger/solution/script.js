function makeBudget(startingBalance) {
  let balance = startingBalance;
  return function spend(amount) {
    if (amount > balance) return null;
    balance -= amount;
    return balance;
  };
}

console.log(`First spend: ${makeBudget(20)(5)}`);
const daily = makeBudget(20);
console.log(`Successive: ${daily(3)},${daily(7)}`);
const capped = makeBudget(10);
console.log(`Overdraw: ${capped(11)},${capped(4)}`);
const north = makeBudget(10);
const south = makeBudget(20);
console.log(`Independent: ${north(2)},${south(1)}`);
