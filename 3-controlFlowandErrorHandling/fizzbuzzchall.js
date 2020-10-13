// Fizz Buzz Conditionals Challenge
// - create a variable named FB that gets initialized with a number
//     - write a conditional that:
//         - prints out "Fizz" if the number is divisible by 3
//         - prints out "Buzz" if the number is divisible by 5
//         - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5

for (var i=3; i < 18; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

let fb = 120;
switch(true) {
    case fb / 3 === 0 && fb / 5 === 0:
        console.log('Fizz Buzz');
    break;
    case fb / 5 === 0:
        console.log("Buzz");
    break;
    case fb / 3 === 0:
        console.log("Fizz");
    break;
    default(true)
}

let fb = 30
fb % 3 === 0 && fb % 5 === 0 ? console.log ('fizz buzz') : (fb % 3 === 0) ? console.log("Buzz") : (fb % 5 === 0) ? console.log ("Fizz"):
console.log(fb);


//* INSTRUCTOR SOLUTION - FIZZBUZZ

//* IF ELSE
let fb = 3;

if (fb % 3 == 0 && fb % 5 == 0){
    console.log('FizzBuzz');
} else if (fb % 5 == 0) {
    console.log ('Buzz');
} else if (fb % 3 == 0) {
    console.log ('Fizz');
} else {
    console.log(fb)
};

//* SWITCH
let fb = 30;

switch (true) {
    case (fb % 15 == 0):
        console.log('FizzBuzz');
        break;
    case (fb % 5 == 0):
        console.log('Buzz');
        break;
    case (fb % 3 == 0):
        console.log('Fizz');
        break;
}

//* TERNARY
let fb = 30;

(fb % 15 == 0) ? console.log('FizzBuzz') : 
(fb % 5 == 0) ? console.log ('Buzz') :
(fb % 3 == 0) ? console.log ('Fizz') :
console.log(fb); 






// - write a for loop running between the numbers 0 - 100
// - for multiples of 3, instead of the number, console.log "Fizz"
// - for multiples of 5 console.log "Buzz";
// - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
// - for any other number, console.log the value

//* FIZZBUZZ CHALLENGE #2
//* ELSE IF SOLUTION
for (i = 0; i <= 100; i++) {
  if (i % 15 === 0) {
      console.log('Fizz Buzz')
  } else if (i % 3 === 0) {
      console.log('Fizz')
  } else if (i % 5 === 0) {
      console.log('Buzz')
  } else {
      console.log (i)
  }
}