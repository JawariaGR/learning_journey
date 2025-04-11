// #!   /usr/bin/env node
import inquirer from "inquirer";

function generateStudentsId() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

class Student {
  constructor(name) {
    this.name = name;
    this.id = this.generateStudentsId();
    this.courses = [];
    this.balance = 0;
  }
}

function enrollCourses(courses) {
  this.courses.push(courses);
  this.balance += 500;
}

function viewBalance() {
  console.log(`Balance for ${this.name}: $${this.balance}`);
}

function payFee(amount) {
  if (amount <= this.balance) {
    console.log(
      `Payment of ${amount} successful Remaining Blance:$${this.balance}`
    );
  } else {
    console.log("Infficient Funds");
  }
}

function ShowStauts() {
  console.log(
    `\nStudents:${this.name}\nID:${this.id}\n:Courses:${
      this.courses.join(",") || "None"
    }\nBalance:${this.balance}\n`
  );
}

let { Action } = await inquirer.prompt([
  {
    type: "list",
    name: "action",
    message: "Choose an Option",
    choices: [
      "Add Students",
      "Enroll in Courses",
      "View Balance",
      "Pay Fee",
      "Show Students Stauts",
      "Exit",
    ],
  },
]);
if (typeof student.Studentname == "string") {
  console.log(student.Studentname);
}
