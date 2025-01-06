"use strict";
// QUESTION NO 31 (EMPTY LIST)
let river = [];
if (river.length === 0) {
    console.log("we need to know some river name ");
}
else {
    console.log("A river seems a magic thing. A magic, moving, living part of the very earth itself.");
}
//QUESTION NO 32 (ENSURE UNIQUENESS IN USERNAMES )
let current_user = ["user1", "user2", "admin", "user4", "User5"];
let new_users = ["User1", "user7", "user8", "User9", "admin"];
new_users.forEach((new_user) => {
    if (current_user.some((currentuser) => currentuser.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user}, i'm relly happy for your joining`);
    }
    else {
        console.log(`${new_user}, you're available`);
    }
});
//QUESTION NO 33 (DISPLAY NUMBER WITH THEIR ORDINAL SUFFIXES)
let point = [1, 2, 3, 4, 5, 6, 7, 8, 9];
point.forEach((points) => {
    let suffix = "th";
    if (points === 1) {
        suffix = "st";
    }
    else if (points === 2) {
        suffix = "nd";
    }
    else if (points === 3) {
        suffix = "rd";
    }
    console.log(`${points}${suffix}`);
});
