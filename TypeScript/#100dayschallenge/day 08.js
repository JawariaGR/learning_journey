"use strict";
//QUESTION NO 22 ( CREATE A ERROR IN ARRAY  CORRECT A ERROR BEFORE FINISHING )
let cars = ["Lamborghini", "Bugatti", "Aston Martin"];
console.log(cars[3]);
cars[2] = "Aston Martin";
// QUESTION NO 23 (CONDITIONAL TEST AND PREDICT A RESULT)
let number1 = 10;
console.log("number1 == 10 I predict it's true"); //01
console.log(number1 == 10);
console.log("number1 > 20 i pridect it's false"); //02
console.log(number1 > 20);
console.log("number1 < 8  i prediect it's false"); //03
console.log(number1 < 8);
console.log("number1 == 13 i predict it's false "); //04
console.log(number1 == 13);
console.log("number1 == 29 i predict it's false"); //05
console.log(number1 == 29);
console.log("number1 < 20 i predict it's true"); //06
console.log(number1 < 20);
console.log("number1 > 8 i predict it's true"); //07
console.log(number1 > 8);
console.log("number1 != 10 i predict it's false"); //08
console.log(number1 != 10);
// QUESTION NO 24 (EXPERIMENT WITH DIFFERENT TYPES OF CONDITIONS)
//EQUALITY TESTING  WITH STRING
console.log("Testing equality with string");
let Username = "Aurora";
console.log(Username == "aurora"); //false
console.log(Username == "Aurora"); //true
// USING THE LOWERCASE FUNCTION
console.log("Testing with lower case");
console.log(Username.toLowerCase() == "Aurora"); //false
console.log(Username.toLowerCase() == "aurora"); //true
//NUMERICAL TEST
console.log("Numerical Test");
console.log(5 < 2); //false
console.log(7 > 6); //true
//TESTING ITEM IS IN ARRAY
let Actor = [" Bai JingTing ", "Li Xian", " Yang Yang "];
console.log("Is Li Xian is include in Actor list? ");
console.log(Actor.includes("Li Xian")); //true
// TESTING ITEM IS NOT INCLUDES IN ARRAY
console.log("Is Wang Kai is include in Actor list?");
console.log(!Actor.includes("Wang Kai")); //true
//TETING WITH "AND","OR"
let a = 5;
let b = 2;
let And = a > 0 && b > 0; //true
let OR = a < 0 || b < 0; //false
console.log(And);
console.log(OR);
