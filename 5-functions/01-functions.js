//* DECLARATIONS
function hi() {
    console.log ('hi')
}

hi();

//* EXPRESSIONS
let hello = function() {
    console.log('Hey!')
}

hello();

//* FUNCTION EXAMPLES
function addIt() {
    console.log(5+10)
};

addIt();

function counting() {
    for (i = 1; i <=10; i++){
        console.log(i)
    }
}

counting()

//* CHALLENGE
let arr = ['This', 'is', 'really', 'cool'];

function arrList() {
    for (item of arr) {
        console.log(item)
    }
}

arrList();

