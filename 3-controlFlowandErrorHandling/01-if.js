let isOn = false;
// if (<some expression>) {<do something>}
if (isOn == true) {
    console.log('The light is on');
};

if (isOn) {
    console.log("The light is on!");
};

if (isOn == false){
    console.log("The light is off")
};

let weather = 65;

if (weather < 70) {
    console.log('Wear a jacket');
};

if (weather < 70) {
    console.log("Wear a jacket");
} else { // else can follow and if statement and will fire
    // if the above statements didn't
    console.log("No jacket necessary!");
};

//* SWITCH
let officeCharacter = 'Pam';

switch (officCharacter) {
    // kinda like if officeCharacter == "Michael"
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}

let dessert = 'carrots';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!')
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu.');
}

//* else if tangent
if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "ice cream") {
    console.log('I scream for ice cream!');
} else {
    console.log('Not on the menu.');
}

//* TERNARY
let num = 6;
// () ? true : false
(num > 0) ? console.log('yes') : console.log('no');