// Write a program that asks the user for their name and greets them with their name.

const prompt = require('prompt-sync')({sigint: true});  // the 'sigint' set to 'true' means that the user can exit at will by pressing 'ctrl + c'

const name = prompt('What is your name? ')

function myName () {
    console.log(`Hey there ${name}`);
}

myName()

