//* Make a function called greet
function greet () {
    console.log("Hello");
}

//* Say Hi
let say_hi = () => console.log("Hi");

//* hello
let hello = () => {
    console.log("Hello!");
}

//* greet_two
let greet_two = function() {
    console.log("Greet again");
}

//* Example
aList = ['Josh', 'Mason']

function print_list(){
    console.log(aList)
}

print_list()

function betterPrint(listParam){
    console.log(listParam)
}
betterPrint(aList)


//* Write how this works with 20
function varLoop(i){
    for(let i = 1; i <= 20; i++){
        console.log(i);
    }
}

/*
function varLoop(20){
    for(let i = 1; i <= 20; i++){
        console.log(i);
    }
}
*/

varLoop()

function varLoop()



//* MAKE A FUNCTION THAT TAKES IN 3 THINGS
//* AND PRINTS THEM ON SEP LINES
function multiPrint(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}


function listPrint(wordList){
    for (word in wordList){
        console.log(wordList[word]);
    }
}
listPrint(["Josh", "Kahri", "Georgia"])
