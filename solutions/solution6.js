// Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable() {
    let table = []
    
    for (let i = 1; i <= 12; i++) {  // The outer loop iterates from 1-12, representing the rows
      for (let j = 1; j <= 12; j++) {  // iterates from 1-12 representing the columns
        table += (i * j) + '\t'  // the '\t'(tab character) separates the new entry on the table.
      }
      table += '\n'  // the '\n' (newline character) move items to new line
    }
  
   return table
  }
  

  console.log(multiplicationTable());
  
// * create a function to display the table