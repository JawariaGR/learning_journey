// QUESTION NO 64
// Combine Strings and Numbers: Write a function that merges a piece of text with a number.
// For example, if provided with "Age: " and 30, it should give back "Age: 30".

function marge(properties: string, value: number): string {
  return properties + ":-" + value;
}
let q64 = marge("AGE", 25);
console.log(q64);

// QUESTION  NO 65
// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.
// For example, remainder(5, 2) should give 1.

function returnRemainder(firstno: number, secondno: number): number {
  return firstno % secondno;
}

let q65 = returnRemainder(25, 3);
console.log(q65);

//QUESTION NO 66
// Logical AND verification:Create a function that checks two boolean(ture or false).
//it should only say true if both are true ,using && operator .
// For instance, checkBothTrue(true,false) should be false

function logicalVerification(firstB: boolean, secondB: boolean): boolean {
  return firstB && secondB;
}

let q66 = logicalVerification(true, false);
console.log(q66);
