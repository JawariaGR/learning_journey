"use strict";
// QUESTION NO 73
// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value.
// Then, update its value within the same function and log both the initial and updated values.
function updateVariable() {
    let variable = 2000;
    console.log(variable);
    variable = 3000; // update value
    console.log(variable);
}
updateVariable();
//     QUESTION NO 74
//     Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`,
//     then swap their values so that `a` becomes `10` and `b` becomes `5`
function swapValue() {
    let a = 5;
    let b = 10;
    console.log(`Before swap:- a = ${a} and b = ${b}`);
    let temporarily = a;
    a = b;
    b = temporarily;
    console.log(`After swap :- a = ${a} and b = ${b} `);
}
swapValue();
// QUESTION NO 75
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
// Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.
function compoundOperators() {
    let x = 4;
    console.log("Initial x:-", x);
    x += 2;
    console.log("After Addition:-", x);
    x -= 1;
    console.log("After Subtraction:-", x);
    x *= 4;
    console.log(`After Multiplication:- ${x}`);
    x /= 2;
    console.log("After Division:-" + x);
}
compoundOperators();
