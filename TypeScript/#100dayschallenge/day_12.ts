//QUESTION NO 34 (USE A FOR LOOP TO ITERATE OVER YOUR PIZZA LIST)
let pizaas: string[] = ["pepperoni", "margherita", "hawaiian"];
pizaas.forEach((pizza) => {
  console.log(`I like ${pizza} pizza.`);
});
console.log("I like bella italia pizza.");

//QUESTION NO 35 (CREATE A ARRAY AND COMMENT A MEASSGE ON EACH ONE INDIVIDUALLY)

let animals: string[] = ["Hourse", "Tiger", "Elephant", "Zebra", "Giraffe"];
animals.forEach((animal) => {
  console.log(
    `Today i visite a Zoo and a see ${animal}, and different animals`
  );
});
console.log("The zoo journey is very excitment, interesting,learn full");

// QUESTION NO 36 ( CREATE A FUNTION  THAT ACCEPT PARAMETERS ALLOW YOU TO REUSE CODE EFFICIENTLY)

function Make_shirt(size: string, message: string) {
  console.log(`making a ${size} t-shirt and print a message: ${message}`);
}
Make_shirt("medium", "live a long life");
