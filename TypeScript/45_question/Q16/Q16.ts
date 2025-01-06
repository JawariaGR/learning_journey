// QUESTION NO 16 (YOU HAVE A MORE SPACE SO YOU INVITE A MORE GUEST , YOU CAN ADD GUEST IN BEGINNING,MIDDLE AND END))

let guest: string[] = ["Aurora", "Alex", "Mari", "David"];
guest.unshift("Bill");
guest.splice(guest.length / 2, 0, "Park");
guest.push("Selena");
guest.forEach((guests) => {
  console.log(
    `${guests} tonight i am arranging a big party because i'm invite a many people`
  );
});
