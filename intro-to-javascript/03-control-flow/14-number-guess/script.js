function findGuess(secret, guesses) {
  // TODO: Step 1: Add a loop that returns Correct: <number> immediately when a guess matches the secret.
  // Search for a match here.
  // TODO: Step 2: Replace the fallback after the loop with "No match".
return undefined; // Replace the no-match fallback.
}

console.log(`Matches: ${findGuess(2,[2])} | ${findGuess(7,[3,9,7,7])} | ${findGuess(4,[1,4])}`);
console.log(`Missing: ${findGuess(7,[1,2,3])} | ${findGuess(7,[])}`);
