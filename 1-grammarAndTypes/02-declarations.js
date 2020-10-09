let a = 2;

    let       b       =      1;
//*(1)       (2)     (3)     (4)

//* 1- Keyword
//* 2- Variable name
//* 3- Assignment Operator
//* 4- Variable Value

console.log(a + b);

let c = 3;

let hello = 'greet';
let Hello = 'greet again';

//* Javascript is case sensitive, cannot have spaces in variable names.

//* VAR LET CONST, use primarily LET.  Cannot reassign a value to 'const'.
var x = 1;
let y = 2;
const z = 3;

//* DECLARATION vs INITIALIZATION
let n;
console.log(n);

n = 10;
console.log(n);

//* LET vs CONST
let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'Lovely!'
console.log(today, elevenFifty)

//* elevenFifty = 'Super!';
console.log(today, elevenFifty);
//* above can't be reassigned because it's a constant.  Cannot change constant.