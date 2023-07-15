// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

const prompt = require('prompt-sync')({sigit: true})

const number = Number.parseInt(prompt('Input a number: '))


function num() {

    if (number % 3 === 0 || number % 5 === 0 ) {
        console.log( 1 + number)
    
    }else if (number % 3 !== 0 || number % 5 !== 0)
        console.log('Not a multiple')
    
}

num()