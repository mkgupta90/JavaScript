/*-----------Interview Question------------------*/

// 1: Difference between null vs undefined? 
    /*
    var iAmUseless = null
    console.log(iAmUseless); // Outpur = null
    console.log(typeof(iAmUseless)); // Output = object // bug

    var iAmStandBy; //variable delcleared but value not assign
    console.log(iAmStandBy); // Output = undefined
    console.log(typeof(iAmStandBy)); // output = undefined
    */
//-----------------------------------------------------------------------------------------------------


// 2: What is NaN (Not a Number)
   //NaN is a property of the global object
   //It is a variable in global scope
   //The initial value of NaN is Not-A-Number

   /*
   console.log("Munna" - "Kumar");  // Output = NaN

   var phoneNumber = 9876543210
   var myName = "Munna Kumar"

   console.log(phoneNumber);
   console.log(myName);

   console.log(isNaN(phoneNumber));  // output = false
   console.log(isNaN(myName));       // output = true

   if(isNaN(myName)) {
       console.log("Enter valid Phone Number");
   }

   */

//-------------------------------------------------------------------------------------------------   


// 3 : What is the Difference between == vs === 

/*
var num1 = 5;
var num2 = "5";

// == check only value of the variable
console.log(num1 == num2);
console.log(typeof(num1))
console.log(typeof(num2))
console.log(num2);

// === check value and data type of that variable
console.log(num1 === num2);
console.log(typeof(num1))
console.log(typeof(num2))
console.log(num2);

*/

//---------------------------------------------------------------------------------------------


   
