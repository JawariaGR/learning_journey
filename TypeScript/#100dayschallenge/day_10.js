"use strict";
// QUESTION NO 28 (DETERMINE PERSON'S LIFE STAGE WITH AN IF-ELSE CHAIN)
let age = 35;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 12) {
    console.log("The person is a kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 50) {
    console.log("The person is a adult. ");
}
else {
    console.log("The person is a elder.");
}
// QUESTION NO 29 ( CREATE AN ARRAY FOR YOUR FAVORITE FRUIT AND USE IF STATEMENTS TO CHECK FOR SPECIFIC FRUITS )
let fruits = ["Apple", "Mango", "Grapes", "Pear", "Blueberry"];
if (fruits.includes("Blueberry")) {
    console.log("Blueberries are one of the most healthful foods we can eat.");
}
if (fruits.includes("Mango")) {
    console.log("The mango is the king of fruits.");
}
if (fruits.includes("Apple")) {
    console.log("An apple a day keeps the doctor away.");
}
// QUESTION NO 30 (GREET USER AND ESPECIALLY ADMIN )
let USERNAMES = [
    "Admin",
    "Noha",
    "Alex",
    "Emma",
    "Shophia",
    "Isabella",
];
USERNAMES.forEach((USERNAME) => {
    if (USERNAME === "Admin") {
        console.log(`Hello Admin Can you recommend resources for learning Typescript language?`);
    }
    else {
        console.log(`I'm thankful for your trust ${USERNAME},`);
    }
});
