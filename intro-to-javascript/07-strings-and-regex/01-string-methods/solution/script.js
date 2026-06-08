const phrase = 'hello world';
const upperPhrase = phrase.toUpperCase();
const hasWorld = phrase.includes('world');

document.getElementById("output").textContent = `${upperPhrase} | ${hasWorld}`;
