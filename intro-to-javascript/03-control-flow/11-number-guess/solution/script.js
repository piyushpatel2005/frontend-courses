function findGuess(secret, guesses) {
  for (const guess of guesses) {
    if (guess === secret) {
      return `Correct: ${guess}`;
    }
  }
  return "No match";
}

console.log(findGuess(7, [3, 9, 7]));
