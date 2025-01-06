// QUESTION NO 70
// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
// Explain how the let keyword affects the visibility of the loop variable.

function printnumber() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
printnumber();

// QUESTION NO 71
//  Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.

let q71: string = "ABC";
q71 = "DEF";
console.log(q71); //ALLOWS TO REASSIGN

const personName: string = "JACK";
try {
  personName = " Wonwoo";
} catch (error) {
  console.log("ERROR:- Can't reassign");
}

// QUESTION NO 72
//  Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
//  Show how variables declared inside the block are not accessible outside of it.

let blockLet: string = "Visible inside the block";
let blockConst: string = "Only inside the block";

console.log(blockLet);
console.log(blockConst);

try {
  console.log(blockLet);
} catch (error) {
  console.log("`blockLet` is not accessible outside the block.");
}
try {
  console.log(blockConst);
} catch (error) {
  console.log("`blockConst` is not accessible outside the block.");
}
