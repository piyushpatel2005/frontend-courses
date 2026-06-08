function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
document.getElementById("output").textContent = `${counter()} | ${counter()} | ${counter()}`;
