let student = {
    name: "Justin",
    awesome: false,
    degree: "JavaScript",
    week: 1
}
for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let cats = ['tabby', 'british shorthair', 'burmese']
for (cat in cats) {
    console.log(cat);
    console.log(cats[cat]);
}

let name = 'jOsH maSOn'
let capName;

for (let i in name){
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);