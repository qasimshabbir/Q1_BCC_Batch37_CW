"use strict";
class Base {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super();
        this.name = "derived";
        console.log("My name is " + this.name);
    }
}
// Prints "base", not "derived"
const d = new Derived();
console.log("Accessing from Outside " + d.name);
