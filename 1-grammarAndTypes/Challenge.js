/*
 Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
    */

let firstName = "Joshua";
let lastName = "Mason";
let houseNumber = "2014";
let street = "Northshore Blvd";
let city = "Anderson"
let state = "Indiana";
let zipCode = "46011";
let together = `My mailing address is ${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state}, ${zipCode}`
console.log(together);

//* Challenge #2

let sent = 'This sentence will be split into individual parts';
let ar = sent.split( ' ' )
console.log(ar)