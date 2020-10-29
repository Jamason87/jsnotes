// *** FIZZ BUZZ CHALLENGE SOLUTIONS ***
//* IF ELSE
let FB = 3;
if (FB % 3 == 0 && FB % 5 == 0){
  console.log('Fizz Buzz');
} else if (FB % 5 == 0) {
  console.log('Buzz');
} else if (FB % 3 == 0) {
  console.log('Fizz');
} else {
  console.log(FB)
};
//* SWITCH
let FB = 30;
switch (true) {
  case (FB % 15 == 0):
    console.log('Fizz Buzz');
    break;
  case (FB % 5 == 0):
    console.log('Buzz');
    break;
  case (FB % 3 == 0):
    console.log('Fizz')
    break;
}
//* TERNARY
let FB = 31;
(FB % 15 == 0) ? console.log('Fizz Buzz') :
(FB % 5 == 0) ? console.log('Buzz') :
(FB % 3 == 0) ? console.log('Fizz'):
console.log(FB);
//* FOR LOOP IF ELSE
for (i = 0; i <= 100; i++){
  if (i % 15 === 0) {
    console.log('Fizz Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0){
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
//* FOR LOOP SWITCH
for (let FB = 0; FB <= 100; FB++) {
  switch (true) {
      case (FB % 3 === 0 && FB % 5 === 0):
          console.log('Fizz Buzz');
          break;
      case (FB % 5 === 0):
          console.log('Buzz');
          break;
      case (FB % 3 === 0):
          console.log('Fizz');
          break;
      default:
          console.log(FB);
  }
}
//* FOR LOOP TERNARY
for (FB = 0; FB <= 100; FB++){
(FB % 15 == 0) ? console.log('Fizz Buzz') :
(FB % 5 == 0) ? console.log('Buzz') :
(FB % 3 == 0) ? console.log('Fizz'):
console.log(FB);
}

