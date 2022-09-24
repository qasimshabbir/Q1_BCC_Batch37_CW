"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = [20.545, 30.25, 40]; //js way
let cities = ['Karachi', 'Lahore', 'Islamabad']; //typescript
let countries = ['Pakistan', 'India', 'Iran'];
function sum(...nos) {
    return nos.reduce((total, no) => total + no);
}
console.log(sum(23, 34, 23, 423, 23, 42, 32, 23, 234));
