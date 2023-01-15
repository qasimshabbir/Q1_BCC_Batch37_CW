"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() {
        this.a = 20;
        this.b = 40;
    }
    show(n) {
        console.log("this number is " + this.n);
    }
    add() {
        return this.a + this.b;
    }
    divide() {
        return "aaa";
    }
    multiply(a) {
        return this.a * this.b;
    }
}
const calc = new Calculator();
calc.x = 20;
calc.y = 20;
calc.z = 20;
calc.a = 30;
calc.show(calc.x);
