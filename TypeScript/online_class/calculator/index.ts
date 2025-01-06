#!  /usr/bin/env node

//SHABANG
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstnumber", type: "number", name: "firstnumber" },
  { message: "Ënter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multipcation"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else if (answer.operator === "Multipcation") {
  console.log(answer.firstnumber * answer.secondnumber);
} else {
  console.log("please select valid oprator");
}
