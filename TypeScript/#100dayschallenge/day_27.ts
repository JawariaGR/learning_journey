// QUESTION NO 79
// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year.
//Then, show how you can access the model property of the car.

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car);
console.log(car.make);

// QUESTION NO 80
// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

(car.color = "blue"), // add  new property
  (car.year = 2022); // update the year
console.log(car);

// QUESTION NO 81
//  Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function objectProperty(obj: object) {
  for (let property in obj) {
    console.log(`${property} : ${obj[property]}`);
  }
}
objectProperty({
  make: "Toyota",
  model: "Corolla",
  year: 2021,
});
