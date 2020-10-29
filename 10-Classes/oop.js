//* Classes - Object Oriented Programming (oop)

//* They are a blueprint for like things

class Automobile {  //*anytime you create a class it should be uppercase.  class = properties
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let myCar = new Automobile('Jeep', 'Wrangler')
console.log(myCar.make)
console.log(myCar.model)

//* Object oriented programming is describing the relationship

//* Unnamed vs. Named Classes


//* Unnamed Syntax
let Vehicle = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name)


//* Named Syntax
let Vehicle = class Vehicle2 {
    constructor(make, model) {
        this.make(make);
        this.model(model);
    }
}
console.log(Vehicle.name);


//* Methods

//* Old Syntax
const automobile = {
    start: function() {
        
    },
    stop: function() {

    }
}

//* New Syntax - Protoype Method

const automobile = {
    start() {

    },
    stop() {

    }
}

class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`The ${this.make} ${this.model}'s engine started!`)
    }
    stop() {
        console.log(`The ${this.make} ${this.model}'s engine stopped!`)
    }
}

let myOtherCar = new Automobile('Honda', 'Civic')
myOtherCar.start()

class People {
    constructor(name, age){
        this.name,
        this.age
    }
}

let person = {
    name: "Josh",
    age: 33,
    speak: () => {`This is ${this.name} talking`}
}

let person2 = new People('Kahri', 30)

console.log(person.name)
person.speak()


let carMakes = ['Ford', 'Kia', 'Honda', 'BMW']
let carTypes = ['Truck', 'Car', 'Bike']

let carInv = []
for (make of carMakes){
    for (type of carTypes) {
        let tmp = new Automobile(make, type)
        carInv.push(tmp)
    }
}

console.log(carInv[2]);