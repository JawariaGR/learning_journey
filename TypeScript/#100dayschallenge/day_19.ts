// QUESTION NO 55
//Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

let No: number[] = [2, 4, 6, 8, 10, 12];
let doubleNumber = No.map((currentNumber) => {
  return currentNumber * 2;
});
console.log(doubleNumber);

// QUESTION NO 56
//  Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let array = ["Car", "Bus", 3, "Road", 65, "Trucks", false];
let stringarray = array.filter((words) => typeof words === "string");
console.log(stringarray);

// QUESTION NO 57
// Find the Average Grade: Given a list of grades, calculate the average grade.

let grade = [76, 87, 56, 98, 77];
let averageGrade = grade.reduce((total, grades) => total + grades, 0);
console.log(averageGrade);
