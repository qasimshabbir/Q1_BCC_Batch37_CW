"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.showPersons = () => {
            console.log(`ShowPersons: ${this.name} is ${this.age} years old`);
        };
    }
    init(name, age) {
        this.name = name;
        this.age = age;
    }
    showPerson() {
        console.log(`ShowPerson: ${this.name} is ${this.age} years old`);
    }
}
const ali = new Person();
ali.init("Ali", 23);
ali.showPerson();
ali.showPersons();
