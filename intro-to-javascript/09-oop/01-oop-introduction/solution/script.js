const car = {
  brand: 'Roadster',
  speed: 80,
  accelerate(amount) {
    this.speed += amount;
  }
};

car.accelerate(20);
document.getElementById("output").textContent = `${car.brand} | ${car.speed}`;
