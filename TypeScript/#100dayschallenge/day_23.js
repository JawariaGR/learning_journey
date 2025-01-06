"use strict";
// QUESTION NO 67
// Arithmetic with Mixed Types: Write a function that takes two parameters:
// a number and a string that represents a number (e.g., "5"). Return their sum as a number
function addNumberString(type1, type2) {
    return type1 + Number(type2);
}
let q67 = addNumberString(5, "10");
console.log(q67);
// QUESTION NO 68
//  Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
//  Round the result to two decimal places.
function roundOff(value1, value2) {
    return Math.round(value1 * value2);
}
let q68 = roundOff(4.65, 8.65);
console.log(q68);
// QUESTION NO 69
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
// Use an object to return both values.
function divedAndRemainder(number1, number2) {
    let questient = Math.floor(number1 / number2);
    let remainder = number1 % number2;
    return ({ questient, remainder });
}
console.log(divedAndRemainder(18, 9));
