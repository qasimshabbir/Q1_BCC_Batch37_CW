"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.showPersons = () => {
            console.log(`ShowPersons: ${this.name} is ${this.age} years old`);
        };
        this.name = name;
        this.age = age;
    }
    showPerson() {
        console.log(`ShowPerson: ${this.name} is ${this.age} years old`);
    }
}
const addAsDriver = (driver) => {
    driver.showPerson();
};
const ali = new Person("Ali", 23);
addAsDriver(ali);
