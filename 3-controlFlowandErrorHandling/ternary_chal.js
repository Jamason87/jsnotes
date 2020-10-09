/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/
let age = 26;
switch (true) {
    case age > 24:
        console.log("Yay! You can rent a car!")
    case age > 20:
        console.log("Yay! You can drink!")
    case age > 17:
        console.log("Yay! You can vote!");
        break;
    default:
        console.log("Sorry, you're too young to do anything fun.");
}
