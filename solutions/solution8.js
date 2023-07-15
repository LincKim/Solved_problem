// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

const prompt = require('prompt-sync')({sigit: true})

function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let previousGuess = null;  // keeps track of the previous guess to handle consecutive identical guesses
    let tries = 0;  // variable counts the number of tries.

  
    while (true) {
      let guess = Number.parseInt(prompt('Guess a number between 1 and 100: '));
      
      if (isNaN(guess)) {
        console.log('Invalid input. Please enter a valid number.');
        continue;
      }
  
      if (guess === previousGuess) {
        console.log('You just guessed that number. Try a different one.');
        continue;
      }
  
      tries++; // For each valid guess, the program increments the tries counter and compares the guess with the secret number
  
      if (guess < secretNumber) {
        console.log('Too small! Try a higher number.');
      } else if (guess > secretNumber) {
        console.log('Too large! Try a lower number.');
      } else {
        console.log(`Congratulations! You guessed the secret number ${secretNumber} in ${tries} tries.`);
        break;
      }
  
      previousGuess = guess;
    }
  }
  
  guessingGame();
  