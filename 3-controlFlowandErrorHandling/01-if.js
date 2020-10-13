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

if (!isOn) {
    console.log("The light is off");
}

let weather = 71;

if (weather < 70) {
    console.log('Wear a jacket');
};

if (weather < 70) {
    console.log("Wear a jacket");
} else { // else can follow an if statement and will fire
    // if the above statements didn't
    console.log("No jacket necessary!");
};

//* SWITCH
let officeCharacter = 'Pam';

switch (officeCharacter) {
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

let dessert = 'pie';

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

let dessert = 'pie';
if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "ice cream") {
    console.log('I scream for ice cream!');
} else if(dessert == 'pie') {
    console.log('Oh my it\'s a pie');
} else {
    console.log('You don\'t have my dessert');
}

//* TERNARY
let num = 2;
// () ? true : false
(num > 0) ? console.log('yes') : console.log('no');

let isAccess = false;
(isAccess) ? console.log ('Cubs') : console.log('Reds');