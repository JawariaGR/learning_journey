"use strict";
//QUESTION NO 16 (ADD GUEST BEGINNING,MIDDLEAND END)
let guests = ["Sam", "Park", "John"];
console.log("Today i am arranging a party in my house!");
// ADDING A MORE GUEST
guests.unshift("Bill");
guests.splice(guests.length / 2, 0, "Jack");
guests.push("Mark");
guests.forEach((guest) => {
    console.log(` i hope ${guest} you come
    Your presence would be greatly appreciated`);
});
//QUESTION NO 17 (SHRINKING A GUEST LIST)
console.log("Accoding to some issuse i am invite a some people");
while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`Sorry ${removedguest}, i am encountering a some issuse that's why i am not 
    inviting you in today party`);
}
guests.forEach((guests) => {
    console.log(`${guests} i am invite a some people but i hope you are still 
        attend today party `);
});
guests.splice(0, guests.length);
console.log(guests);
// QUESTION NO 18 ( ORGANIZED ARRAY IN DYNAMIC SITUATION)
let places = [
    "China",
    "Australia",
    "Maldives",
    "Indonesia",
    "Turkey",
];
console.log("Original Order :", places);
console.log("Alphabetical Order :", [...places].sort());
console.log("Reverse Alphabetucal Order:", [...places].sort().reverse());
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order:", places);
places.sort();
console.log("Alphabetical Order:", places);
places.reverse();
console.log("Reverse Alphabetical Order", places);
