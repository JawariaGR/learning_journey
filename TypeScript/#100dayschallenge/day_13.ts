// QUESTION NO 37 (MODIFY FUNCTION TO HAVE DEFAULT PARAMETERS)
//METHOD 01
function Make_Shirt(
  size: string,
  message: string,
  color: string,
  message_color: string
) {
  console.log(
    `Make a ${color} color, ${size} size t-shirt and print a messge: ${message} and Remember a message colour is ${message_color}`
  );
}
Make_Shirt("Large", "Legend Never Die", "White", "Black");

//METHOD 02
function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "Dive into Coding"); 

//QUESTION NO 38 (DESCRIBING CITIES WITH A FUNCTION )

function DESCRIBING_city(city: string, contry: string) {
  console.log(`${city} is in ${contry}.`);
}
DESCRIBING_city("Luoyang", "China");
DESCRIBING_city("Bursa", "Turkey");

//QUESTION NO 39 (RETURNING FORMATTEING)

function city_country(city: string, country: string): string {
  return `${city},${country}`;
}
console.log(city_country("Hangzhou", "China"));
console.log(city_country("Adana", "Turkey"));
console.log(city_country("Yokohama", "japan"));
