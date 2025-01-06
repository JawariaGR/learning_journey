//QUESTION 13 (MAKE A ARRAY A PRINT WITH SOME MESSAGE)

let transportname: string[] = ["Lamborghini", "Bugatti", "Wrangler jeep"];
for (let name of transportname) {
  console.log(` I hope i am purchaes ${name} in the future `);
}

// QUESTION NO 14 (MAKE A GUESTLIST AND SEND A INVITATION CARD)

let guestlist: string[] = ["Sharam", "Misbah", "Maria"];
guestlist.forEach((guest) => {
  console.log(`${guest}, I am arranging a party so I hope you can come.
      Your presence would be greatly appreciated.`);
});

// QUESTION NO 15 (CHANGING GUEST LIST)

let unabletoattend: string = "Misbah";
console.log(`${unabletoattend} can't come to party`);
//REPLACE A GUEST
let newguest: string = "Anayat";
guestlist[guestlist.indexOf(unabletoattend)] = newguest;
guestlist.forEach((guests) => {
  console.log(`${guests}, I am arranging a party so I hope you can come.
      Your presence would be greatly appreciated.`);
});
