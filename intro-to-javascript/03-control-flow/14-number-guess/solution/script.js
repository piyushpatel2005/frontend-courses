function findGuess(secret, guesses) {
  for (const guess of guesses) {
    if (guess === secret) return `Correct: ${guess}`;
  }
  return "No match";
}

console.log(`Matches: ${findGuess(2,[2])} | ${findGuess(7,[3,9,7,7])} | ${findGuess(4,[1,4])}`);
console.log(`Missing: ${findGuess(7,[1,2,3])} | ${findGuess(7,[])}`);
