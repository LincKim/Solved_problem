// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

const prompt = require('prompt-sync')({sigint: true})


  function sum(n) {
    let sumTotal = 0
    for (let i = 1; i <= n; i++) {
      sumTotal += i  // Adds up all the numbers in the iteration
    }
    return sumTotal;
  }
  
  function product(n) {
    let totalProduct = 1
    for (let j = 1; j <= n; j++) {
      totalProduct *= j  // Multiplies all the numbers in the iteration
    }
    return totalProduct;
  }
  
  function calculate() {
    let n = Number.parseInt(prompt("Enter a number: "));
    let choice = prompt("Enter 'sum' to compute the sum or 'product' to compute the product: ");
  
    if (choice.toLowerCase() === 'sum') {
      let result = sum(n);
      console.log(`The sum of numbers from 1 to ${n} is: ${result}`);
    } else if (choice.toLowerCase() === 'product') {
      let result = product(n);
      console.log(`The product of numbers from 1 to ${n} is: ${result}`);
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
  
  calculate();
  