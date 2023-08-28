// Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

const prompt = require('prompt-sync')({sigint: true})

const number = Number.parseInt(prompt('Input a number: '))

function num() {
    let sum = 0

    for (let j = 0; j <= number; j++) { // Checks whether there are multiples of 3 or 5 within the range of number that the user has put.
        if (j % 3 === 0 || j % 5 === 0 ) { // We are checking whether 'j' is a multiple of 3 or 5 before adding it up
            sum += j  // What is happening here is that the loop is finishing first before printing the sum
        }
    }

    // Code from this point runs after the one above has finished
    if (sum !== 0) { // At this point is when we print the sum after the loop is done
        console.log(`The sum of the multiples of 3 and 5 is ${sum}`)
    }else {
        console.log('Not a multiple or number too small')
    }

}

num()