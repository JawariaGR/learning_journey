//QUESTION NO 03 (CREATE A VARIABLE AND PRINT A LOWERCASE,UPPERCASE AND TITLECASE)

let username:string = "alexzander"
console.log(username.toLocaleLowerCase());
console.log(username.toUpperCase());
console.log(username.charAt(0).toUpperCase() +  username.slice(1).toLowerCase());