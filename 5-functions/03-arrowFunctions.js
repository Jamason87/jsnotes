//* CONCISE BODY
let hi = () => console.log('hi');

//* BLOCK BODY
let hi = () => {
    console.log('hi');
}

//* CONCISE vs. BLOCK
let apples = x => console.log(`There are ${x} apples.`); apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`)
}
apples(8);