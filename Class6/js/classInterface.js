"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Whales {
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
