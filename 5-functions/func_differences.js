
let arr_func= () => {
    console.log("This is a fat arrow function");
}


arr_func();
std_func();


function std_func () {
    console.log("This is a std function")
}

//* GOOGLE WHAT HOISTING IS, NO CLUE WITH THE EXAMPLES ABOVE

function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

function whatDoesItDo(val) {
  return val ? 1 : 2;
}; 

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());