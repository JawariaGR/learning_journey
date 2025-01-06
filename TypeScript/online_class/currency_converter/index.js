#!  /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    IND: 74,
    EUR: 0.94,
    PKR: 280,
    YUAN: 0.029,
    WON: 4.86,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "YUAN", "EUR", "WON", "IND", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "YUAN", "EUR", "WON", "IND", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
