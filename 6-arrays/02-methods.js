let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food);

food.splice(1, 1, 'Bananas');
console.log('splice:', food);

//*   Position, How many to delete, what to add
food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice2', food);

food.pop();
console.log('pop', food);

food.shift();
console.log('shift:', food)

food.unshift('Popcorn', 'Steak')
console.log('unshift', food)

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

dogs.push('Bull Terrier');
dogs.unshift('Bull Terrier', 'Husky')

console.log(dogs);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];
//* REGULAR FOR LOOP
for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}

//* forEach()
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})

dogs.forEach((dog, index) =>{
    console.log(dog)
    console.log(index)
})


//* CHALLENGE
/* - (Go look at MDN docs to remind you):
- Create an array containing movies
- Use .forEach() to list your movies
- Add another movie at the end
- And replace one of your existing movies with another one
*/

let movies = ['Castaway', 'Rookie of the Year', 'Jumanji', 'American Pie'];

movies.push('Whisper of the Heart');
movies.splice(3, 1, 'Thor');

movies.forEach(movie =>{
    console.log(movie)
});

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array){
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else {
    console.log('not an array')
}

//* "" false   "string" true
//* 0 false     1 true

console.log(typeof true);
console.log(typeof "true");