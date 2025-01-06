// QUESTION NO 61
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
//and motorcycles using enums, and show one example.

const enum vehicles {
  car = 2,
  Trucks = 4,
  motorcycles = 6,
}
console.log(vehicles.Trucks);

// QUESTION NO 62
// Making a Student Template: Create a blueprint for student information, including their name, age,
// and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
  NAME: string;
  AGE: number;
  Classes: string[];
}

let STUDENTinfo: Student = {
  NAME: "abc",
  AGE: 17,
  Classes: ["Bio", "Science", "History"],
};

console.log(STUDENTinfo);

//QUESTION NO 63
//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias
//including properties unique to each shape.

type shape = {
  kind: "circle" | "Rectangle";
  Radius?: number;
  widht?: number;
  height?: number;
};

let circle: shape = {
  kind: "circle",
  Radius: 6,
};

let Rectangle: shape = {
  kind: "Rectangle",
  widht: 10,
  height: 30,
};

console.log(circle);
console.log(Rectangle);
