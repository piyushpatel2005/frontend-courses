function findGuess(secret, guesses) {
  // Search for a match here.
  return undefined; // Replace the no-match fallback.
}

console.log(`Matches: ${findGuess(2,[2])} | ${findGuess(7,[3,9,7,7])} | ${findGuess(4,[1,4])}`);
console.log(`Missing: ${findGuess(7,[1,2,3])} | ${findGuess(7,[])}`);
