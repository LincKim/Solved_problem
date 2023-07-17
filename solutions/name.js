// Write a program that asks the user for their name and greets them with their name.

const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name? ')

console.log(`Hey there ${name}`);
