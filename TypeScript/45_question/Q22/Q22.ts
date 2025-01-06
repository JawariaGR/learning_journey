//QUESTION NO 22 ( CREATE A ERROR IN ARRAY  CORRECT A ERROR BEFORE FINISHING )

let car: string[] = ["Lamborghini", "Bugatti", "Aston Martin"];
console.log(cars[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
// Correcting the error by accessing a valid index.
cars[2] = "Aston Martin";
