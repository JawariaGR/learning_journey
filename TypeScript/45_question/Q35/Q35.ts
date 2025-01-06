// QUESTION NO 35 (STORE A ANIMALS NAMES IN LIST,AND  USE A LOOP TO PRINT OUT THE NAME OF EACH ANIMALS)
// (MODIFY YOUR PROGRAM TO PRINT A STATMENT ABOUT EACH ANIMALS)
// (ADD A LINE ATA THE END OF YOUR PROGRAM)

let animals: string[] = ["Hourse", "Tiger", "Elephant", "Zebra", "Giraffe"];
console.log(animals);
animals.forEach((animal) => {
  console.log(
    `Today i visite a Zoo and a see ${animal}, and different animals`
  );
});
console.log("In my Opinion zebra is a most beautiful animal in zoo");
