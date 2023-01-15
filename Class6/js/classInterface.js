"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, model, color, engine, doors) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.speed = 0;
        this.doors = doors;
    }
    ;
    set Make(make) {
        this.make = make;
    }
    get Make() {
        return this.make;
    }
    set Speed(speed) {
        if (speed > 0)
            this.speed = speed;
        else
            this.speed = 0;
    }
    start() {
        this.speed = 10;
    }
    accelerate() {
        this.speed += 10;
        return this.speed;
    }
    break() {
        this.speed = 0;
    }
}
class Mehran extends Car {
    constructor(model, color, doors) {
        super("Suzuki Mehran", model, color, "800 CC", doors);
        this.make = "Suzuki Mehran";
    }
}
class Alto extends Car {
    constructor(model, color, doors) {
        super("Suzuki Alto", model, color, "800 CC", doors);
    }
}
class Cultus extends Car {
    constructor(model, color) {
        super("Suzuki Cultus", model, color, "1000 CC", 4);
    }
    start() {
        this.speed = 20;
    }
    accelerate() {
        this.speed += 20;
        return this.speed;
    }
}
const mehran2023 = new Mehran("2023", "Black", 4);
const mehran2020 = new Mehran("2023", "Black", 2);
mehran2020.start(); //speed 10
console.log(mehran2020.accelerate()); //speed 20
const cultus1 = new Cultus("2020", "Blue");
cultus1.start(); //speed 20
console.log(cultus1.accelerate()); //speed 40
class Fish {
    constructor(name, fins, wtType, type) {
        this.noOfHands = 0;
        this.noOfLegs = 0;
        this.name = name;
        this.noOfFins = fins;
        this.waterType = wtType;
        this.type = type;
    }
    print() {
        console.log(`This is whale ${this.name}`);
    }
}
class Whales extends Fish {
    constructor() {
        super(...arguments);
        this.direction = 'south';
    }
    swim(direction) {
        this.direction = direction;
    }
}
new Whales("Blue Whale", 2, "Salt", "Mamel").print();
class Animal {
    constructor(name, legs, hands) {
        this.name = name;
        this.noOfHands = hands;
        this.noOfLegs = legs;
        this.skinType = "Furr";
    }
    print() {
        console.log("This is animal class " + this.name);
    }
    showAnimal() {
        console.log("This is show Animal " + this.name);
    }
}
new Animal('Cat', 4, 0).print();
new Animal('Monkey', 2, 2).showAnimal();
class Person {
    constructor(name, age) {
        this.noOfHands = 2;
        this.noOfLegs = 2;
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const ali = new Person("Ali", 23);
ali.print();
