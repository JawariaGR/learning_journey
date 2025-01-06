// QUESTION NO 52
//  Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model,
// and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

let smartphone = {
  brand: "Realme",
  model: "C35",
  Storage: "128GB",
  screenSize: "16.7cm ",
  battery: "5000mAH",
};
console.log(smartphone);

// QUESTION NO 53
//  Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
// like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them.

let computer = {
  codingLanguges: ["types script", "phthon", "CSS", "html"],
  framework: ["React", "Angular", "Vue"],
  tools: ["Git", "github", "npm"],
};
let { codingLanguges, framework, tools } = computer;
console.log(
  `Languges ${codingLanguges[2]}, framework ${framework[1]}, tools ${tools[0]}`
);

//  QUESTION NO 54
//   Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on
//   what you need at that moment, like adjusting labels based on user choices.

function createFlexibleObject(key: string, value: string) {
  let flexibleObject: { [key: string]: String } = {};
  flexibleObject[key] = value;
  return flexibleObject;
}

let result = createFlexibleObject("color", "red");
console.log(result);
