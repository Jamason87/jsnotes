let name = fName => {
    return 'Georgia'
}

let myName = name();
console.log(myName);

console.log(name())

function capitalizeName(name) {
    let capName = '';
    for (l in name) {
        console.log(l)
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase()
        }
    }
    return capName
}

console.log(capitalizeName('joShUA'))

//* CHALLENGE
// Make a tip calculator using a function
//     Have it RETURN the value
//     Capture that returned value in a VARIABLE
//     Print that variable

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.72);
console.log(totalTip)

let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc(19.72)
console.log(totalTip)

