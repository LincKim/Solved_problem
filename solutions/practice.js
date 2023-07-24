// the correct syntax for addding apostrophe is e.g 'her\'s'

// TEMPLATE LITERALS 
// This are strings wrapped in backticks. Example;

const myString = 'template literal'

const myNumber = 10

const myBoolean =  false 

const newString = `Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool! Beware that new lines inside of a ${myString} will be preserved as new lines on the resulting ${typeof myString}` 

console.log(newString.toUpperCase()); // We can append string methods

const currentUser = 'Grace Hopper'

const welcomeMessage = `WElcome to Flatbook, ${currentUser}`

console.log(welcomeMessage.toLowerCase());

// ** .slice()
// this method extracts a section of a string and returns it as new string.
// It does not modify the original string
// It takes in 2 arguments

const currentUserLength = currentUser.length

console.log(currentUserLength);

const userCurrent = currentUser.slice(5) // This return the name from that index to the very end

// const userCurrent = currentUser.slice(0, 5)- // This one returns from the beginning of the string to the specified index.

console.log(userCurrent);

// # COMPARISONS IN JS
// Strict Equality Operator (===) and Strict Inequality Operator(!==)
// - This can only return true if the data types are similar. It is logical and accurate

// Loose Equality Operator (==) and Loose Inequality Operator(!=)-- This one perform a type conversion
//  example
//  42 == '42'  returns true

// # RELATIONAL OPERATORS (>, >=, <, <=)
// Beware of type conversion when comparing non-numbers against numbers. If you are comparing a number with a string the JS engine will try and convert the string to a number and then return true or false.
// the resulting statements are Boolean expressions


// // OPERATORS
// num += 1 // == num = num + 1
// num -= 2 // == num = num -2
// num *= 3 // == num = num * 3
// num /= 4 // == num = num / 4
// num %= 5 // num = num % 5    


console.log('5 & 1:', (5 & 1));  // bitwise operators

// CONDITIONAL

function isRose(cat){
    if (cat === 'rose') {
        return "Hi Rose, you are a cat"
    }else if (typeof cat === 'string'){  // This method filters out wrong data type
        return `What's up ${cat}?`
    }else {
        return 'Sorry, please pass in a cat\'s name!'
    }
}
isRose()

// TERNARY OPERATOR

function isCat(cat){
    return cat === 'land'?'Hi land, you are a cat': `What's up ${cat}?`
    // the 'return' keyword should be there fot the function to return something
    // On this one it won't matter the data type
}
isCat()

// switch

function isDog(dog){    // This an alternative for the if...else conditional
    switch(dog){
        case 'rose':
            return 'Hi rose you are a dog!'
            break; // It is used to stop the switch statement from continuing to look at case statements once it finds a match
        case 'tom':
            return 'Hey tom, you are german shepherd'
            break;
        default:
            return `Hi ${dog}!`
            break;
    }
}

// LOOPS

// Often used when we are working with arrays
// The (for) loop is used in algorithms

/// for loop
for (let i = 0; i < 10; i++) {  // This code says that as long as 'i' is less than 10 then keep on incrementing with 1
    console.log(i);
}

/// While loop
let i = 0   // This is basically the same loop as the one above
while (i < 10) {   // Condition is checked first before the block of code
    console.log(i)
    i++
}

/// do...while

let j = 0
do {  // block of code executed before the condition is checked
    console.log(j)
    j++
} while (j < 10)


/// OBJECT ORIENTED PROGRAMMING
    // Ways to initialize an object
let obj = {} // method 1
let obj2 = new Object ()  // Method 2

obj = {
    name: {
        first: 'Lincoln',
        last: 'Too'
    },
    address: 'New Jerusalem'
}

// let book = {
//     title: '',
//     page: '',
//     isbn: ''
// }

// book.title = 'Heaven is my Home'
// book.page = 500
// console.log(book);

function Book(title, pages, isbn) {  // CLASS DECLARATION(CONSTRUCTOR)
    this.title = title
    this.pages = pages
    this.isbn = isbn
}

let book = new Book('title', 'pag', 'isbn')  // INSTANTIATION OF THE CLASS

console.log(book.title);
book.title = 'HEAVEN'
console.log(book.title);
console.log(book);


Book.prototype.printTitle = function() {   // Methods/class function
    console.log(this.title);   //'prototype' method saves memory and processing cost regarding assigning the functions to the instances. It will be shared in all instances
}
book.printTitle()  // calling the instantiated class


/// ARROW FUNCTIONS

const hello = () => console.log('hello!');
hello()  // call the function


/// ENHANCED OBJECT PROPERTIES
let [x, y] = ['a', 'b']  // array destructuring(initializing variable at once)

// [x, y] = [y, x]  // Can also be used to swap values at once

let obj3 = {x, y}

console.log(obj3);



/// ARRAYS




/// ALGORITHM COMPLEXITY

// Big-O Notaion
// O(1) CONSTANT

function increment(num) { // Time remains the same even if you increment the value of the parameter
    return ++num
}


// O(n)  LINEAR

function sequentialSearch (array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i
        }  // this function has LINEAR COMPLEXITY. n is the size of the array(input)
    }
    return -1
}

// example 2

function sequentialSearch2 (array, value, equalsFn = defaultEquals) {
    let cost = 0
    for (let i = 0; i < array.length; i++) {
        cost++
        if (equalsFn(value, array[i])) {
            return i
        }
    }
    console.log(`cost of sequentialSearch with input size ${array.length} is ${cost}`);
    return -1
}