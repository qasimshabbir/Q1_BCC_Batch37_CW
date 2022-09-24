"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
let nums = [
    [23, 23],
    [50, 60],
    [70, 80],
];
//let [d,e] = ...nums;
function show(nos) {
    nos.forEach(item => {
        console.log(add(...item));
    });
}
show(nums);
