"use strict";
// QUESTION NO 49
//  Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.
function hoobies(...hobby) {
    hobby.forEach((hoobies) => {
        console.log(` i love ${hoobies}`);
    });
}
hoobies("Reading", "Cooking", "Dancing");
// QUESTION NO 50
// Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day
// Include at least three different activities.
let day = `My ideal day would be :
1:- wake up in before sunrise.
2:- fresh up and ready to prayers.
3:- Going to joging .
4:- after joging made a healthy breakfast .
5:-Spending a few hours on coding .
6:- some outing .
7:- Tennis pratice .
8:- Ending a day with movie and snack . `;
console.log(day);
// QUESTION NO 51
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and
// refactor it into an arrow function.
// Original function for calculating the area of a rectangle
function calculatesArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculatesAreaArrow = (width, height) => width * height;
console.log(calculatesAreaArrow(6, 8));
