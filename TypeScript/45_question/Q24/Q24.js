"use strict";
// QUESTION NO 24 (EXPAND YOUR CONDITINOAL TEST COVER A WIDER RANGE OF COMPARSION)
// EUQUALITY TEST WITH STRING
console.log("Testing with string");
let fruit = "MANGO";
console.log(fruit == "MANGO"); //TRUE
console.log(fruit == "mango"); //FALSE
//EUQUALITY TEST USING A LOWER CASE FUNCTION
console.log("Testing with lower case function");
console.log(fruit.toLowerCase() == "MANGO"); //FALSE
console.log(fruit.toLowerCase() == "mango"); //TRUE
// TEST WITH NUMBER
console.log("Testing with number");
console.log(5 > 6); //FALSE
console.log(3 < 6); //TRUE
// TEST WITH ARRAY
console.log("Testing with array");
let fruits = ["MANGO", "APPLE", "PEAR", "PINEAPPLE"];
console.log("Is PINEAPPLE is inculde in array");
console.log(fruits.includes("PINEAPPLE"));
// TEST IN ARRAY AN ITEM IS NOT INCLUDE
console.log("Testing with array an item is not inculde");
console.log(!fruits.includes("APPLE"));
