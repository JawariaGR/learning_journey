"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.
function make_sandwiches(...ingredients) {
    console.log(`i want a sandwiches topping is ${ingredients}`);
}
make_sandwiches("Chicken", "cucumber");
make_sandwiches("lettuce", "Mozzarella chesse", "Roasted beef");
make_sandwiches("Tuna", "lettuce", "cucumber", "Mayonnaise");
