// Write a program that prints all prime numbers, a prime number is a number divisible by 1 and itself eg 2,3,5,7,11….n. To print all prime numbers find the max value of an int in js

function isPrime(num) {
    if (num < 2) {
      return false
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) { // iterating from 2 up to the square root of the number and checking if any of the iterations divide the number evenly. If a divisor is found, the number is not prime.
    if (num % i === 0) {
        return false
      }
    }
  
    return true
  }
  
  function printPrimeNumbers() {
    for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) { // This constant is used to find the maximum integer
      if (isPrime(i)) {
        console.log(i)
      }
    }
  }
  
  printPrimeNumbers();
  