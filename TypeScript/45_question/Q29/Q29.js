"use strict";
// QUESTION NO 29 (MAKE A ARRAY AND THEN WRTE A SERIES OF IF STATMENT THAT CHECK A CERTAIN THING IN INCULDE IN YOUR ARRAY)
//(MAKE A ARRAY OF FAVORITE THING AND CALL IT )
let favorite_Fruite = [
    "mango",
    "apple",
    "watermelon",
    "peach",
    "pear",
];
console.log(favorite_Fruite);
//(WRITE A FIVE IF STATMENTS EACH SHOULD CHECK A CERTAIN KIND OF FRUITE IS INCULDE IN ARRAY)
if (favorite_Fruite.includes("mango")) {
    console.log("The mango is the king of fruite.");
}
if (favorite_Fruite.includes("apple")) {
    console.log("An apple a day keep the doctor away.");
}
if (favorite_Fruite.includes("blueberry")) {
    console.log("Blueberries are one of the most healthful food we can eat.");
}
if (favorite_Fruite.includes("watermelon")) {
    console.log("Life is like eating a watermelon, you know you're going to get some seeds just spit them out and take another bite.");
}
if (favorite_Fruite.includes("strawberry")) {
    console.log("Strawberries are the angels of the earth, innocent and sweet.");
}
