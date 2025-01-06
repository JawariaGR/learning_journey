    // QUESTION NO 43  Unchanged Magicians: Start with your work from Exercise 40.
 //Call the function make_great() with a copy of the array of magicians’ names. 
 //Because the original array will be unchanged, return the new array and store it in a separate array.
  //Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
   
    let great_Magician: string[] = [
      "Wizardry Whisper",
      "Phantom Phoenix",
      "Enigma Evoker"
    ]; 
    function makeGreat(magicians: string[]) {
      let magician = great_Magician;
      for (let i = 0; i < magicians.length; i++) {
        console.log(`${magician[i]} The great magician`);
      }
    }
     (makeGreat(great_Magician));
  
     console.log(`\nOriginal Array ${great_Magician}`); //original array
  
    (makeGreat(great_Magician));    // Changed array



    // QUESTION NO 44 
    //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.

function make_sandwiches(...ingredients:string[]){
  console.log(`i want a sandwiches topping is ${ingredients}`)
}
make_sandwiches("Chicken","cucumber");
make_sandwiches("lettuce","Mozzarella chesse","Roasted beef");
make_sandwiches("Tuna","lettuce","cucumber","Mayonnaise");


// QUESTION NO 45
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car: { [key: string]: any } = { manufacturer, model };
  for (const [key, value] of options) 
  car[key] = value;
  return { car };
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));



