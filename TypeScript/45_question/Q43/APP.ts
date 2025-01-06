/*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names. 
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

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
  