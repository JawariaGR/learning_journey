//QUESTION NO 30 (MAKE A ARRAY OF USER_NAMES INCLUDING THE NAME "ADMIN" WRITE A CODE THAT PRINT A GREETING TO EACH USER . LOOP THROUGH THE ARRAY AND PRINT A GREETING TO EACH OTHER)

// (IF THE USER A ADMIN  PRINT A SPICAL GREETING OTHER WISE  PRINT A GENERIC GREETING)

let USER_NAMES: string[] = 
[
    "user_1",
    "user_2",
    "user_3",
    "admin",
    "user_4"
];
USER_NAMES.forEach((username) => {
  if (username === "admin") {
    console.log("Hello can you help me in my project");
  } else {
    console.log("Welcome back i hope you fine");
  }
});
