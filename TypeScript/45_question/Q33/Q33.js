"use strict";
// QUESTION NO 33 (ORDINAL NUMBER INDICATE THEIR POSITION IN ARRAY SUCH AS 1st OR 2nd)
//( LOOP THROUGHY THE ARRAY)
//( USE AN IF-ELSE CHAIN  THE LOOP TO PRINT THE PROPER ORDINAL ENDING FOR EACH NUMBER)
let od_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
od_number.forEach((number) => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
