/* challenges */

//  1st challenge 
/*
console.log(10 + "20");
console.log(9 - "5");  // bug
console.log("Munna " + "Kumar");
console.log(" " + " ");
console.log(" " + 0);
console.log("Munna" - "Kumar");
console.log(true + true);  // true = 1 and false = 0
console.log(true + false);
console.log(false + true);
console.log(false - true); // false = 0 and here 0 - 1 = -1
console.log(false + false);
console.log(false - false);
*/
//----------------------------------------------------------------------------------------------------


// 2nd Challege  Nan
   // NaN === NaN;
   // Number.NaN === NaN;
   // isNaN(NaN);
   // isNaN(Number.NaN);
   // Number.isNaN(NaN);
   
   /*
   console.log(NaN === NaN); // False
   console.log(Number.NaN === NaN);  // false
   console.log(isNaN(NaN));   // true
   console.log(isNaN(Number.NaN));  // true
   console.log(Number.isNaN(NaN));  // true
   */
//---------------------------------------------------------------------------------------------------------


// 4th Challenge 
  // What will be the output of 3**3? 
 // What will be the output, when we add a number and a string?
 // Write a program to swap two numbers?
 // Write a program to swap two numbers without using third variable?

 /*
 // What will be the output of 3**3?
 console.log(3*3*3); // 27 // 3 to the power 3

// What will be the output, when we add a number and a string?
console.log(5 + " Munna") // concatinate

// Write a program to swap two numbers?

var a = 5;
var b = 10;

var c = b;
b = a;
a = c;
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Write a program to swap two numbers without using third variable?
var a = 10;
var b = 20
 a = a + b;
 b = a - b;
 a = a - b;

console.log("The value of a is " + a);
console.log("The value of b is " + b);
*/

//---------------------------------------------------------------------------------------------



// 5th Challenge

// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.
/*
var year = 2020;
debugger;
if(year % 4 == 0) {
    if(year % 100 == 0) {
        if( year % 400 == 0) {
            console.log("The Year " + year + "Is a Leap year");
        }else {
            console.log("The Year " + year + " is not a leap year");
        }
    }else {
        console.log("The Year " + year + " Is a Leap year");
    }
}else{
    console.log("The Year " + year + " is not a leap year");
}
*/




//-------------------------------------------------------------------------------------------------------------------

// 6th Challenge

// Print a table for given number (9);

// for(var i= 1; i <= 10; i++) {
//     var table = 8
//     debugger;
//     console.log(table + " * " + i + " = " + table * i);
// }



//-------------------------------------------------------------------------------------------------------------------------------------

