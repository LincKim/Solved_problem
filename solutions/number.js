// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const prompt = require('prompt-sync')({sigint: true})

const number = Number.parseInt(prompt('Input a number: ')) // We have to convert into an integer for it to work

function printSumOfNumber() {
    let sum = 0 // variable initialized to store and keep track of the value of sum of the numbers

    for (let i = 1; i <= number; i++) {
        sum += i  // This is where the number 'i' is added into the value stored in the variable as long as the condition set above is still being met
    }

    console.log(sum); // print the result outside of the loop to get the final sum
}

printSumOfNumber()
