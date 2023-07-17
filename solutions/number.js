// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const prompt = require('prompt-sync')({sigit: true})

const number = Number.parseInt(prompt('Input a number: '))

function printSumOfNumber() {
    let sum = 0

    for (let i = 1; i <= number; i++) {
        sum += i   // This is where the sum of i is added into the variable
    }

    console.log(sum);
}

printSumOfNumber()
