//QUESTION NO 17 (SHRINKING A GUEST LIST)
let guest: string[] = ["Aurora", "Alex", "Mari", "David"];
guest.unshift("Bill");
guest.splice(guest.length / 2, 0, "Park");
guest.push("Selena");
guest.forEach((guests) => {
  console.log(
    `${guests} tonight i am arranging a big party because i'm invite a many people`
  );
});
console.log("Accoding to some issuse i am invite a some people");
while (guest.length > 2) {
  let removedguest = guest.pop();
  console.log(`Sorry ${removedguest}, i am encountering a some issuse that's why i am not 
    inviting you in today party`);
}
guest.forEach((guests) => {
  console.log(`${guests} i am invite a some people but i hope you are still 
    attend today party`);
});
guest.splice(0, guest.length);
console.log(guest);
