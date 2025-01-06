//  QUESTION NO 58
// Average Score Calculator: Write a simple program that can take lots of scores and find their averag.

function averagscores(...scores: number[]): number {
  let total = scores.reduce((sum, scores) => sum + scores, 0);
  return total / scores.length;
}

console.log(averagscores(87, 98, 56, 100, 67));

// QUESTION NO 59
// Add a Special Number: Make a program that creates custom adders.
//These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (number: number) => number {
  return function (numbers: number): number {
    return numbers + valueToAdd;
  };
}
let addnumber = makeAdder(5);
console.log(addnumber(10));

// QUESTION NO 60
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// IIFE (Immediately Invoked Function Expression)
let userProfile = (function () {
  let name = "john";
  let age = 28;

  return {
    DisplayInfo: function () {
      console.log(`Name:- ${name}, Age:- ${age}`);
    },
  };
})();
userProfile.DisplayInfo();