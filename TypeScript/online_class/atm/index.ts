#!    /usr/bin/env node
import inquirer from "inquirer";

let currentbalance = 12000; //Dollar
console.log("your current balance", currentbalance);
let mypin: number = 12345;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);
if (pinAnswer.pin === mypin) {
  console.log("Correct pin");

  let operationAns = await inquirer.prompt([
    {
      name: "option",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"]
    },
  ]);
  if (operationAns.option === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (currentbalance >= amountAns.amount) {
      currentbalance -= amountAns.amount;
      console.log("Your remaining balance is:", currentbalance);
    } else {
      console.log("Insufficient balance");
    }
  } else if (operationAns.option === "check balance") {
    console.log("your balance is", currentbalance);
  } else if (operationAns.option === "fast cash") {
    let fast_cash = await inquirer.prompt([
      {
        name: "cash",
        message: "write amout you wish to fast cash",
        type: "list",
        choices: [500, 1000, 2000, 3000],
      },
    ]);
    {
      currentbalance -= fast_cash.cash;
      console.log("your remaining balance", currentbalance);
    }
  } 
} else {
  console.log("Incorrect password. Access denied.");
}