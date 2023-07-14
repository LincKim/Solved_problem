// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const prompt = require('prompt-sync')({sigit: true})

const number = Number.parseInt(prompt('Input a number: '))


console.log( 1 + number);