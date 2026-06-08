const person = {
  name: 'Ava',
  age: 21,
  city: 'Porto'
};

person.city = 'Lisbon';

document.getElementById("output").textContent = `${person.name} | ${person.city}`;
