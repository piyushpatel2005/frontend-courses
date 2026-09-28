function findGuess(secret, guesses) {
  for (const guess of guesses) {
    if (guess === secret) {
      return `Correct: ${guess}`;
    }
  }
  return "No match";
}

console.log(`First guess: ${findGuess(2,[2])}`);
console.log(`Match: ${findGuess(7,[3,9,7,7])}`);
console.log(`Missing: ${findGuess(7,[1,2,3])}`);
console.log(findGuess(7,[3,9,7]));
