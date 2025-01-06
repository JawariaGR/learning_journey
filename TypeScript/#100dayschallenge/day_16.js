"use strict";
// QUESTION NO 46
//  Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "hp",
    model: " Core i5",
    year: 2020,
    describe: function () {
        console.log(`This laptop is a ${this.make} ${this.model} ${this.year}`);
    },
};
laptop.describe();
// QUESTION NO 47
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    {
        make: "dell",
        model: " Core i7",
        year: 2021,
        price: 56000,
    },
    {
        make: "sony",
        model: "Core i7",
        year: 2023,
        price: 78000,
    },
];
let [first, second] = laptops;
console.log(first);
console.log(second);
// QUESTION NO 48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let price1 = [1200, 3499, 6788];
let price2 = [3477, 7547, 9887];
let combineprice = [...price1, ...price2].sort((a, b) => a - b);
console.log(combineprice);
