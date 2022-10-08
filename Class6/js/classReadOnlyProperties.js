"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.noOfFace = 1;
        this.showPersons = () => {
            console.log(`ShowPersons: ${this.name} is ${this.age} years old`);
        };
        this.name = name;
        this.age = age;
        this.noOfHands = 2;
    }
    showPerson() {
        console.log(`ShowPerson: ${this.name} is ${this.age} years old`);
    }
}
const ali = new Person("Ali", 23);
ali.showPerson();
ali.showPersons();
