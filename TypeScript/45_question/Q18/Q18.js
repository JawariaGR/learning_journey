"use strict";
// QUESTION NO 18 (ORGANIZED ARRAY IN DYNAMIC SITUATION)
let place = ["China", "Australia", "Turkey", "Maldives", "Indonesia"];
console.log("Original place", place); // simple array print
console.log("Alhapabtical Order", [...place].sort()); // create a new array in alhapabtical order
console.log("Original Order", place); // simple array print
console.log("Reverse Alhapabtical Order", [...place].sort().reverse()); // // create a new array in reverse alhapabtical order
console.log("Original order", place); // simple array print
place.reverse();
console.log("Reverse Order", place); // reverse array
place.reverse();
console.log("Original Order", place); // back to Origianl order
place.sort();
console.log("Original Order", place); // change to Alhapabtical order
place.sort();
console.log("Reverse Alphapabtical Order", place); //answer not change buz array is Alhapabtical order
