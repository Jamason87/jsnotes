let list = ['chips', 'apples', 'coffee', 'milk'];

console.log(list[1]);
console.log(list[2]);

let students = ['Josh', 'Georgia', 'Kahri', 'Anna', 23, true, ['Trent', 'Jeff', 'David']];

console.log(typeof students);
console.log(students instanceof Array);

console.log(students[6][1]);
let student = students[6][1]
console.log(`Hello ${student}`);




function sortIt(arr) {
    let tempArr = []
    for (entry of arr) {
        if (typeof entry == "object") {
            tempArr.push(entry[0]);
        } else {
            tempArr.push(entry);
        }
    }
    let retArr = []
    for (position of tempArr.sort()) {
        for (original of arr) {
            if (position == original) {
                retArr.push(original);
            } else if (position == original[0]) {
                retArr.push(original);
            }
        }
        console.log(position, original)
    }
    return retArr;
}
let result = sortIt([4, [1], 3])
console.log(result);
console.log(typeof "Hello World" == "string");
