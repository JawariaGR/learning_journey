// QUESTION NO 76
// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result.
// Show how you can call this function and log the result.

function Addition(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(Addition(34, 65));

//QUESTION NO 77
// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello.
//  If no name is given, it should greet an anonymous user.

function greet(user: string = "Anonymous"): string {
  return `Hello ${user}`;
}
console.log(greet("maria"));
console.log(greet());

// QUESTION NO 78
// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// Function Expressions
let expressions = function (number: number): number {
  return number * number;
};
// Function Declarations
function declarations(number: number): number {
  return number * number;
}

console.log(expressions(25));
console.log(declarations(25));

