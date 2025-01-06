"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array
let magician = [
    "Illusionist Extraordinaire",
    "Sorcery Serenade",
    "Presto Prestige",
];
function show_magicians(magicians) {
    magician = magicians;
    for (let i = 0; i < magicians.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magician);
