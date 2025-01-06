// QUESTION NO 40 (CREATE A OBJECTS FOR MUSIC ALBUM ,USE FUNCATION TO RETURN OBJECTS)

function make_album(artist_name: string, album_title: string, tracks?: number) {
  if (tracks) {
    return `${album_title} is made by ${artist_name}, ${tracks} track song`;
  } else {
    return `${album_title} is made by ${artist_name}`;
  }
}
let first_album = make_album("Seventeen", " You Made My Day", 12);
let second_album = make_album("Taylor Swift", "1989");
let third_album = make_album("Justin Bieber", "Believe");

console.log(first_album);
console.log(second_album);
console.log(third_album);
//QUESTION NO 41 (DISPLAY SOME MAGICIAN NAME FROM AN ARRAY, PASSING ARRAY TO FUNTIONS)

let magician: string[] = [
  "Illusionist Extraordinaire",
  "Sorcery Serenade",
  "Presto Prestige",
];

function Show_magicians(magicians: string[]) {
  magician = magicians;
  for (let i = 0; i < magicians.length; i++) {
    console.log(magician[i]);
  }
}
Show_magicians(magician);

//QUESTION NO 42 (MODIFY ARRAY WITH A FUNCTION AND ADD "THE GREAT")

function MAKE_GREAT(name: string[]) {
  name = magician;
  for (let i = 0; i < magician.length; i++) {
    console.log(`${magician[i]} The Great Magician`);
  }
}
MAKE_GREAT(magician);
