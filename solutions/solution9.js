// Write a program that prints the next 20 leap years.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  } // The function uses the leap year rule: a year is a leap year if it is divisible by 4 but not divisible by 100, except if it is also divisible by 400.
  
  function printNext20LeapYears() {
    let currentYear = new Date().getFullYear();  // this gets the current yeat we are in at the moment
    let count = 0;
  
    while (count < 20) {
      if (isLeapYear(currentYear)) {
        console.log(currentYear);
        count++;
      }
      currentYear++;
    }
  }
  
  printNext20LeapYears();
  