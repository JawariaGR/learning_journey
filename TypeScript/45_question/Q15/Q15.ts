// QUESTION NO 15 (CHANGING GUEST LIST)
let GUEST:string[] = ["Jack","Alex","Mari", "David"];
GUEST.forEach(GUESTS => {
    console.log(`${GUESTS} Tonight i am arranging a party so i hope you come.`)
});
let unabletoattend = "Jack";
console.log(`According to some emergency ${unabletoattend} can't come`);
let newguest = "Aurora"
GUEST[GUEST.indexOf(unabletoattend)] = newguest
GUEST.forEach(GUESTS =>{
    console.log(`${GUESTS} tonight i am arranging a party so i hope you come`)
})