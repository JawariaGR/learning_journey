#!   /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a rendom number

// 2) user imput for guessing number

// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGussednumber",
    type: "number",
    message: "please guess a number between 1-10",
  },
]);
if (answer.userGussednumber === randomnumber) {
  console.log("congtratulations ! you guessed right number");
} else {
  console.log("Bad Luck Try Again");
};
console.log("The Correct Number is", randomnumber ) 

