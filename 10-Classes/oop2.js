class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats their food`)
    }
}
let myAnimal = new Animal("Tiger");
console.log(myAnimal.name);
myAnimal.eat()
class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.type = breed;
    }
    play() {
        console.log(`${this.name} fetches the ball`)
    }
}
let finn = new Dog('Finn', 'Shiba Inu');
finn.eat();
finn.play();
console.log(finn);
class HouseDog extends Dog{
    constructor(name, breed, isTrained){
        super(name, breed);
        this.isTrained = isTrained;
    }
}
myIndoorDog = new HouseDog("spongie", "lab", true)
myIndoorDog.eat()


// APIE Abstraction, Polymorphism, Inheritance and Encapsulation.

// Abstraction
console.log() // I don't need to know how this works

// Polymorphism
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    print(){
        console.log(`x:${this.x}, y:${this.y}`)
    }
}
class Point2 extends Point{
    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }
    print(){
        console.log(`x:${this.x}, y:${this.y}, z:${this.z}`)
    }
}
let myPoint = new Point(5, 6)
myPoint.print()
let myPointTwo = new Point2(5, 6, 7)
myPointTwo.print()
// Inheritance
// Through Inheritance we don't need to make the
// Properties this.name // this.breed 
// Or the Methods eat() // play()
// class HouseDog extends Dog{
//     constructor(name, breed, isTrained){
//         super(name, breed);
//         this.isTrained = isTrained;
//     }
// }

// Encapsulation
x = {
    data: 5,
    displayData() {
        console.log(this.data)
    }
}
y = {
    data: 6,
    displayData() {
        console.log(this.data)
    }
}
x.displayData()
console.log(x.data)
let testObj = {
    myLog: (x) => console.log(x),
}
testObj.myLog("This is a test of myLog")