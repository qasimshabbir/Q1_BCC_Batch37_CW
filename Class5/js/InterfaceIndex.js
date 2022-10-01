"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Man = {
    name: "Qasim",
    age: 223,
    dob: new Date(),
    gender: "Male"
};
Man.address = '503, Flooor'; //dynamic
Man.country = 'Pakistan';
console.log(Man);
const calculator = {
    add() {
        if (typeof this.left === 'number' && typeof this.right === 'number')
            return (this.left + this.right);
        else {
            return 0;
        }
    },
    subtract() {
        if (typeof this.left === 'number' && typeof this.right === 'number')
            return this.left - this.right;
        else
            return 0;
    },
    add1: (a, b) => a + b
};
calculator.left = 40;
calculator.right = 90;
calculator.multiply = (a, b) => a * b;
///calculator.add = ()=>this.left+calculator.right+200;
calculator.add1 = (a, b) => a + b + 200;
console.log(calculator.add(), calculator.subtract());
console.log(calculator.add1(23, 23));
console.log(calculator.multiply(40, 30));
