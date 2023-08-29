// Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable() {
    let table = [] // This holds the rows of the multiplication table
    
    for (let i = 1; i <= 12; i++) {  // The outer loop iterates from 1-12, representing the rows. Generates each row
      for (let j = 1; j <= 12; j++) {  // iterates from 1-12 representing the columns
        table += (i * j) + '\t'  // the '\t'(tab character) separates the new entry on the table.
      }
      table += '\n'  // the '\n' (newline character) move items to new line. This line runs after the inner loop is done filling a row with values.
    }
  
   return table
  }
  

  console.log(multiplicationTable());
  
// * create a function to display the table

/*
function multiplicationTable() {
  let table = '';

  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      const product = i * j;
      table += '|' + product.toString().padStart(4) + '|';
    }
    table += '\n' + '-'.repeat(74) + '\n';
  }

  return table;
}

console.log(multiplicationTable());
*/