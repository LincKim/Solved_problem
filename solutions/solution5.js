// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

const prompt = require('prompt-sync')({sigit: true})


function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  function product(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    return product;
  }
  
  function calculate() {
    let n = Number.parseInt(prompt("Enter a number: "));
    let choice = prompt("Enter 'sum' to compute the sum or 'product' to compute the product: ");
  
    if (choice.toLowerCase() === 'sum') {
      let result = computeSum(n);
      console.log(`The sum of numbers from 1 to ${n} is: ${result}`);
    } else if (choice.toLowerCase() === 'product') {
      let result = computeProduct(n);
      console.log(`The product of numbers from 1 to ${n} is: ${result}`);
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
  
  calculate();
  