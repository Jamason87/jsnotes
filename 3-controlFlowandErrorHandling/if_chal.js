// let name = "James";

// if (name == "Josh"){
//     console.log("Hello, my name is", name + "!");
// } else {
//     console.log("Hello, is your name", name + "?");
// }
// console.log(`Hello, is your name ${name}?`);


/* CHALLENGE
************
Use this string: let name = 'zAchARy';
Bronze:
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
If it is not console.log 'hey, this isn't written correctly'
Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
Gold:
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// Not Notation
let student = {
    name : "Josh",
    grade : 12
};

let names = [
    "Josh",
    "Anna",
    "Kahri"
]

//* Ways to access an object
console.log (student.name);
console.log (student["name"]);

//* Ways of accessing an array
console.log(names[2])


//* bronze challenge
let name = 'zAchARy';
// console.log(name.charAt(0));
// console.log(name[0]);

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey, this isn't written correctly");
};

//* Silver
let name = 'zAchARy';

if (name [0] == name [0].toUpperCase()) {
    console.log(name[0])
} else {
    console.log(name.slice(1).toLowerCase())
}

//* Gold
let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase)
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase);
}


