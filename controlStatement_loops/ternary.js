// The ternary conditional operator is the only JavaScriptOperator
// Takes three operands

var age = 17;
console.log((age > 18) ? "You are eligible for vote" : "You are not eligible for vote");

var year = 2020;
debugger;
(
    (year % 4 == 0) ? (year % 100 == 0) ? (year % 400 == 0) ? 
    console.log("The Year " + year + "Is A Leap year") : 
    console.log("The Year " + year + " is not a leap year") : 
    console.log("The Year " + year + " Is a Leap year") : 
    console.log("The Year " + year + " is not A leap year")
);